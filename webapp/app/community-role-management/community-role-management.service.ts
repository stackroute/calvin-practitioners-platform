import { Injectable } from '@angular/core';
import{Headers,RequestOptions} from'@angular/http';
import {Http,Response} from '@angular/http';
import{Observable} from"rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class RoleServices{

  constructor(private http: Http) { 
     
   }    
     
    updateRole(data)
    {
       let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let body=JSON.stringify(data);
        let url = "http://localhost:3000";
        return this.http.put(`${url}/${data.id}`,data,headers).map(res=>res.json());
    }
      listRoles(){
         console.log("In service");
        let url = "http://localhost:3000/api/v1/community-role-action/get";        
       return this.http.get(url).map(res=>res.json());    

    }

   
}

