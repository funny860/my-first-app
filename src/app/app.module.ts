import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstServerComponent } from './first-server/first-server.component';
import { ServersComponent } from './servers/servers.component';
import { SecondServerComponent } from './second-server/second-server.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstServerComponent,
    ServersComponent,
    SecondServerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
