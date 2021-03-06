import { Component } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from 'app/shared/data-storage.service';
import { AuthService } from 'app/auth/auth.service';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                // (response: HttpEvent<Object>) => console.log(response.type === HttpEventType.Response),
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}