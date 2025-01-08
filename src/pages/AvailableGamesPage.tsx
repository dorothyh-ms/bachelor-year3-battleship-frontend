import { Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import { useAvailableGames } from "../hooks/useGames";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';

const AvailableGamesPage = () => {
    const {games, isLoading, isError} = useAvailableGames();
    const navigate = useNavigate();
    
    return (
        <Stack direction="column" gap={4}>
            <Typography variant="h5">Open games</Typography>
           {
            games && games.map((game) => {
                const startDate = dayjs(game.startDateTime);
                return <Card>
                    <CardContent>
                        Game started on {startDate.format("DD/MM/YYYY")} at {startDate.format("HH:MM")}
                    </CardContent>
                    <CardActions >
                        <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => {
                            navigate(`/games/${game.id}`)
                        }}
                        >Join</Button>
                    </CardActions>
                </Card>}
            )
           }
           {
            !isLoading && !isError && !games?.length && <Typography>You have no open games. Navigate to the BanditGames platform to start a game</Typography>
           }
        </Stack>

    );
}

export default AvailableGamesPage;