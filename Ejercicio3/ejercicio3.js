function sumaDivisores(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        suma += i;
      }
    }
    return suma;
  }
  
  function encontrarParesAmigables(rangoInicio, rangoFin) {
    const paresAmigables = [];
  
    for (let m = rangoInicio; m <= rangoFin; m++) {
      const n = sumaDivisores(m);
  
      if (n > m && sumaDivisores(n) === m) {
        paresAmigables.push([m, n]);
      }
    }
  
    return paresAmigables;
  }
  
  // Define el rango en el que deseas buscar pares amigables.
  const rangoInicio = 1000;
  const rangoFin = 1500;
  
  const paresEncontrados = encontrarParesAmigables(rangoInicio, rangoFin);
  
  // Imprime los pares amigables encontrados.
  for (const par of paresEncontrados) {
    console.log(`Pareja amigable: ${par[0]} y ${par[1]}`);
  }
  