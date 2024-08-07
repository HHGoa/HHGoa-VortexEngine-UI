import React from 'react';
import GraphFetch, { DataAdded } from '../components/GraphFetch';

const Dashboard = () => {
  const handleDataReceived = (data: DataAdded[]) => {
    // Handle the received data here
    console.log(data);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <GraphFetch onDataReceived={handleDataReceived} />
    </div>
  );
};

export default Dashboard;