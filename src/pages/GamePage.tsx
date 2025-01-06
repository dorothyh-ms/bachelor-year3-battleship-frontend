import {  Stack, Typography } from "@mui/material";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGames";
import OpponentBoardContainer from "../components/OpponentBoardContainer";
import PlayerBoardContainer from "../components/PlayerBoardContainer";

const GamePage = () => {
    const { user } = useContext(AuthContext);
    const { gameId } = useParams();
    const { game } = useGame(gameId!);
    const canTakeTurn = game?.currentPlayerId == user?.id;
    return (
        <Stack direction={{ xs: "column", xl: "row" }} gap={10}>
            {game && <>
                <Stack direction={"column"} gap={2} sx={{alignItems: "center"}}>
                    <Typography variant='h6'>{game.over ? game.playerBoard.defeated ? "You lost" : "You won" : "Your board"}</Typography>
                    <PlayerBoardContainer 
                    gameOver={game.over}
                    board={game.playerBoard}
                     />
                </Stack>
                {gameId && <Stack direction={"column"} gap={2} sx={{alignItems: "center"}}>
                    {
                        <Typography variant='h6'>{game.over ? game.opponentBoard.defeated ? "Opponent lost" : "Opponent won" : canTakeTurn ? "Attack your opponent": "Waiting for opponent to take their turn..."}</Typography>
                    }
                    <OpponentBoardContainer
                        gameId={gameId}
                        canTakeTurn={canTakeTurn && !game.over}
                        board={game.opponentBoard}
                        gameOver={game.over}
                         />
                </Stack>}
                
            </>
            }
            {
                !gameId && <Typography>Navigate to the BanditGames platform to start a game.</Typography>
            }

        </Stack>

    );
}

export default GamePage;