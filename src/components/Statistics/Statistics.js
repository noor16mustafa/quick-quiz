import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData();

    return (
        <div className='mb-5' style={{ margin: 'auto' }}>
            <h1 className='my-4 text-warning fw-bolder'>Area Chart For Total Quiz data:</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>

                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;