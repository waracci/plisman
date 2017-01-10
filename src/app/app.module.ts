import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebaseConfig';

import { routes } from './app.routing';
import { AuthGuardService } from './shared/services/auth-guard.service';

import { HomePageModule } from './home-page/home-page.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { ListingsModule } from './listings/listings.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomePageModule,
    NgbModule.forRoot(),
    routes,
    ProfileModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ListingsModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
