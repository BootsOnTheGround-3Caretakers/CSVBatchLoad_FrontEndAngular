import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CsvFormUploadComponent } from './csv-form-upload/csv-form-upload.component';
//import { CSVFormComponent } from './csv-upload-form/csv-upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CsvFormUploadComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NgbModule,
    RouterModule.forRoot([
      { path: '', component: CsvFormUploadComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
