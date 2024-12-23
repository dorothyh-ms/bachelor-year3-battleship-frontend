import { alpha, Box, Button, Grid, Grid2, Typography } from "@mui/material";

import { Cell, HitStatus } from "../models/Cell";
import Board from "../models/Board";

import { useTakeTurn } from "../hooks/useGames";
import BoardGrid from "./BoardGrid";
import { blue, grey, red } from "@mui/material/colors";
import ClearIcon from '@mui/icons-material/Clear';
interface OpponentBoardContainerProps {
  board: Board;
  canTakeTurn: boolean;

}

const OpponentBoardContainer= (props: OpponentBoardContainerProps) => {

  const {takeTurn} = useTakeTurn();
  const handleClick=(x: number, y: number) =>{
    takeTurn({
      gameId: "b5e26938-7d4f-445d-8c61-a3335b1d100a", 
      attackX: x,
      attackY: y
    })
   
  }
    const {board, canTakeTurn}  = props;

    const renderCell = (cell : Cell) => {
      let color: string;
      switch (cell.hitStatus) {
          case HitStatus.HIT:
              color = red[600];
              break;
          case HitStatus.MISS:
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
                      backgroundColor: canTakeTurn? "transparent": grey[100],
                      color: "black",
                      padding: "0px", 
                      borderRadius: "0px"
                    }}
                    onClick={() =>
                        {
                            handleClick(cell.coordinates.xCoordinate, cell.coordinates.yCoordinate)
                        }
                    }
                    disabled={!canTakeTurn || cell.hitStatus.valueOf() !== HitStatus.UNHIT}
                  >
                    {
                    (cell.hitStatus == HitStatus.HIT) || (cell.hitStatus == HitStatus.MISS) ? <ClearIcon sx={{color: color}}/> : <Box 
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