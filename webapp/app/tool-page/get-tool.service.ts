
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetToolService {
     data;
    constructor(private http: Http,public snackBar: MdSnackBar){}

    getTool(toolid) {
    
     const url='http://localhost:3000/api/v1/toolmarketplace/tool/'+toolid;
     return this.http.get(url)
     .catch(err => {
                //  console.log('Unable to add tool',err);

                this.snackBar.open('Unable to Find Tool.. Please try again later..!!!', 'Close', {
                    duration: 3000
                });
                //  this.error=err;
                return Observable.throw(err); // observable needs to be returned or exception raised
            })
     .map((response: Response) => this.data = response);
    }

}