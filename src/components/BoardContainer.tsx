import { Box, Button, Grid, Grid2, Typography } from "@mui/material";
import PlayerBoard from "../models/PlayerBoard";
import Coordinate from "../models/Coordinate";
import { useState } from "react";
import { HitStatus } from "../models/Cell";
import Board from "../models/Board";
import BoardCell from "./BoardCell";
import { useTakeTurn } from "../hooks/useGames";

interface OpponentBoardContainerProps {
  board: Board

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
    const {board}  = props;
    console.log("board", board.length)
    const [coordinates, setCoordinates] = useState<Coordinate|null>(null);


   
    return (
      <Box>
        {/* Container for the entire grid, including labels */}
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: `50px repeat(${board.length}, 50px)`, // 50px for row numbers + grid columns
            gridTemplateRows: `50px repeat(${board.length}, 50px)`,       // 50px for column letters + grid rows
          }}
        >
          {/* Top horizontal axis (letters A-F) */}
          <Box />
          {'abcdefghijklmnopqrstuvwxyz'.split('').splice(0, board.length).map((letter, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
                border: "1px solid black",
                fontWeight: "bold",
              
              }}
            >
              {letter.toUpperCase()}
            </Box>
          ))}
  
          {/* Main grid with left vertical axis (numbers 1-10) */}
          {Array.from({ length: board.length }).map((_, rowIndex) => (
            <>
              {/* Left vertical axis (numbers) */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  border: "1px solid black",
                  fontWeight: "bold",
                }}
              >
                {rowIndex + 1}
              </Box>
  
              {/* Grid row cells */}
              {board.cells
                .filter(cell => cell.coordinates.yCoordinate === rowIndex)
                .map(cell => (
                  <BoardCell 
                  onClick={handleClick}
                  cell={cell}
                  />
                ))}
            </>
          ))}
        </Grid>
      </Box>
    );
  }
  

  export default OpponentBoardContainer;