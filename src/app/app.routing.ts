import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuardService } from './shared/services/auth-guard.service';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ListingsComponent } from './listings/containers/listings/listings.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { PostListingComponent } from './listings/containers/post-listing/post-listing.component';
import { SingleListingComponent } from './listings/containers/single-listing/single-listing.component';



export const routes: ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'listings', component: ListingsComponent },

  { path: 'post-listing', component: PostListingComponent, canActivate: [AuthGuardService] },

  { path: 'listing/:id', component: SingleListingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }
]);
