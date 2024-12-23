import Coordinate from "./Coordinate";

export type Ship = {
id: string;
type: ShipType;
status: string;
numHits: number;

}

export enum ShipType {
    CARRIER = 5,
    BATTLESHIP = 4,
    CRUISER = 3,
    SUBMARINE = 3,
    DESTROYER = 2
}


export enum ShipStatus {
    AFLOAT,
    SUNK
}

