import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ToolActions {
  constructor(private http: Http) { }

  listTools() {
    console.log('In service');
    const url = 'http://localhost:3000/api/v1/community-tool-actions/tools';
    return this.http.get(url).map(res => res.json());
  }
}
