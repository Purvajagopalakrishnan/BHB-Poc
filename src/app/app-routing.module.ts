import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DatasetDialogTemplateComponent } from './core/component/dataset-dialog/dataset-dialog-template.component';
import { DatasetStatusComponent } from './core/component/dataset-status/dataset-status.component';
import { NewDatasetComponent } from './new-dataset/new-dataset.component';


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
  },
  {
    path: 'populatedataset/:name', 
    component: DatasetDialogTemplateComponent
  },
  {
    path: 'new-dataset',
    component: NewDatasetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
