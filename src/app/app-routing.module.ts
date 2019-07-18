import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DatasetDialogTemplateComponent } from './core/component/dataset-dialog/dataset-dialog-template.component';
import { DatasetStatusComponent } from './core/component/dataset-status/dataset-status.component';


const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'populatedataset',
    component: DatasetDialogTemplateComponent
  },
  {
    path: 'datasetstatus',
    component: DatasetStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
