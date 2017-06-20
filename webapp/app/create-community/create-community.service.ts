import { Injectable, Input} from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateCommunityService {
    @Input()
    communityDetails= [];
    constructor(private _http: Http) { }

    postfavdata(val) {
        const headers = new Headers(
            { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        const options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:4200/api/bear', val).map(() => console.log('New community details posted'));
    }
}
