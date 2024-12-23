import { Box, Stack } from "@mui/material";
import { useAvailableGames } from "../hooks/useGames";

const AvailableGamesPage = () => {
    const {games } = useAvailableGames();
    return (
        <Stack direction="row">
            {
                games && <Box>
                   
                </Box>
            }
        </Stack>

    );
}

export default AvailableGamesPage;