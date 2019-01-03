import { Component } from '@angular/core';
import { StoreDevtools } from '@ngrx/store-devtools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
      /*
      const mySocket = new WebSocket('ws://127.0.0.1:8000/socketcluster/', []);
      mySocket.addEventListener('open', function (evt: any) { console.log('We are Open'); evt.target.send('Hello'); });
      mySocket.addEventListener('message', function(evt: any) { console.log('We got a message: ', evt.data); evt.target.close(); });
      mySocket.addEventListener('close', function(evt: any) { console.log('The Socket was Closed:', evt.code, evt.reason); });
      mySocket.addEventListener('error', function(evt: any) { console.log('The socket had an error', evt.error); }); */
  }

  jumpToAction() {
    //this.storeDevtools.jumpToAction(window['actionID']);
  }
}
