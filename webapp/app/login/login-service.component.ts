
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class LoginService {


   constructor(private http: Http){

   }

   loginapps(){
         console.log('insied service');
      //    window.location = 'http://localhost:3000/auth/google';
         window.location.replace("http://localhost:3000/auth/google");
      //    return this.http.get(url);
   }

}
