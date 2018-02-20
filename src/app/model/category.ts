import { Note } from "./note";

export class Category {
    name: string;
    name_NoCase: string;
    lastModifiedDate: string;
    createdDate: string;
    key$: string;
    notes: Note[];
}