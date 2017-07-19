import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';

@Injectable()
export class SocketService {
   private socket;   
   
    constructor() {
       this.initSocket();
   }
      private initSocket(): void {
       //No URL is being passed, as it default connects with current host itself
       this.socket = socketIo();
   }
}