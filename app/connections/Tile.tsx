"use client";
import { Paper } from "@mui/material";
import { Color } from "./page"

export class TileData {
    text: string;
    row: number;
    col: number;
    color: Color;
    selected: boolean;

    constructor(text: string, row: number, col: number, color: Color, selected: boolean) {
        this.text = text;
        this.row = row;
        this.col = col;
        this.color = color;
        this.selected = selected;
    }
}

export default function Tile({ data, onSelected }: {
    data: TileData,
    onSelected: (data: TileData) => boolean
}) {
    return <Paper
        sx={{
            width: '20%',
            textAlign: 'center',
            backgroundColor: data.selected ? "#5a594f" : "#e9e9e1",
            color: "black",
        }}
        onClick={(_) => {
            data.selected = !data.selected
            if (!onSelected(data)) {
                data.selected = !data.selected
            }
        }}
    >{data.text}</Paper>
}