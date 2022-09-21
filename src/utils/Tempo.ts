export abstract class  Tempo {
  public static tempoTotal(tempo="00:00:00"):number{
      const [horas, minutos, segundos] = tempo.split(":");
      const horasEmSegundos = Number(horas) * 3600;
      const minutosEmSegundos = Number(minutos) * 60;
      const totalEmSegundos = Math.floor(horasEmSegundos) + Math.floor(minutosEmSegundos) + Math.floor(Number(segundos));
      return totalEmSegundos;
   }

   public static segundosEmHoraMinutosSegundos(totalSegundos:number) :string{
      const horas = Math.floor(totalSegundos / 3600);
      const minutos = Math.floor((totalSegundos / 60) % 60);
      const segundos = Math.floor(totalSegundos % 60);
      return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
   }
}



