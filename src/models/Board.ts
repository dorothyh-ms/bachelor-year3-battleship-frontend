import { Cell } from "./Cell";

interface Board {
    isDefeated: boolean;
    cells: Cell[];
    length: number
}

export default Board;