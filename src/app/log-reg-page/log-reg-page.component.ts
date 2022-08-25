import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-log-reg-page',
  templateUrl: './log-reg-page.component.html',
  styleUrls: ['./log-reg-page.component.css']
})


export class LogRegPageComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthenticationService) { }

  //--Login variables--//
  isLogin: boolean = true;
  buttonTitle: String = 'Register'

  //---------------------------Login---------------------------------------------------------------------------//
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',[ Validators.required, Validators.minLength(5)])
  });

  ngOnInit(): void {
     this.isLogin = this.route.snapshot.url[0].path === 'login' ? true : false;
     if (this.isLogin === false) {
      this.buttonTitle = 'Login'}
       else {
        this.buttonTitle = 'Register'
       }
     console.log(this.isLogin)
  }

  logRegChange(e:any) {
    this.router.navigate([e.toLowerCase()])
  }

  login(): void {
    let username = this.loginForm.get('username')?.value || "";
    let password = this.loginForm.get('password')?.value || "";
    this.auth.login(username, password).subscribe(() => this.router.navigateByUrl("/home"));
  }

  //Google Login
  googleauthenticate() {

    try {
      this.auth.authenticate().then((user)  => {
        console.log('user in here')
        console.log(user)
        this.router.navigate(['home'])
      })
    } catch(error) {

    }
  }
  

}
