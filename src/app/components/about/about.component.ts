import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string; 
  public email: string; 

  constructor() {
    this.title = "Paula Elias";
    this.subtitle = "Periodista. Socila Media Manager. Desarrollo web";
    this.email =  "paulad.elias@gmail.com"; 
   }

  ngOnInit(): void {
  }

}
