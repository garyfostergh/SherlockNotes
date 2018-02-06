import { User } from './user';
import { Category } from './category';

export class Notebook {
    name: string;
    name_NoCase: string;
    favorite: boolean;
    lastModifiedDate: Date;
    createdDate: Date;
    $key: string;
    users: User[];
    categories: Category[];
}