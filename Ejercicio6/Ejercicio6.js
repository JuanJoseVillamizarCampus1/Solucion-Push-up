function findLongestSubsequence(arr) {
    const n = arr.length;
    let max_length = 0;
    let isValid = false; // Inicialmente, suponemos que no es válido
  
    // Función para calcular la suma de diferencias
    function sumOfDifferences(subsequence) {
      let sum = 0;
      for (let i = 1; i < subsequence.length; i++) {
        sum += Math.abs(subsequence[i] - subsequence[i - 1]);
      }
      return sum;
    }
  
    // Ordenar el array antes de encontrar las subsecuencias
    arr.sort((a, b) => a - b);
  
    for (let i = 1; i < 1 << n; i++) {
      const subsequence = [];
      for (let j = 0; j < n; j++) {
        if ((i >> j) & 1) {
          subsequence.push(arr[j]);
        }
      }
  
      const differencesSum = sumOfDifferences(subsequence);
  
      if (differencesSum % 2 === 0) {
        // Si la suma de diferencias es par, verifica si es la subsecuencia más larga
        if (subsequence.length > max_length) {
          max_length = subsequence.length;
          isValid = true; // Cambia isValid a true si es válido
        }
      }
    }
  
    if (isValid) {
      return max_length;
    } else {
      return "No válido"; // No se encontró una subsecuencia válida
    }
  }
  
  // Ejemplo de uso
  const arr = [2, 4, 1];
  const result = findLongestSubsequence(arr);
  console.log("Longitud de la subsecuencia más larga con suma de diferencias par:", result);
  