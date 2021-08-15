import { Component, Input, OnInit } from '@angular/core';
import { grintoma } from '../my_classes/grintoma';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerInfo: grintoma;
  constructor() { }

  ngOnInit(): void {
  }

}
