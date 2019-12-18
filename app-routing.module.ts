import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomesListComponent} from './awesomes-list/awesomes-list.component';
import {NewAwsomesComponent} from './new-awsomes/new-awsomes.component';
import {AwsomesEditComponent} from './awsomes-edit/awsomes-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AwesomesListComponent
  },
  {
    path: 'add-awesome',
    component: NewAwsomesComponent
  },
  {
    path: 'edit-awesome',
    component: AwsomesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
