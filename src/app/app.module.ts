import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule, MatToolbarModule, MatGridListModule } from '@angular/material';
//import { SearchSettingComponent } from './searchSetting.component';
//import { SearchListComponent } from './searchList.component';
//import { JoinListComponent } from './joinList.component';
import { ChattingComponent } from './chatting.component';
import { AppComponent } from './app.component';

//import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';

//const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };

@NgModule({
  declarations: [
    AppComponent, ChattingComponent
  ],
  imports: [
    BrowserModule, MatListModule, MatToolbarModule, MatGridListModule,
    //SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
