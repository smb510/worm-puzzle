import { Grid2, Paper } from "@mui/material"
import { Category } from "./page"

export default function CatRow({ category }: {
    category: Category,
}) {
    return <Grid2 size={4} display="flex" key={category.color}>
        <Paper
            sx={{
                textAlign: 'center',
                backgroundColor: category.color,
                color: "black",
            }}
        >{category.category}</Paper>
    </Grid2 >
}