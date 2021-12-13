import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', //select using [] like css
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  disabledString = '';
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreationStatus =
      'A new server was created named' + this.serverName;
  }
  // onUpdateServerName(event: Event) {
  //   console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
