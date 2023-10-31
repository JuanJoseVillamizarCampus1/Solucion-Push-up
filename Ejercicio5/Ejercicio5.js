function minNum(SamDaily, KellyDaily, Difference) {
    if (Difference <= 0) {
      return 0; // Kelly ya resuelve más problemas que Sam o están empatados.
    }
    
    if (SamDaily >= KellyDaily) {
      return -1; // Sam resuelve más problemas al día, Kelly nunca podrá superarlo.
    }
  
    let days = 0;
    while (Difference > 0) {
      days++;
      Difference -= (KellyDaily - SamDaily);
    }
  
    return days;
  }
  
  // Ejemplo
  const SamDaily = 3;
  const KellyDaily = 5;
  const Difference = 5;
  
  const minDays = minNum(SamDaily, KellyDaily, Difference);
  console.log(minDays); // Debería imprimir 1
  