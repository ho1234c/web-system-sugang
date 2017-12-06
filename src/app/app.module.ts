import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule,
  MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule, MatMenuModule,
  MatAutocompleteModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatSliderModule,
  MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MaterialModule} from './material.module';
import { SettingComponent } from './settingComponent/setting.component';
import { SearchComponent } from './searchComponent/search.component';
import { ChattingComponent } from './chatting.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { MainComponent} from './main.component';
import { TableComponent} from './table.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, ChattingComponent, SettingComponent, SearchComponent,
    // MaterialModule,
    NavComponent, MainComponent, TableComponent
  ],
  imports: [
    BrowserModule,  FormsModule, HttpModule, routing,
    MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatButtonModule,
    MatIconModule, MatMenuModule, MatAutocompleteModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatSliderModule,
    MatSnackBarModule, MatTooltipModule, BrowserAnimationsModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
