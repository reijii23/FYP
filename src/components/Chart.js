import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '14 Nov', value1: 100, value2: 90 },
    { name: '21 Nov', value1: 120, value2: 110 },
    { name: '28 Nov', value1: 80, value2: 70 },
    { name: '5 Dec', value1: 110, value2: 100 },
];

const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value1" stroke="#8884d8" />
                <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
