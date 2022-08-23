import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-log-reg-page',
  templateUrl: './log-reg-page.component.html',
  styleUrls: ['./log-reg-page.component.css']
})
export class LogRegPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  isLogin: boolean = true;

  ngOnInit(): void {
     this.isLogin = this.route.snapshot.url[0].path === 'login' ? true : false;
     console.log(this.isLogin)
  }

}
