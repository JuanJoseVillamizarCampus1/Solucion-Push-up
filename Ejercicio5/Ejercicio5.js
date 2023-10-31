// function minNum(SamDaily, KellyDaily, Difference) {
//     if (Difference <= 0) {
//       return 0; // Kelly ya resuelve más problemas que Sam o están empatados.
//     }
    
//     if (SamDaily >= KellyDaily) {
//       return -1; // Sam resuelve más problemas al día, Kelly nunca podrá superarlo.
//     }
  
//     let days = 0;
//     while (Difference > 0) {
//       days++;
//       Difference -= (KellyDaily - SamDaily);
//     }
  
//     return days;
//   }
  
//   // Ejemplo
//   const SamDaily = 3;
//   const KellyDaily = 5;
//   const Difference = 5;
  
//   const minDays = minNum(SamDaily, KellyDaily, Difference);
//   console.log(minDays); // Debería imprimir 1
function minNum(SamDaily, KellyDaily, Difference) {
  if (SamDaily >= KellyDaily) {
    return -1; // Kelly nunca superará a Sam si ella resuelve menos problemas por día
  }

  let samSolved = Difference;
  let kellySolved = 0;
  let days = 0;

  while (samSolved >= kellySolved) {
    samSolved += SamDaily;
    kellySolved += KellyDaily;
    days++;
  }

  return days;
}
// Llama a la función con los valores de entrada
const SamDaily = 3;
const KellyDaily = 5;
const Difference = 5;

const daysNeeded = minNum(SamDaily, KellyDaily, Difference);

// Verifica si es posible que Kelly supere a Sam y muestra el resultado
if (daysNeeded === -1) {
  console.log("Kelly no puede superar a Sam.");
} else {
  console.log(`Kelly superará a Sam en ${daysNeeded} días.`);
}
