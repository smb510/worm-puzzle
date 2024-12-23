"use client";
import { Box, Button, Grid2 } from "@mui/material";
import { TileData } from "./Tile";
import Row from "./Row";
import { useState } from 'react';
import CatRow from "./Category";

export enum Color {
    Purple = "#B283C1",
    Blue = "#b4c3eb",
    Green = "#A3BE66",
    Yellow = "#F5E07E",
}

export interface Category {
    color: Color,
    category: String
}

const categories: Category[] = [
    {
        color: Color.Purple,
        category: "\"'Twas the night before christmas\" line-enders"
    },
    {
        color: Color.Blue,
        category: "Christmas _____"
    },
    {
        color: Color.Green,
        category: "Biddle Family Christmas Traditions"
    },
    {
        color: Color.Yellow,
        category: "Eggs Benedicts Substitutions"
    }
]


const items = [
    // purple
    {
        text: "Hoof",
        color: Color.Purple
    },
    {
        text: "Mouse",
        color: Color.Purple
    },
    {
        text: "Clatter",
        color: Color.Purple
    },
    {
        text: "Reindeer",
        color: Color.Purple
    },

    // blue
    {
        text: "Prince",
        color: Color.Blue
    },
    {
        text: "Carol",
        color: Color.Blue
    },
    {
        text: "Story",
        color: Color.Blue
    },
    {
        text: "Vacation",
        color: Color.Blue
    },

    // green
    {
        text: "Coal in Stockings",
        color: Color.Green
    },
    {
        text: "Arguing over CEO",
        color: Color.Green
    },
    {
        text: "Trimming Fake Ficus",
        color: Color.Green
    },
    {
        text: "Bundling Silverware",
        color: Color.Green
    },

    // yellow
    {
        text: "Gluten-free Bagel",
        color: Color.Yellow
    },
    {
        text: "Ham",
        color: Color.Yellow
    },
    {
        text: "Fried Egg",
        color: Color.Yellow
    },
    {
        text: "Mornay Sauce",
        color: Color.Yellow
    },
];

function getData(): TileData[][] {
    let board: TileData[][] = [];
    for (let i = 0; i < 4; i++) {
        let row: TileData[] = [];
        for (let j = 0; j < 4; j++) {
            let item = items[(i * 4) + j];
            row.push(new TileData(item.text, i, j, item.color, false));
        }
        board.push(row);
    }
    return board;
}

function setItemSelected(tileData: TileData, board: TileData[][]): TileData[][] {
    board[tileData.row][tileData.col] = tileData;
    return board.slice();
}

function selectedCount(board: TileData[][]): number {
    return board.flat().filter((it) => it.selected).length;
}

function guess(board: TileData[][]): boolean {
    let guessColors = board.flat().filter((x) => x.selected).map((x) => x.color);
    return new Set(guessColors).size == 1;
}

function getGuessColor(board: TileData[][]): Color {
    return board.flat().filter((x) => x.selected).map((x) => x.color)[0];
}


function handleGuess(board: TileData[][]): [TileData[][], any] {
    const color = getGuessColor(board);
    const category = categories.find((p) => p["color"] == color)
    const filteredTiles = board.flat().filter((p) => p.color != color);
    let newBoard: TileData[][] = []
    for (let i = 0; i < filteredTiles.length; i += 4) {
        newBoard.push(filteredTiles.slice(i, i + 4))
    }
    return [newBoard, category];
}

function reset(board: TileData[][]): TileData[][] {
    board.forEach((p) => p.forEach((q) => q.selected = false));
    return board;
}

export default function Test() {
    const [completedCategories, setCompleted] = useState(new Array<Category>());
    const [board, setBoard] = useState(getData());
    return <Box sx={{ flexGrow: 1 }}>
        <Grid2 container rowSpacing={2} columns={4}>
            {
                completedCategories.map((cat) =>
                    <CatRow category={cat} />
                )
            }
            {board.map((row, index) =>
                <Row key={index} rowData={row} onTileSelected={(tile) => {
                    if (selectedCount(board) <= 4) {
                        setBoard(setItemSelected(tile, board));
                        return true;
                    } else {
                        return false;
                    }
                }
                } />
            )}
        </Grid2>
        <Button onClick={
            (_) => {
                if (guess(board)) {
                    const [newBoard, newCategory] = handleGuess(board);
                    setBoard(newBoard);
                    completedCategories.push(newCategory);
                    setCompleted(completedCategories.slice())
                } else {
                    setBoard(reset(board).slice());
                }

            }
        }
            disabled={selectedCount(board) != 4}>Guess</Button>
    </Box >

}