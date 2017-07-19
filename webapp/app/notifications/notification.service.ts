import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';

@Injectable()
export class SocketService {
    private socket;

    constructor() {
    }

    // auth(authorize, key) {
    //     this.socket.emit('authorize', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heWFuayBTZXRoaSIsImFwaSI6ImNpcmNsZSIsInNjb3BlcyI6WyJtYWlsY
	// 			m94OmFsbCIsImNpcmNsZTphbGwiLCJmb2xsb3c6YWxsIl0sImlhdCI6MTQ5NzkzODEzOX0.cpLAt8BaYZyqyp53iDJGbl3yIBtBjj6_qoSiM4_hDiY`);
    // }

    // listen(event) {
    //     this.socket.emit('startListeningToMailbox', this.message);
    // }

    // stop(event) {
    //     this.socket.emit('stoptListeningToMailbox', this.message);
    // }

    public get(username: string) {
        let observable = new Observable(observer => {
            this.socket = io('http://localhost:4100');

            this.socket.emit('authorize', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heWFuayBTZXRoaSIsImFwaSI6ImNpcmNsZSIsInNjb3BlcyI6WyJtYWlsY
				m94OmFsbCIsImNpcmNsZTphbGwiLCJmb2xsb3c6YWxsIl0sImlhdCI6MTQ5NzkzODEzOX0.cpLAt8BaYZyqyp53iDJGbl3yIBtBjj6_qoSiM4_hDiY`);
            
            this.socket.emit('startListeningToMailbox', {"mid":null, "user":username});

            this.socket.on('newActivity', (activity) => {
                observer.next(activity);
            });
            return () => {
                this.socket.disconnect();
            };

        });
        return observable;
    }
}