import { Box, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';
import InputBase from '@mui/material/InputBase';
import { useState} from 'react';
import Link from "next/link";


const GuessBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 30,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(3, 3, 3, 3),
    width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(2, 2, 2, 2),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

export default function Header({answer, nextHref}: {answer: string, nextHref: string}) {
    const [isCorrect, setCorrect] = useState(false)
    return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <GuessBar>
                    <StyledInputBase onInput={(event: React.ChangeEvent<HTMLInputElement>) =>{ 
                    setCorrect(event.target.value.toUpperCase() == answer.toUpperCase())
                }}
                        placeholder="Enter password..."/>
                </GuessBar>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <IconButton
                    disabled={!isCorrect}
                        size="large"
                        color="inherit">
                            <Link href={nextHref}><EastIcon /></Link>
                    </IconButton>
                </Box>

            </Toolbar>

        </AppBar>
    </Box>
}