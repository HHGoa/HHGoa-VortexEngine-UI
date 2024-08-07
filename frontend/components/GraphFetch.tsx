import { createClient, Client, fetchExchange, OperationResult } from 'urql';
import { useEffect } from 'react';

export interface DataAdded {
  id: string;
  VortexScan_id: string; // Update the interface to match the query
  user: string;
  dataUri: string;
}

interface GraphFetchProps {
  onDataReceived: (data: DataAdded[]) => void;
}

function GraphFetch({ onDataReceived }: GraphFetchProps) {
  const QueryURL = "https://api.studio.thegraph.com/query/69475/vortexscan/v1";
  const query = `
  {
    entityAddeds(first: 5) {
        id
        VortexScan_id
        user
        dataUri
    }
  }
  `;
  
  const client: Client = createClient({
    url: QueryURL,
    exchanges: [fetchExchange]
  });

  useEffect(() => {
    const getDataAddeds = async () => {
      try {
        const result: OperationResult<{ entityAddeds: DataAdded[] }> = await client.query(query, {}).toPromise();
        if (result.data) {
          console.log(result.data);
          onDataReceived(result.data.entityAddeds);
        } else {
          console.error('No data returned from the query');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getDataAddeds();
  }, [onDataReceived]);

  return null; // Since this component doesn't render anything, return null
}

export default GraphFetch;
