import { Injectable, Input} from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreateCommunityService {
    @Input()
    communityDetails = [];
    constructor(private _http: Http) { }

    getTemplates() {
        return this._http.get('/api/v1/communitytemplates').map(res => res.json());
        // return this._http.get('/api/v1/community').map(res => res.json());
    }

    getuserinfo() {
        const url = ' http://localhost:3000/api/v1/user/getinfo';
        return this._http.get(url).map((response: Response) => response.json());
    }

    postNewcommunityDetails(newCommunityObj, domainName) {
        // const headers = new Headers(
        //     {'Content-Type': 'application/json', 'Access-Control-Allow-Methods': ' POST ' });
        //     const options = new RequestOptions({ headers: headers });
            return this._http.post('api/v1/communitytemplates/' + domainName, newCommunityObj).map(() =>
            console.log('New community details posted', newCommunityObj));
        }
    
    isDomainRegisterd(domain: string){
        return this._http.get('api/v1/communities/'+ domain).map((response: Response) => response.json())
        .catch(this.handleError);
    }

    private handleError(error: any){
        return Observable.throw(error.json());        
    }
}
