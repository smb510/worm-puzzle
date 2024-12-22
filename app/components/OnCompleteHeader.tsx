"use client";

import { Box, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';
import Link from "next/link";

export function OnCompleteHeader({isComplete, nextHref} :{
    isComplete: boolean,
    nextHref: string,
}) {
    return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <IconButton
                    disabled={!isComplete}
                        size="large"
                        color="inherit">
                            <Link href={nextHref}><EastIcon /></Link>
                    </IconButton>
                </Box>

            </Toolbar>

        </AppBar>
    </Box>

}