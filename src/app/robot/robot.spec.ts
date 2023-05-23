import { Robot } from "./robot.class";
 
describe('Pruebas sobre la clase Robot', () => {

    it('Al llamar el metodo iniciarSistema debe llamarse saludarPiloto si la energia es mayor a 0', () => {

    const robot = new Robot('Piloto');

    const spySaludarAlPiloto = spyOn(robot, 'saludarAlPiloto');

    robot.iniciarSistema();

    expect(spySaludarAlPiloto).toHaveBeenCalled();
  });

  it(
    'Al ejecutar el método "iniciarSistema" debe lanzar un error si la energia es 0',
    () => {
      const robot = new Robot('Piloto');
      robot.energia = 0;
      expect(() => robot.iniciarSistema()).toThrowError('NO ENERGY')
    }
  )


  it('Debe ejecutar un log de consola al llamar saludarAlPiloto', () => {
    const robot = new Robot('Piloto');
    const spyOnConsoleLog =  spyOn(console, 'log');

    robot.saludarAlPiloto();

    expect(spyOnConsoleLog).toHaveBeenCalled();
  });
});