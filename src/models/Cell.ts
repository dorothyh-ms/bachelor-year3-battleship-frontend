import Coordinate from "./Coordinate";

export type Cell = {
    id: string;
    coordinates: Coordinate
    hitStatus: HitStatus
}

export enum HitStatus {
    HIT,
    UNHIT, 
    MISS
}

