import { Component, OnInit} from '@angular/core';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../models/mock-recipes';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  recipes = RECIPES;

  selectedRecipe: Recipe

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onOpen() {
    // this.dialog.open();
  }

}
