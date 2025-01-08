
import Board from "./Board";
import PlayerBoard from "./PlayerBoard";

type Game = {
    id: string;
    currentPlayerId: string;
    opponentBoard: Board;
    playerBoard: PlayerBoard;
    over: boolean;
    startDateTime: string;
}


export default Game;