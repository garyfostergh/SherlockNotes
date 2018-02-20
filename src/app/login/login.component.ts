import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private rt: Router) { }

  ngOnInit() {
  }

  login(loginType: string) {
    switch (loginType) {
      case "google":
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.rt.navigate(['home']);
        break;
      case "email":
        break;
    }
  }

  cancel() {
    this.rt.navigate(['home']);
  }

}
