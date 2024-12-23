import { grey, red } from "@mui/material/colors";
import { HitStatus } from "../models/Cell";

type GridTickProps= {
    hitStatus : HitStatus
}

const GridTick = (props: GridTickProps) => {
    const {hitStatus} = props;
    let color: string;

    switch (hitStatus) {
        case HitStatus.HIT:
            color = red[600];
            break;
        case HitStatus.MISS:
            color = grey[900];
            break;
        default:
            color =grey[500];
    }

    const tickSize = 12;
    return 
}

export default GridTick;