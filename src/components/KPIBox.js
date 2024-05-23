import React from 'react';
import { Box, Typography } from '@mui/material';

const KPIBox = ({ title, value, subtext }) => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h4">{value}</Typography>
            <Typography variant="body2">{subtext}</Typography>
        </Box>
    );
};

export default KPIBox;
