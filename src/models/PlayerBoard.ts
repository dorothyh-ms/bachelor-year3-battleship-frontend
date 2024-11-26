import Board from "./Board";
import { Ship } from "./Ship";

interface PlayerBoard extends Board {
    ships: Ship[]
}

export default PlayerBoard;