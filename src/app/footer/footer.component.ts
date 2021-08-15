import { Component, OnInit, Input } from '@angular/core';
import {grintoma} from '../my_classes/grintoma';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() headerInfo: grintoma;
  constructor() { }

  ngOnInit(): void {
  }

}
