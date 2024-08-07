import React, { useState } from "react";
import GraphFetch, { DataAdded } from "../components/GraphFetch";
import GradientBackground from "@/components/Background";
import Navbar2 from "@/components/Navbar2";

const Dashboard: React.FC = () => {
  const [dataAddeds, setDataAddeds] = useState<DataAdded[]>([]);

  const handleDataReceived = (data: DataAdded[]) => {
    setDataAddeds(data);
  };

  return (
    <div className=" ">
      <GradientBackground>
        <Navbar2 />
        <div className="pt-24 md:pt-36 min-h-screen px-4">
          <GraphFetch onDataReceived={handleDataReceived} />
          <div className="overflow-x-auto">
            {dataAddeds.length > 0 ? (
              <table className="mx-auto bg-transparent backdrop-blur-2xl border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 brandy-font border border-gray-200">ID</th>
                    <th className="py-2 px-4 brandy-font border border-gray-200">VortexScan ID</th>
                    <th className="py-2 px-4 brandy-font border border-gray-200">User Address</th>
                    <th className="py-2 px-4 brandy-font border border-gray-200">Data URI</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAddeds.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border border-gray-200">{item.id}</td>
                      <td className="py-2 px-4 text-center border border-gray-200">{item.VortexScan_id}</td>
                      <td className="py-2 px-4 border border-gray-200">{item.user}</td>
                      <td className="py-2 px-4 border border-gray-200">{item.dataUri}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center mt-4">No data available</p>
            )}
          </div>
        </div>
      </GradientBackground>
    </div>
  );
};

export default Dashboard;
