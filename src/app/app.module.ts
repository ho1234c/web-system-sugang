import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { navComponent } from './navComponent/nav.component';
import { mainComponent} from './mainComponent/main.component';
import { tableComponent} from './tableComponent/table.component';
import { noticeComponent } from './noticeComponent/notice.component';
import { addsubjectComponent } from './addsubjectComponent/addsubject.component';
import { mysubjectComponent } from './mysubjectComponent/mysubject.component';
import { chatComponent } from './chatComponent/chat.component';
import { modalComponent } from './modalComponent/modal.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule,
  MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule, MatMenuModule,
  MatAutocompleteModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatSliderModule,
  MatSnackBarModule, MatTooltipModule,
  MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule,
  MatPaginatorModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatSortModule, MatTableModule,
  MatTabsModule, MatStepperModule
  } from '@angular/material';
// import {MaterialModule} from './material.module';
<<<<<<< HEAD
=======
import { AnnounceComponent } from './announceComponent/announce.component';
import { SearchComponent } from './searchComponent/search.component';
import { ChattingComponent } from './chatting.component';
import { JoinComponent } from './joinComponent/join.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { MainComponent} from './main.component';
import { TableComponent} from './table.component';
>>>>>>> e7bdbc82c9db053da95c300c8dd12607662b1087



@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent, navComponent, mainComponent, tableComponent, noticeComponent, addsubjectComponent, mysubjectComponent, chatComponent, modalComponent
=======
    AppComponent, ChattingComponent, AnnounceComponent, SearchComponent, JoinComponent,
    // MaterialModule,
    NavComponent, MainComponent, TableComponent, LoginModalComponent
>>>>>>> e7bdbc82c9db053da95c300c8dd12607662b1087
  ],
  imports: [
    BrowserModule,  FormsModule, routing,
    MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatButtonModule,
    MatIconModule, MatMenuModule, MatAutocompleteModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatSliderModule,
    MatSnackBarModule, MatTooltipModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule,
    MatPaginatorModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatTabsModule, MatStepperModule,
    BrowserAnimationsModule, HttpClientModule, HttpModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
