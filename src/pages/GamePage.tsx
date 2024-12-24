import { Box, Stack, Typography } from "@mui/material";

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
                <Stack direction={"column"}>
                    <Typography variant='h6'>Your board</Typography>
                    <PlayerBoardContainer board={game.playerBoard} />
                </Stack>
                {gameId && <Stack direction={"column"}>
                    <Typography variant='h6'>{canTakeTurn ? "Attack your opponent" : "Waiting for opponent..."}</Typography>
                    <OpponentBoardContainer
                        gameId={gameId}
                        canTakeTurn={canTakeTurn}
                        board={game.opponentBoard} />
                </Stack>}
            </>
            }

        </Stack>

    );
}

export default GamePage;