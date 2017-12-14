import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatCardModule,
  MatDialogModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatStepperModule,
  
} from '@angular/material';

// import route
import { routing } from './app.routes';

// import service
import { AuthenticationService } from './authService';
import { SubService } from './subService';

// import component
import { AppComponent } from './app.component';
import { NavComponent } from './navComponent/nav.component';
import { MainComponent } from './mainComponent/main.component';
import { TableComponent } from './tableComponent/table.component';
import { ModalComponent } from './modalComponent/modal.component';
import { ChattingComponent } from './chatComponent/chatting.component';
import { AnnounceComponent } from './announceComponent/announce.component';
import { SearchComponent } from './searchComponent/search.component';
import { JoinComponent } from './joinComponent/join.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent, MainComponent, 
    TableComponent, ModalComponent, AnnounceComponent, 
    SearchComponent, JoinComponent, ChattingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [AuthenticationService, SubService],

  bootstrap: [AppComponent]
})
export class AppModule { }
