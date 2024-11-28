import { useMutation, useQuery, useQueryClient } from "react-query"
import { getGameById } from "../services/gameService"
import Turn from "../models/Turn"
import { takeTurn } from "../services/turnService"

export function useGame( id: string) {
    const {isLoading, isError, data: game} = useQuery({
        queryKey: ['games',id],
        queryFn: () => getGameById(id)
    })

    return {
        isLoading,
        isError,
        game
    }
}


export function useTakeTurn() {
    const queryClient = useQueryClient();
    const { mutate, isLoading, isError } = useMutation({
        mutationFn: ( turn: Turn) => takeTurn(turn),
        onSuccess: (_, {gameId}) => {queryClient.invalidateQueries(['games', gameId ])},
    });

    return {
        isLoading, // Changed from isPending to isLoading for consistency
        isError,
        takeTurn: mutate,
    };
}