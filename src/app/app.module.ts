import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule,
  MatSelectModule, MatOptionModule } from '@angular/material';
import { SettingComponent } from './settingComponent/setting.component';
import { SearchComponent } from './searchComponent/search.component';
import { ChattingComponent } from './chatting.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, ChattingComponent, SettingComponent, SearchComponent
  ],
  imports: [
    BrowserModule, MatListModule, MatToolbarModule, MatGridListModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
