import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Alumno } from '../alumnos.component';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  // Subject
  private estudiantes2$ = new Subject<Alumno[]>();

  // BehaviorSubject
  private estudiantes$ = new BehaviorSubject<Alumno[]>([
    {
      id: 1,
      nombre: 'Sara',
      apellido: 'Moreno',
      pais: 'Colombia',
      email: 'sara.moreno@gmail.com',
      telefono: '573112062098'
    },
    {
      id: 2,
      nombre: 'Jhon',
      apellido: 'Aguilar',
      pais: 'Argentina',
      email: 'jhon.aguiar@gmail.com',
      telefono: '3438975234'
    },
    {
      id: 3,
      nombre: 'Martin',
      apellido: 'Gomez',
      pais: 'Mexico',
      email: 'martin.gomez@gmail.com',
      telefono: '3438975234'
    },
  ])

  constructor(private httpClient: HttpClient) { }


  getStudentsFromDB(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${enviroment.apiBaseUrl}/students`);
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}