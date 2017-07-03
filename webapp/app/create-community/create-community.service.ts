import { Injectable, Input} from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateCommunityService {
    @Input()
    communityDetails = [];
    constructor(private _http: Http) { }

   getcurrentData() {
        // const headers = new Headers(
        //     { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods' : ' GET, POST, PATCH, PUT, DEconstE, OPTIONS' });
        // const options = new RequestOptions({ headers: headers });
        return this._http.get('/api/v1/community').map(res => res.json());
    }
    postcommunitydata(val,domain) {
        const headers = new Headers(
            { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DEconstE, OPTIONS' });
        const options = new RequestOptions({ headers: headers });
        return this._http.post('api/v1/community'+domain, val).map(() => console.log('New community details posted', val));
    }
}
