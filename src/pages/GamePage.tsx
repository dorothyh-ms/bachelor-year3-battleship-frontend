import { Stack } from "@mui/material";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGames";
import OpponentBoardContainer from "../components/BoardContainer";

const GamePage = () => {
    const {user} = useContext(AuthContext);
    const {gameId} = useParams();

    const {game } = useGame(gameId!);
    console.log("game", game)
    console.log("user", user);
    return (
        <Stack direction="row">
            {game && <OpponentBoardContainer board={game.opponentBoard} />}
        </Stack>

    );
}

export default GamePage;