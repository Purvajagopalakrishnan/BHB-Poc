import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatCardTitle, MatDividerModule, MatCardSubtitle, MatCardContent, MatMenuContent, MatButtonModule, MatButton, MatDialogModule, MatProgressBarModule} from '@angular/material';
import { ModalComponent } from './_directives/modal.component';
import { ModalService } from './_services/modal.service';
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { DatasetDialogTemplateModule } from './core/component/dataset-dialog/dataset-dialog-template.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
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
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
