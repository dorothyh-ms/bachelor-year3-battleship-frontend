import axiosApi from "../api/axios";
import { HitStatus } from "../models/Cell";
import Game from "../models/Game";
import { ShipStatus } from "../models/Ship";

export async function getGameById(gameId: string) : Promise<Game>   {
    const {data: game} = await axiosApi.get<Game>(`/games/${gameId}`);
    game.playerBoard.cells = game.playerBoard.cells.map(cell => ({
        ...cell,
        hitStatus: HitStatus[cell.hitStatus as keyof typeof HitStatus],
    }));


    game.opponentBoard.cells = game.opponentBoard.cells.map(cell => ({
        ...cell,
        hitStatus: HitStatus[cell.hitStatus as keyof typeof HitStatus],
    }));
    return game;
}


export async function getAvailableGames(): Promise<Game[]> {
    const {data: games} = await axiosApi.get<Game[]>(`/games}`);
    for (let game of games){
        
        game.playerBoard.cells = game.playerBoard.cells.map(cell => ({
            ...cell,
            hitStatus: HitStatus[cell.hitStatus as keyof typeof HitStatus],
        }));


        game.opponentBoard.cells = game.opponentBoard.cells.map(cell => ({
            ...cell,
            hitStatus: HitStatus[cell.hitStatus as keyof typeof HitStatus],
        }));
    };
    
    return games;

}