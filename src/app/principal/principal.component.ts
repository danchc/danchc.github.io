import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  list = ["Daniel", "Developer"]

  ngOnInit(): void {
  }

}
