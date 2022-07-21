import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //inizializzo aos per animazione
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
