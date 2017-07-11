import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';



@Injectable()
export class AddToolService {
    data;
    error;
    constructor(private http: Http, public snackBar: MdSnackBar) { }

    addTool(toolobj) {

        //    const headers = new Headers(
        //         { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DEconstE, OPTIONS' });
        //     const options = new RequestOptions({ headers: headers });
        //     return this.http.post('http://localhost:3000/api/v1/toolmarketplace/tool', toolobj).map(() => console.log('New community details posted', toolobj));  

        const headers = new Headers();
        const url = 'http://localhost:3000/api/v1/toolmarketplace/tool';
        headers.append('Content-Type', 'application/json');


        // return this.http.post(url, toolobj, { headers: headers }).map(data => {
        //     console.log("ok");
        // }, error => {
        //     console.log('------------------------------------',error);
        // });
        // this.http.post(url,toolobj).map(res => {

        //       if(res.status !==200) {
        //              throw new Error('The request has failed !'+res.status);
        //       }
        //      else {
        //          return res;
        //      } 
        // });

        //   this.http
        //   .post(url,toolobj)
        //   .map(res => res)
        //   .subscribe(
        //     (data) => this.data = data,
        //     (err) => this.error = err);


        return this.http
            .post(url, toolobj)
            .catch(err => {
                //  console.log('Unable to add tool',err);

                this.snackBar.open('Unable to add Tool.. Please try again later..!!!', 'Close', {
                    duration: 3000
                });
                //  this.error=err;
                return Observable.throw(err); // observable needs to be returned or exception raised
            })
            .map(data => this.data = data); // handle success

        //         if(this.error)
        //         {
        //             alert('error'+this.error);
        //             this.snackBar.open('Message archived', 'Undo', {
        //              duration: 3000
        // });
        //         }
    }

    getTemplates(){
         
        return this.http.get('/api/v1/communitytemplates').map(res => res.json());
    }

    }
