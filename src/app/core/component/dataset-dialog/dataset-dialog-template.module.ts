import { NgModule } from '@angular/core';
import { DatasetDialogTemplateComponent } from './dataset-dialog-template.component';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatProgressBarModule, MatDialogModule, MatProgressSpinnerModule, matDialogAnimations, MatDialog } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        BrowserModule,
        FormsModule,
        MatProgressBarModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        NgbToastModule,
        ToastrModule
    ],
    exports: [DatasetDialogTemplateComponent],
    declarations: [DatasetDialogTemplateComponent],
    providers: [],
 })
 
 export class DatasetDialogTemplateModule {
 }