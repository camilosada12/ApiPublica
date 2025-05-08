import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';


export class GenericService <T, Tcreate>  {

  public _endpoint : string;
  protected Http = inject(HttpClient);
  private UrlBase = environment.apiUrl

  constructor(endpoint : string) { 
    this._endpoint = `${this.UrlBase}/${endpoint}`;
  }

  public GetAll(): Observable<T[]>{
    return this.Http.get<T[]>(this._endpoint);
  }

  public GetById(id : number): Observable<T>{
    return this.Http.get<T>(`${this._endpoint}/${id}`);
  }

  public Create(entity : Tcreate): Observable<Tcreate>{
    return this.Http.post<Tcreate>(this._endpoint, entity);
  }   
  
  public Update(entity : T): Observable<T>{
    // Extraemos el ID de la entidad y lo incluimos en la URL
    const id = (entity as any).id;
    return this.Http.put<T>(`${this._endpoint}/${id}`, entity);
  } 


  public Delete(id: number): Observable<any> {
    return this.Http.delete<any>(`${this._endpoint}/${id}`);
  }
}
