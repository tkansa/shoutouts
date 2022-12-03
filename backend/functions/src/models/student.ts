import { ObjectId } from 'mongodb';

export interface Student {
    _id?: ObjectId;
    name: string;
    year: number;
    present: boolean;
}