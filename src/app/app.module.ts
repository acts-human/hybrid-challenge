import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NameOutputComponent } from './name-output/name-output.component';
import { IndexContainerComponent } from './index-container/index-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    NameOutputComponent,
    IndexContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
