import { Box, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/

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
    },
    width: '100%',
}));

export default function Header(
    { answer,
        onMatch,
        question = "Enter password..." }:{
            answer: string,
            onMatch: (_: boolean) => void,
            question: string
        }) {
    return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <GuessBar>
                    <StyledInputBase onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                        onMatch(event.target.value.toUpperCase() == answer.toUpperCase())
                    }} placeholder={question} />
                </GuessBar>
            </Toolbar>
        </AppBar>
    </Box>
}