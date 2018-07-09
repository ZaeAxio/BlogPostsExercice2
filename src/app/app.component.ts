import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDJEglEMzC5VuIm8w6Nxh8RSPkHU77slCs",
      authDomain: "blogpostsexercice2.firebaseapp.com",
      databaseURL: "https://blogpostsexercice2.firebaseio.com",
      projectId: "blogpostsexercice2",
      storageBucket: "blogpostsexercice2.appspot.com",
      messagingSenderId: "480549343974"
    };
    firebase.initializeApp(firebaseConfig);
  }
  
}
