import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  
} from '@angular/material';
import { DeleteComponent } from './delete/delete.component';
import { PutComponent } from './put/put.component';
import { GetComponent } from './get/get.component';
import { GetoneComponent } from './getone/getone.component';
import { PatchComponent } from './patch/patch.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DeleteComponent,
    PutComponent,
    GetComponent,
    GetoneComponent,
    PatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
