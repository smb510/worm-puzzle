"use client";
import { Paper } from "@mui/material";
import { Color } from "./Connections"

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
            textAlign: 'center',
            backgroundColor: data.selected ? "#5a594f" : "#e9e9e1",
            color: "black",
            paddingX: '7px',
            paddingY: '20px',
            marginX: '4px',
        }}
        onClick={(_) => {
            data.selected = !data.selected
            if (!onSelected(data)) {
                data.selected = !data.selected
            }
        }}
    >{data.text}</Paper>
}