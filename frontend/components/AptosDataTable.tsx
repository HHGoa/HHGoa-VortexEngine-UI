import React from "react";

interface DataTableProps<T> {
  columns: string[];
  data: T[];
  loading: boolean; // New prop to indicate loading state
}

const AptosDataTable = <T extends Record<string, any>>({ columns, data, loading }: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-transparent backdrop-blur-2xl border border-gray-200">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4 brandy-font border border-gray-200 text-left">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="py-2 px-4 text-center border border-gray-200">Loading...</td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item, index) => (
              <tr className="bricolage-font" key={index}>
                <td className="py-2 px-4 border border-gray-200">{item.entry_id}</td>
                <td className="py-2 px-4 border border-gray-200 overflow-x-auto whitespace-nowrap">{item.Walletaddress}</td>
                <td className="py-2 px-4 border border-gray-200 overflow-x-auto whitespace-nowrap">
                  <a href={item.ipfscontent} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {item.ipfscontent}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-200">{item.timestamp}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-2 px-4 text-center border border-gray-200">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AptosDataTable;