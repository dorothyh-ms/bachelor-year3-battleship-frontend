import axiosApi from "../api/axios";
import Board from "../models/Board";
import Turn from "../models/Turn";

export async function takeTurn( turn: Turn) : Promise<Board>   {
    const {data: opponentBoard} = await axiosApi.patch<Board>(`/games/${turn.gameId}/opponent-board`, {
        attackX: turn.attackX,
        attackY: turn.attackY
    });
    return opponentBoard;
}

