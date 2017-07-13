import { Injectable, Input} from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class CreateCommunityService {
    data;
    @Input()
    communityDetails = [];
    constructor(private _http: Http, private snackBar: MdSnackBar) { }

    getTemplates() {
        return this._http.get('api/v1/communitytemplates').map(res => res.json());
    }

    getuserinfo() {
        const url = 'api/v1/user/getinfo';
        return this._http.get(url).map((response: Response) => response.json());
    }

    // postNewcommunityDetails(newCommunityObj, domainName) {
    //     return this._http.post(`api/v1/communities/${domainName}`, newCommunityObj).map((res => console.log('helooooooo')));
    // }

    isDomainRegisterd(domain: string){
        return this._http.get('api/v1/communities/'+ domain).map((response: Response) => response.json())
        .catch(this.handleError);
    }

    private handleError(error: any){
        return Observable.throw(error.json());        
    }

    postNewcommunityDetails(newCommunityObj, domainName) {
    return this._http
            .post(`api/v1/communities/${domainName}`, newCommunityObj)
            .catch(err => {
                this.snackBar.open('Please try again later..!!!', 'try again!', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map(data => this.data = data);
    }
}   