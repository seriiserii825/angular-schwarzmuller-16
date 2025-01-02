import { Component } from '@angular/core';
import {IngredientModule} from '../share/ingredient/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 5),
    new IngredientModule('Tomatoes', 10)
  ]
}
