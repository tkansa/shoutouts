import axios from 'axios';
import { ShoutOut } from '../models/shoutOut';

export function getAllShoutOuts() {
    return axios.get<ShoutOut[]>("http://127.0.0.1:5001/shoutoutspart1/us-central1/api/shoutouts");
}

export function addShoutOut(shoutOut: ShoutOut){
    return axios.post<ShoutOut>("http://127.0.0.1:5001/shoutoutspart1/us-central1/api/shoutouts", shoutOut);
}