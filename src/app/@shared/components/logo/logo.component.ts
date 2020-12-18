import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  animationOptions: AnimationOptions = {
    path: '/assets/animations/shipping.json',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
