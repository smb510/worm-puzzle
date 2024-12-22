"use client";

import { Box, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';

/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/


export function OnCompleteHeader({ isComplete, title = undefined, button = false }: {
    isComplete: boolean,
    title?: string,
    button: boolean,
    onComplete: (_: boolean) => void,
}) {
    return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                {title != undefined &&
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: 'block' }}>
                        {title}
                    </Typography>
                }
                <Box sx={{ flexGrow: 1 }} />
                {button &&
                    <Box>
                        <IconButton
                            disabled={!isComplete && !button}
                            size="large"
                            color="inherit"
                            onClick={() => { onComplete(true) }}>
                            <EastIcon />
                        </IconButton>
                    </Box>
                }

            </Toolbar>
        </AppBar>
    </Box>

}