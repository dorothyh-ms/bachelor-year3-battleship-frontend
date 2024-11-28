import { Button } from "@mui/material";
import { Cell, HitStatus } from "../models/Cell"

interface BoardCellProps {
    cell: Cell;
    onClick: (x : number, y: number) => void
}

const BoardCell = (props: BoardCellProps) => {
    const {cell, onClick} = props;
    let color: string;

    switch (cell.hitStatus) {
        case HitStatus.HIT:
            color = "red";
            break;
        case HitStatus.UNHIT:
            color = "transparent";
            break;
        case HitStatus.MISS:
            color = "lightgrey";
            break;
        default:
            color ="transparent";
    }
    
    return (<Button
                    key={cell.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "100%",
                      height: "100%",
                      border: "1px solid black",
                      backgroundColor: color,
                      color: "black",
                      padding: "0px"
                    }}
                    onClick={() =>
                        {
                            onClick(cell.coordinates.xCoordinate, cell.coordinates.yCoordinate)

                        }
                    }
                    disabled={cell.hitStatus.valueOf() !== HitStatus.UNHIT}
                  />
                
                 );

}

export default BoardCell;