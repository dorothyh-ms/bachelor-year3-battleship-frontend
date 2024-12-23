import Coordinate from "./Coordinate";

export type Cell = {
    id: string;
    coordinates: Coordinate
    hitStatus: HitStatus, 
    occupiedStatus: OccupiedStatus
    shipId: string;
}

export enum HitStatus {
    HIT,
    UNHIT, 
    MISS
}


export enum OccupiedStatus {
    EMPTY,
    OCCUPIED
}