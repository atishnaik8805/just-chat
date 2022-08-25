import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}
