import { Component } from '@angular/core';
//add a decorator
@Component({
  selector: 'first-server',
  templateUrl: './first-server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class FirstServerComponent {
  serverId = 10;
  serverStatus = 'Offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
