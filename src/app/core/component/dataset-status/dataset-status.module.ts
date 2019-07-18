import { NgbAlertModule, NgbAlertConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from '@angular/core';
import { MatProgressBar, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        NgbAlertModule,
        NgbAlertConfig,
        MatProgressSpinnerModule
    ],
})

export class DatasetStatusModule {}