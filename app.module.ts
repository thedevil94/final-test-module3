import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomesComponent } from './awesomes/awesomes.component';
import { AwesomesListComponent } from './awesomes-list/awesomes-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AwsomesEditComponent } from './awsomes-edit/awsomes-edit.component';
import { NewAwsomesComponent } from './new-awsomes/new-awsomes.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AwesomesComponent,
    AwesomesListComponent,
    AwsomesEditComponent,
    NewAwsomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
