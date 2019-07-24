import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatCardTitle, MatDividerModule, MatButtonModule, MatDialogModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';

import {NgbModule, NgbModalModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DatasetDialogTemplateModule } from './core/component/dataset-dialog/dataset-dialog-template.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { DatasetStatusComponent } from './core/component/dataset-status/dataset-status.component';
import { NewDatasetComponent } from './new-dataset/new-dataset.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatasetStatusComponent,
    NewDatasetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    NgbModule,
    NgbModalModule,
    DatasetDialogTemplateModule,
    AngularFontAwesomeModule,
    NgbAlertModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule

  ],
  // providers: [
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
