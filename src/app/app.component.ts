import { Component } from '@angular/core';
import {grintoma} from "./my_classes/grintoma";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GRINTOMA-A4';
  bio:grintoma = {
    sid:991345926,
    sname:"Matthew Grinton", 
    slogin:"GRINTOMA",
    scampus:"Trafalgar",
    stitle:"Assignment 4"
  }
}
