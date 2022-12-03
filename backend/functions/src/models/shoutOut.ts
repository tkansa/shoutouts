import { ObjectId } from 'mongodb';

export interface Shoutout {
    _id?: ObjectId;
    to: string;
    from: string;
    message: string;
}