import { Photo } from './Photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    introduction: string;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    lookingFor?: string;
    photos?: Photo[];
}
