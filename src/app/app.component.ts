import { Component, OnInit } from '@angular/core';
import * as firbase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firbase.initializeApp({
      apiKey: "AIzaSyBilAbLFbwCMrk5zf3LKMsL11lwWGrEb90",
      authDomain: "angular-online-shopping.firebaseapp.com",
    });
  }
}
