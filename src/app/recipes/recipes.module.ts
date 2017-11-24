import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeListComponent } from "app/recipes/recipe-list/recipe-list.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "app/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipesRoutingModule } from "app/recipes/recipes-routing.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {}