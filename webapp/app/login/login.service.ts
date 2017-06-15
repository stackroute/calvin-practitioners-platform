
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class LoginService {

   constructor(private http: Http){
  }

   loginapp(){
         const url='http://localhost:3000/auth/google';
         return this.http.get(url);
   }

}