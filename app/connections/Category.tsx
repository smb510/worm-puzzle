import { Grid2, Paper } from "@mui/material"
import { Category } from "./Connections"

export default function CatRow({ category }: {
    category: Category,
}) {
    return <Grid2 size={12} display="grow" key={category.color}>
        <Paper
            sx={{
                display: 'flex',
                textAlign: 'center',
                backgroundColor: category.color,
                color: "black",
                padding: '40px',
                margin: '20px'
            }}
        >
            {category.category}<br />
            {category.items}
        </Paper>
    </Grid2 >
}