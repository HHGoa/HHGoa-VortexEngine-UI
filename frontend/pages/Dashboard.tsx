import React, { useState } from 'react';
import GraphFetch, { DataAdded } from '../components/GraphFetch';

const Dashboard: React.FC = () => {
  const [dataAddeds, setDataAddeds] = useState<DataAdded[]>([]);

  const handleDataReceived = (data: DataAdded[]) => {
    setDataAddeds(data);
  };

  return (
    <div className='pt-20 px-4'>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <GraphFetch onDataReceived={handleDataReceived} />
      <div className="overflow-x-auto">
        {dataAddeds.length > 0 ? (
          <table className="min-w-full bg-black border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">VortexScan ID</th>
                <th className="py-2 px-4 border-b">User Address</th>
                <th className="py-2 px-4 border-b">Data URI</th>
              </tr>
            </thead>
            <tbody>
              {dataAddeds.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.id}</td>
                  <td className="py-2 px-4 border-b">{item.VortexScan_id}</td>
                  <td className="py-2 px-4 border-b">{item.user}</td>
                  <td className="py-2 px-4 border-b">{item.dataUri}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-4">No data available</p>
        )}
      </div>
    </div>
  );  
};

export default Dashboard;
