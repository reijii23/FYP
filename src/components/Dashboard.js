import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Chart from './Chart';
import KPIBox from './KPIBox';

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Paper>
                        <KPIBox title="Conversions" value="229" subtext="past 7 days" />
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper>
                        <KPIBox title="Conversion rate" value="0.9%" subtext="7 day average" />
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper>
                        <KPIBox title="Sessions" value="26.9K" subtext="past 7 days" />
                        <Chart />
                    </Paper>
                </Grid>
                {/* Add more grid items for other KPIs */}
            </Grid>
        </Box>
    );
};

export default Dashboard;
