import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  contacts: any = [{
    'name': 'amith',
    'img': 'base64'
  },{
    'name': 'arjun',
    'img': 'base64'
  },{
    'name': 'radhe',
    'img': 'base64'
  }];

  user: any = {
    'name' : 'atish naik',
    'img': 'base64',
  }

  ngOnInit(): void {
  }

  logout(e:any) {
    if (confirm('Do you want to logout?')) {
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/login')
    }
    
  }

}
