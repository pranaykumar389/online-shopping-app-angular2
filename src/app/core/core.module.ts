import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeService } from "app/recipes/recipe.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { AuthInterceptor } from "app/shared/auth.interceptor";
import { LoggingInterceptor } from "app/shared/logging.interceptor";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService, 
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    ]
})
export class CoreModule {}