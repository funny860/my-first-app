import { Component } from '@angular/core';
//add a decorator
@Component({
  selector: 'first-server',
  templateUrl: './first-server.component.html',
})
export class FirstServerComponent {
  serverId = 10;
  serverStatus = 'Offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
