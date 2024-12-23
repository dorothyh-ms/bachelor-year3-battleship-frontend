import { alpha, Box, Button } from "@mui/material";
import { Cell, HitStatus } from "../models/Cell"
import { grey, red } from "@mui/material/colors";
import ClearIcon from '@mui/icons-material/Clear';

interface GridCellProps {
    cell: Cell;
    onClick: (x : number, y: number) => void;
    canTakeTurn: boolean;
}

const OpponentGridCell = (props: GridCellProps) => {
    const {cell, onClick, canTakeTurn} = props;
    let color: string;

    switch (cell.hitStatus) {
        case HitStatus.HIT:
            color = red[600];
            break;
        case HitStatus.MISS:
            color = grey[900];
            break;
        default:
            color =grey[500];
    }

    const tickSize = 8;
    
    return (<Button
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
                            onClick(cell.coordinates.xCoordinate, cell.coordinates.yCoordinate)

                        }
                    }
                    disabled={!canTakeTurn || cell.hitStatus.valueOf() !== HitStatus.UNHIT}
                  >
                    {
                    cell.hitStatus == HitStatus.HIT ? <ClearIcon sx={{color: color}}/> : <Box 
                    sx={{width: tickSize, height: tickSize, borderRadius: "999px",  backgroundColor: alpha(color, canTakeTurn ? 1 : 0.5)}} 
                    />  
                }
                    </Button>
                
                 );

}

export default OpponentGridCell;