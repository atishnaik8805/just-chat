import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onButtonClick(e:any) {
    console.log(e);
    this.router.navigate([e], { relativeTo: this.route })
  }

}
