import { Component, OnInit, Input} from '@angular/core';
import { RECIPES } from '../models/mock-recipes';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  recipes = RECIPES;

  constructor() { }

  ngOnInit(): void {
  }


}
