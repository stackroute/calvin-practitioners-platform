import {Injectable,Input} from '@angular/core';
import { Http,RequestOptions,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class createCommunityService
{
    @Input()
    communityDetails=[];
    constructor(private _http:Http){}
    // getcurrentData()
    // {
    //     let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._http.get('http://localhost:3000/api/bear').map(res=>res.json());
    // }  

        postfavdata(val)
    {
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:3000/api/vi',val).map(()=>console.log('fav movie posted'));
    }   
      
}