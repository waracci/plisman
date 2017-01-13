import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';



// prevent Ts name not found warnings
declare let Auth0Lock: any;


@Injectable()
export class AuthService {
  userProfile: Object;
  lock = new Auth0Lock('tUyBgKJ3H56FEQY3x9lRf5JO9tRSwtZx', 'macariamarigi.auth0.com', {
    theme: {
      primaryColor: '#007089',
      logo: 'assets/heart.png',
      foregroundColor: '#2f383d'
    },
    languageDictionary: {
      title: 'PlisMan'
    }
  });


  constructor(private _router: Router) {
    // Set userProfile attribute of already saved profile2f383d
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      // fetch profile info
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          alert(error);
          return;
        }
        localStorage.setItem('profile', JSON.stringify(profile));

        this.userProfile = profile;
      });
    });
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  logout() {
    // Remove token & profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    this._router.navigate(['/']);
  }

}
