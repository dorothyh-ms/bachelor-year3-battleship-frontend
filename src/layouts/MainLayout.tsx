import { Box } from "@mui/material"
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return (
        <Box sx={{flexGrow: 1, gap: 2}}>
            <Outlet />
        </Box>
    )
}

export default MainLayout;