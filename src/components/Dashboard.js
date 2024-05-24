import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Chart from './Chart';
import KPIBox from './KPIBox';

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ padding: 2 }}>
                        <KPIBox title="Daily Sales" value="$34,245" subtext="Last 24 Hours" />
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ padding: 2 }}>
                        <KPIBox title="Email Subscription" value="49/50 GB" subtext="Last Campaign Performance" />
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ padding: 2 }}>
                        <KPIBox title="Completed Tasks" value="75" subtext="Last Campaign Performance" />
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Employees Stats</Typography>
                        {/* Add a table or more detailed stats here */}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
