import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/RX';

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://angular-online-shopping.firebaseio.com/recipes.json', 
            this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://angular-online-shopping.firebaseio.com/recipes.json')
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for(let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                        return recipes;
                    }
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )
    }

}