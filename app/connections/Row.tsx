"use client";

import { TileData } from './Tile';
import Tile from './Tile';
import { Grid2 } from "@mui/material";

export default function Row({ rowData, onTileSelected }: {
    rowData: TileData[],
    onTileSelected: (tile: TileData) => boolean
}) {
    return <Grid2 display="flex" size={4} columnGap={2}>
        {rowData.map((v) => <Tile onSelected={onTileSelected} key={v.text} data={v} />)}
    </Grid2>
}