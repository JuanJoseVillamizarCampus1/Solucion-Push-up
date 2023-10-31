//1.Escriba un programa que reciba como entrada un número entero n, y entregue como salida el enésimo número de Fibonacci:
function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  console.log(fibonacci(3)); 

  //1.2. Escriba un programa que reciba como entrada un número entero e indique si es o no un número de Fibonacci:
  function esFibonacci(n) {
    if (n === 0 || n === 1) {
      return true;
    } else {
      for (let i = 0; i < n; i++) {
        if (fibonacci(i) === n) {
          return true;
        }
      }
      return false;
    }
  }
  console.log(esFibonacci(4)); 
  //1.3Escriba un programa que muestres los m primeros números de Fibonacci, donde m es un número ingresado por el usuario:
  function primerosNumerosFibonacci(m) {
    for (let i = 0; i < m; i++) {
      console.log(fibonacci(i));
    }
  }
  primerosNumerosFibonacci(10);