function main() {
    const universidades = [];
  
    const numUniversidades = parseInt(prompt("Ingrese la cantidad de universidades que participan en el proceso:"));
  
    for (let i = 0; i < numUniversidades; i++) {
      const nombreUniversidad = prompt(`Ingrese el nombre de la Universidad #${i + 1}:`);
      const votos = [];
  
      while (true) {
        const voto = prompt(`Ingrese el voto de un alumno de ${nombreUniversidad} (A para aceptar, R para rechazar, N para nulo, B para blanco, o X para terminar):`).toUpperCase();
  
        if (voto === 'X') {
          break;
        }
  
        if (voto === 'A' || voto === 'R' || voto === 'N' || voto === 'B') {
          votos.push(voto);
        } else {
          alert("Voto no válido. A para aceptar, R para rechazar, N para nulo, B para blanco, o X para terminar.");
        }
      }
  
      const totalVotos = votos.length;
      const totalAceptar = votos.filter(voto => voto === 'A').length;
      const totalRechazar = votos.filter(voto => voto === 'R').length;
  
      universidades.push({
        nombre: nombreUniversidad,
        votos: votos,
        totalVotos: totalVotos,
        totalAceptar: totalAceptar,
        totalRechazar: totalRechazar,
      });
    }
  
    const resultados = {
      aceptan: 0,
      rechazan: 0,
      empate: 0,
    };
  
    for (const universidad of universidades) {
      if (universidad.totalAceptar > universidad.totalRechazar) {
        resultados.aceptan++;
      } else if (universidad.totalRechazar > universidad.totalAceptar) {
        resultados.rechazan++;
      } else {
        resultados.empate++;
      }
  
      console.log(`Resultados para la Universidad ${universidad.nombre}:`);
      console.log(`Total de votos: ${universidad.totalVotos}`);
      console.log(`Aceptan: ${universidad.totalAceptar} votos`);
      console.log(`Rechazan: ${universidad.totalRechazar} votos`);
      console.log(`Votos: ${universidad.votos} votos`);
      console.log('');
    }
  
    console.log(`Resultados generales:`);
    console.log(`Universidades que Aceptan: ${resultados.aceptan}`);
    console.log(`Universidades que Rechazan: ${resultados.rechazan}`);
    console.log(`Empate: ${resultados.empate}`);
  }
  
  main();
  