import { Note } from "./note";

export class Category {
    name: string;
    name_NoCase: string;
    lastModifiedDate: Date;
    createdDate: Date;
    key$: string;
    notes: Note[];
}