/// <reference types="gapi.auth2" />
import { Injectable,NgZone } from '@angular/core';
declare var gapi: any;
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  fakeUsername: string = "username";
  fakePassword: string = "password";

  //google
  public gapiSetup: boolean = false;
  public googleauthInstance: gapi.auth2.GoogleAuth | undefined;
  public user: gapi.auth2.GoogleUser | undefined;
  error: any;

  constructor(private zone: NgZone) { }

  login(username: string, password: string): Observable<any> {
        // Mock a successful call to an API server.
        if (username == this.fakeUsername && password == this.fakePassword) {
          localStorage.setItem("token", "my-super-secret-token-from-server");
          return of(new HttpResponse({ status: 200 }));
        } else {
          return of(new HttpResponse({ status: 401 }));
        }
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem("access_token") != null) {
      return true;
    }
    return false;
  }

  private setToken(token:any, type:string) {
    console.log(token.Cc)
    console.log(token)
    localStorage.setItem(type, JSON.stringify(token));
  }

  //Google OAuth

  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '889333221572-ip0guj2uda2u14umhh1tlks4tnk6iscc.apps.googleusercontent.com', scope: 'email',  plugin_name:'just-chat' })
        .then((auth: gapi.auth2.GoogleAuth | undefined) => {
          this.gapiSetup = true;
          this.googleauthInstance = auth;
        });

        console.log('GoogleAuthinst', this.googleauthInstance)
    });
  }

  public   async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
    return new Promise(async (resolve, reject) => {
      await this.googleauthInstance?.signIn().then(
        user => {this.user = user;this.setToken(user, 'access_token') ;resolve(user)},
        error => {this.error = error; reject(error)});
    });
  }

  public async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return this.googleauthInstance?.isSignedIn.get() || false;
  }

  public async getCurrentUser(): Promise<any> {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.googleauthInstance?.currentUser.get();
    }
    return this.user;
  }

  

}
