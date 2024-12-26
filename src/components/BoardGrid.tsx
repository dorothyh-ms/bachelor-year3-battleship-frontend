import { Box, Grid } from "@mui/material";

import Board from "../models/Board";
import { Cell } from "../models/Cell";
import { GRID_CELL_HEIGHT } from "../constants/gridCellHeight";

interface BoardGridProps {
  board: Board;
  renderCell: (cell: Cell) => JSX.Element;

}

const BoardGrid = ({ board, renderCell }: BoardGridProps) => {
    
  return (

    <Grid
      container
      sx={{
        display: "grid",
        gridTemplateColumns: `${GRID_CELL_HEIGHT}px repeat(${board.length}, ${GRID_CELL_HEIGHT}px)`,
        gridTemplateRows: `${GRID_CELL_HEIGHT}px repeat(${board.length}, ${GRID_CELL_HEIGHT}px)`,
      }}
    >

      <Box />
      {"abcdefghijklmnopqrstuvwxyz".split("").splice(0, board.length).map((letter, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: GRID_CELL_HEIGHT,
            height: GRID_CELL_HEIGHT,
            border: "1px solid darkgrey",
            fontWeight: "bold",
          }}
        >
          {letter.toUpperCase()}
        </Box>
      ))}
      {/* Main grid */}
      {Array.from({ length: board.length }).map((_, rowIndex) => (
        <>
          {/* Vertical axis */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: GRID_CELL_HEIGHT,
              height: GRID_CELL_HEIGHT,
              border: "1px solid darkgrey",
              fontWeight: "bold",
              
            }}
          >
            {rowIndex + 1}
          </Box>
         

          {/* Grid row cells */}
          {board.cells
            .filter(cell => cell.coordinates.yCoordinate === rowIndex)
            .map(renderCell)}
        </>
      ))}
    </Grid>

  );
};

export default BoardGrid;