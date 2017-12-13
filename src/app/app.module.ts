import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { navComponent } from './navComponent/nav.component';
import { mainComponent} from './mainComponent/main.component';
import { tableComponent} from './tableComponent/table.component';
import { chatComponent } from './chatComponent/chat.component';
import { modalComponent } from './modalComponent/modal.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AuthenticationService } from './loginService';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule,
  MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule, MatMenuModule,
  MatAutocompleteModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatSliderModule,
  MatSnackBarModule, MatTooltipModule,
  MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule,
  MatPaginatorModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatSortModule, MatTableModule,
  MatTabsModule, MatStepperModule
  } from '@angular/material';
import { AnnounceComponent } from './announceComponent/announce.component';
import { SearchComponent } from './searchComponent/search.component';
import { JoinComponent } from './joinComponent/join.component';

@NgModule({
  declarations: [
    AppComponent, navComponent, mainComponent, tableComponent, chatComponent, modalComponent, AnnounceComponent, SearchComponent, JoinComponent
  ],
  imports: [
    BrowserModule,  FormsModule, routing,
    MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatButtonModule,
    MatIconModule, MatMenuModule, MatAutocompleteModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatSliderModule,
    MatSnackBarModule, MatTooltipModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule,
    MatPaginatorModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatTabsModule, MatStepperModule,
    BrowserAnimationsModule, HttpClientModule, HttpModule
  ],
  providers: [ HttpService, AuthenticationService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
