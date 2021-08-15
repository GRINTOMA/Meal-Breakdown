import { Component, OnInit, Input } from '@angular/core';
import {food} from '../my_classes/food';
import {breakfastFood} from '../../assets/meals/breakfast.json';
import {lunchFood} from '../../assets/meals/lunch.json';
import {dinnerFood} from '../../assets/meals/dinner.json';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  breakfast:food[];
  lunch:food[];
  dinner:food[];
  index:number;

  constructor() 
  {
    this.index = 0;
    this.breakfast = JSON.parse(JSON.stringify(breakfastFood));
    this.lunch = JSON.parse(JSON.stringify(lunchFood));
    this.dinner = JSON.parse(JSON.stringify(dinnerFood));
  }

  ngOnInit(): void {
  }
  selectBreakfast(i:number){
    this.index = i;
    return this.breakfast[i].name;
  }
  selectLunch(i:number){
    this.index = i;
    return this.lunch[i].name;
  }
  selectDinner(i:number){
    this.index = i;
    return this.dinner[i].name;
  }
}
