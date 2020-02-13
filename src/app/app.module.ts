import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UiHeadComponent } from './ui-head/ui-head.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSliderModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatDialogModule,
  MatTableModule,
  MatBadgeModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UiHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
