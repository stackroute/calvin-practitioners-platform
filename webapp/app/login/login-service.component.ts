
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class LoginService {


   constructor(private http: Http){

   }

   loginapp(){

         const url='auth/google';
         return this.http.get(url);
   }

}
