import { Box } from "@mui/material";
import BoardGrid from "./BoardGrid";
import { Cell } from "../models/Cell";

import PlayerBoard from "../models/PlayerBoard";
import { GRID_CELL_HEIGHT } from "../constants/gridCellHeight";
import { blue, grey, red } from "@mui/material/colors";
import ClearIcon from '@mui/icons-material/Clear';


interface PlayerBoardContainerProps {
  board: PlayerBoard;
  gameOver: boolean;
}

const PlayerBoardContainer = ({ board, gameOver }: PlayerBoardContainerProps) => {
  const renderCell = (cell: Cell) => {


    let color: string;
    switch (cell.hitStatus) {
        case "HIT":
            color = red[600];
            break;
        case "MISS":
            color = blue[900];
            break;
        default:
            color =grey[500];
    }
    const ship = board.ships.find(ship =>
        ship.id === cell.shipId
      );


    let borderColor;

    if (ship){
        if (ship.status == "SUNK"){
            borderColor = red[600];
        } else {
            borderColor = blue[600];
        }
    } else {
        borderColor = "transparent";
    }
let cellColor;
cellColor = (ship && (ship.status == "SUNK")) ? red[600] : "transparent";


    return (
      <Box
        key={`${cell.coordinates.xCoordinate}-${cell.coordinates.yCoordinate}`}
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: GRID_CELL_HEIGHT, 
            height: GRID_CELL_HEIGHT,
            color: "black",
            bgcolor: gameOver ? grey[200] : "transparent"
        }}
      >
       
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2px", 
            width: "80%",
            height: "80%",
            backgroundColor: cellColor,
            border: `2px solid ${borderColor}`,
            borderRadius: "4px"}}>
         {
            (cell.hitStatus == "HIT") || (cell.hitStatus == "MISS") ? <ClearIcon sx={{color: color}}/> : <Box sx={{width: 12, height: 12, borderRadius: "999px",  backgroundColor: color}} />
            }
        </Box>
    </Box>
  
    );
  };

  return (
    <Box>
      <BoardGrid  board={board} renderCell={renderCell}  />
    </Box>
  );
};

export default PlayerBoardContainer;
