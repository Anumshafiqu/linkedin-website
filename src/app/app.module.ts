import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkedinHomePageComponent } from './linkedin-home-page/linkedin-home-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MesssagePageComponent } from './messsage-page/messsage-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkedinHomePageComponent,
    MesssagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
