import { alpha, Box, Button, } from "@mui/material";

import { Cell } from "../models/Cell";
import Board from "../models/Board";

import { useTakeTurn } from "../hooks/useGames";
import BoardGrid from "./BoardGrid";
import { blue, grey, red } from "@mui/material/colors";
import ClearIcon from '@mui/icons-material/Clear';
interface OpponentBoardContainerProps {
  gameId: string;
  board: Board;
  canTakeTurn: boolean;
  gameOver: boolean;
}

const OpponentBoardContainer= (props: OpponentBoardContainerProps) => {

  const {takeTurn} = useTakeTurn();
  
    const {board, canTakeTurn, gameId}  = props;
    const handleClick=(x: number, y: number) =>{
      takeTurn({
        gameId: gameId, 
        attackX: x,
        attackY: y
      })
    }

    const renderCell = (cell : Cell) => {
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
  
      const tickSize = 12;
      return <Button
                    key={cell.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "100%",
                      height: "100%",
                    //   border: "1px solid darkgrey",
                      backgroundColor: props.gameOver ? grey[200] : canTakeTurn? "transparent": grey[100],
                      color: "black",
                      padding: "0px", 
                      borderRadius: "0px"
                    }}
                    onClick={() =>
                        {
                            handleClick(cell.coordinates.xCoordinate, cell.coordinates.yCoordinate)
                        }
                    }
                    disabled={!canTakeTurn || cell.hitStatus != "UNHIT"}
                  >
                    {
                    (cell.hitStatus == "HIT") || (cell.hitStatus == "MISS") ? <ClearIcon sx={{color: color}}/> : <Box 
                    sx={{width: tickSize, height: tickSize, borderRadius: "999px",  backgroundColor: alpha(color, canTakeTurn ? 1 : 0.5)}} 
                    />  
                }
                    </Button>
    }


    return (
  <Box>
      <BoardGrid board={board} renderCell={renderCell} />
    </Box>
    );
  }
  

  export default OpponentBoardContainer;