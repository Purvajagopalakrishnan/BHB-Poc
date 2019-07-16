import { NgModule } from '@angular/core';
import { DatasetDialogTemplateComponent } from './dataset-dialog-template.component';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatProgressBarModule, MatDialogModule, MatProgressSpinnerModule, matDialogAnimations, MatDialog } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ],
    exports: [DatasetDialogTemplateComponent],
    declarations: [DatasetDialogTemplateComponent],
    providers: [],
 })
 
 export class DatasetDialogTemplateModule {
 }