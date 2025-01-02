import { Component } from '@angular/core';
import {RecipesModule} from '../recipes.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: RecipesModule[] = [
    new RecipesModule('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/b5/7c/ea/b57cea594d3fd949b4ebd8807cecbe0e.jpg')
  ];
}
