import { Cell } from "./Cell";

interface Board {
    defeated: boolean;
    cells: Cell[];
    length: number
}

export default Board;