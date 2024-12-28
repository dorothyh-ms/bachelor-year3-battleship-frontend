
import Board from "./Board";
import PlayerBoard from "./PlayerBoard";

type Game = {
    id: string;
    currentPlayerId: string;
    opponentBoard: Board;
    playerBoard: PlayerBoard;
    isOver: boolean;
    startDateTime: string;
}


export default Game;