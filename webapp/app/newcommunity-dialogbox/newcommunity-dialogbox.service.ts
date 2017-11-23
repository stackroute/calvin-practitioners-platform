import { Injectable, Input} from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateCommunityService {
    @Input()
    communityDetails = [];
    constructor(private _http: Http) { }

}
