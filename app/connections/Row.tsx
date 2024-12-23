"use client";

import { TileData } from './Tile';
import Tile from './Tile';
import { Grid2 } from "@mui/material";

export default function Row({ rowData, onTileSelected }: {
    rowData: TileData[],
    onTileSelected: (tile: TileData) => boolean
}) {
    return <Grid2 display="flex" size={12} rowGap={1} >
        {rowData.map((v) => <Grid2 size={3} columnGap={1} rowGap={1} key={v.text}>
            <Tile onSelected={onTileSelected} data={v} />
        </Grid2>)}
    </Grid2>
}