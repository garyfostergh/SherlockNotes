import { User } from './user';
import { Category } from './category';

export class Notebook {
    name: string;
    name_NoCase: string;
    favorite: boolean;
    lastModifiedDate: string;
    createdDate: string;
    createdBy: string;
    createdByUid: string;
    status: string;
    $key: string;
    users: User[];
    categories: Category[];
}