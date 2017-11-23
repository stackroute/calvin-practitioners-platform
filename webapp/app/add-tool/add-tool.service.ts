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

        

        const headers = new Headers();
        const url = '/api/v1/toolmarketplace/tool';
        headers.append('Content-Type', 'application/json');



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

       
    }

    getTemplates(){
         
        return this.http.get('/api/v1/communitytemplates').map(res => res.json());
    }

    }
