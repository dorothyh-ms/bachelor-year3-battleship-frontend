import Coordinate from "./Coordinate";

export type Cell = {
    id: string;
    coordinates: Coordinate
    hitStatus: "HIT" | "UNHIT" | "MISS" 
    occupiedStatus: "EMPTY" | "OCCUPIED"
    shipId: string;
}

