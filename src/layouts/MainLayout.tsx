import { Box } from "@mui/material"
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return (
        <Box sx={{flexGrow: 1, gap: 2, m: 6, display: "flex", justifyContent: "center"}}>
            <Outlet />
        </Box>
    )
}

export default MainLayout;