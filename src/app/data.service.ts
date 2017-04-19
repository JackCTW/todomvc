import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  private requestOptions = new RequestOptions({
    headers: new Headers({
      'authorization': 'token 7a83ab5d-eeda-4883-8705-fd820f159b98'
    })
  });

  constructor(private http: Http) {


  }

  getTodo() {
    return this.http.get('./me/todomvc', this.requestOptions).map(res => {
      return res.json();
    }).catch(error => {
      console.log(error);
      return Observable.of<any[]>([]);
    })
  }

  saveTodos(newTodos: any[]) {
    return this.http.post('./me/todomvc', newTodos , this.requestOptions).map(res => {
      return res.json();
    }).catch(error => {
      console.log(error);
      return Observable.of<any[]>([]);
    });
  }

}
