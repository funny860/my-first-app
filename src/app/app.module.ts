import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstServerComponent } from './first-server/first-server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [AppComponent, FirstServerComponent, ServersComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
