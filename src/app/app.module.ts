import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkedinHomePageComponent } from './linkedin-home-page/linkedin-home-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MesssagePageComponent } from './messsage-page/messsage-page.component';
import { NetworkPageComponent } from './network-page/network-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkedinHomePageComponent,
    MesssagePageComponent,
    NetworkPageComponent,
    JobsPageComponent,
    NotificationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
