import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import 'rxjs/Rx';

import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        // const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization', 'Bearer hjdkss').append()

        // return this.httpClient.put('https://angular-online-shopping.firebaseio.com/recipes.json', 
        //     this.recipeService.getRecipes(), {
        //         // observe: 'events'
        //         observe: 'body',
        //         params: new HttpParams().set('auth', token)
        //         // headers: headers
        //     });
        const req = new HttpRequest('PUT', 
            'https://angular-online-shopping.firebaseio.com/recipes.json', 
            this.recipeService.getRecipes(), 
            // {reportProgress: true, params: new HttpParams().set('auth', token)}
            {reportProgress: true}
        );
        return this.httpClient.request(req);
    }

    getRecipes() {

        // const token = this.authService.getToken();

        // this.httpClient.get<Recipe[]>('https://angular-online-shopping.firebaseio.com/recipes.json?auth=' + token)
        this.httpClient.get<Recipe[]>('https://angular-online-shopping.firebaseio.com/recipes.json',
            {
                observe: 'body',
                responseType: 'json'
            })
            .map(
                (recipes) => {
                    for(let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )
    }

}