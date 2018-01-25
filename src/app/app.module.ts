import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { CategoriesComponent } from "./categories/categories.component";
import { TopicsComponent } from "./topics/topics.component";
import { NotesComponent } from "./notes/notes.component";
import { NotebooksComponent } from "./notebooks/notebooks.component";
import { RouterModule, Route } from "@angular/router";

const firebaseConfig = {
  apiKey: "AIzaSyBR-rZYNPBpBFIgMrQF7flr_lSnKwRytaU",
  databaseURL: "https://sherlocknotescase.firebaseio.com",
  storageBucket: "sherlocknotescase.appspot.com",
  authDomain: "sherlocknotescase.firebaseapp.com",
  messagingSenderId: "341997958663",
  projectId: "sherlocknotescase"
};

const routes: Route[] = [
  { path: "home", component: HomeComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "notebooks", component: NotebooksComponent },
  { path: "topics", component: TopicsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    TopicsComponent,
    NotesComponent,
    NotebooksComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
