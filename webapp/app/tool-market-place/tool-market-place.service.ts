import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolMarketService {
    constructor(private http: Http) { }

    getTools() {
        return this.http
            .get('api/v1/toolmarketplace')
            .map((response: Response) => response.json());
    }
}

