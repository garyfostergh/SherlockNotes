import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loginPress: boolean = false;

  constructor(public afAuth: AngularFireAuth, private rt: Router) { }

  ngOnInit() {
  }

  login() {
    //this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.rt.navigate(['login']);
    this.loginPress = true;
  }
  logout() {
    this.afAuth.auth.signOut();
    this.loginPress = false;
  }
}
