import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';

export default function UserTimelineNewPlaceholder() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: 5
            }}
        >
            <Typography>You do not have any posts yet!</Typography>
        </Box>
    )
}