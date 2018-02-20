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

  constructor(public afAuth: AngularFireAuth, private rt: Router) { }

  ngOnInit() {
  }

  login() {
    //this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.rt.navigate(['login']);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
