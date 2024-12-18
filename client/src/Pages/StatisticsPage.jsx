import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const StatisticsPage = () => {
  const data = useLoaderData()
  console.log(data);
  
    return (
      <div className='m-10'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Statistics | Gadget Heaven</title>
        </Helmet>
        <ResponsiveContainer className={'my-5'} width="100%" height={700}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="price" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="title" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="rating" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="category" fill="blue" activeBar={<Rectangle fill="blue" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
};

export default StatisticsPage;