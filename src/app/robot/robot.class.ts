export class Robot {
    nombrePiloto: string;
    energia = 100;
  
    constructor(nombrePiloto: string) {
      this.nombrePiloto = nombrePiloto;
    }
  
    iniciarSistema(): void {
      if (this.energia) {
        console.log('here');
        this.saludarAlPiloto();
      } else {
        throw new Error('NO ENERGY');
      }
    }
  
    saludarAlPiloto(): void {
      console.log(`Bienvenido, ${this.nombrePiloto}!`);
    }
  }