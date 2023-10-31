function multiplicacionRusa(multiplicador, multiplicando) {
    const multiplicandos = [];
    while (multiplicador > 1) {
      if (multiplicador % 2 === 1) {
        multiplicandos.push(multiplicando);
      }
      multiplicador = Math.floor(multiplicador / 2);
      multiplicando *= 2;
    }
    multiplicandos.push(multiplicando);
    return multiplicandos.reduce((a, b) => a + b);
  }
  console.log(multiplicacionRusa(12, 37)); 
  