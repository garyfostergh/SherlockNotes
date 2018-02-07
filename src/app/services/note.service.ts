import { Category } from './../model/category';
import { Notebook } from './../model/notebook';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Note } from './../model/note';

@Injectable()
export class NoteService {

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  createNotebook(notebook: Notebook) {
    notebook.createdBy = this.auth.auth.currentUser.displayName;
    notebook.createdByUid = this.auth.auth.currentUser.uid;
    notebook.createdDate = Date();
    notebook.lastModifiedDate = Date();

  }

  createCategory(notebookKey: string, category: Category) {

  }

  createNote(categoryKey: string, note: Note) {

  }

}
