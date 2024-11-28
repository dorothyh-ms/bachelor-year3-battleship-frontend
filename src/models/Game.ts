
import Board from "./Board";
import PlayerBoard from "./PlayerBoard";

type Game = {
    currentPlayerId: string;
    opponentBoard: Board;
    playerBoard: PlayerBoard;
    isOver: boolean;
}


export default Game;