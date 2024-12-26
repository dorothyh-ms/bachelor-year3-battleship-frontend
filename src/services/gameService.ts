import axiosApi from "../api/axios";

import Game from "../models/Game";


export async function getGameById(gameId: string) : Promise<Game>   {
    const {data: game} = await axiosApi.get<Game>(`/games/${gameId}`);


    return game;
}


export async function getAvailableGames(): Promise<Game[]> {
    const {data: games} = await axiosApi.get<Game[]>(`/games}`);

    return games;

}