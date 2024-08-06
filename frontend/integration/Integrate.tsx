// External packages
import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { aptosClient } from "@/utils/aptosClient"; // Import your Aptos client instance
import { AccountAddress, AptosClient, TxnBuilderTypes, AptosContract } from "@aptos-labs/aptos-sdk";

// Constants
const VORTEX_ENGINE_ADDRESS = "de5d94dac0db9e017d907b6e02a6d4274e0e2fbbe018e3a698d81e8da2028477";
const MODULE_NAME = "vortex_engine_addr::vortexengine";

// Component
const Integrate = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [ipfsContent, setIpfsContent] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createList = async () => {
    if (!account) return alert("Please connect your wallet");

    setIsLoading(true);
    try {
      const transaction = {
        sender: account.address,
        moduleAddress: VORTEX_ENGINE_ADDRESS,
        moduleName: MODULE_NAME,
        functionName: "create_list",
        typeArguments: [],
        arguments: []
      };

      const response = await signAndSubmitTransaction(transaction);
      await aptosClient().waitForTransaction(response.hash);
      alert("List created successfully!");
    } catch (error) {
      console.error("Error creating list:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createEntry = async () => {
    if (!account) return alert("Please connect your wallet");

    setIsLoading(true);
    try {
      const transaction = {
        sender: account.address,
        moduleAddress: VORTEX_ENGINE_ADDRESS,
        moduleName: MODULE_NAME,
        functionName: "create_entry",
        typeArguments: [],
        arguments: [ipfsContent, timestamp]
      };

      const response = await signAndSubmitTransaction(transaction);
      await aptosClient().waitForTransaction(response.hash);
      alert("Entry created successfully!");
    } catch (error) {
      console.error("Error creating entry:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold mb-4">Integrate with Vortex Engine</h1>
      
      <div>
        <button
          onClick={createList}
          disabled={isLoading}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Creating List...' : 'Create List'}
        </button>
      </div>
      
      <div>
        <label htmlFor="ipfsContent" className="block text-sm font-medium text-gray-700">IPFS Content:</label>
        <input
          id="ipfsContent"
          value={ipfsContent}
          onChange={(e) => setIpfsContent(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="timestamp" className="block text-sm font-medium text-gray-700">Timestamp:</label>
        <input
          id="timestamp"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <button
          onClick={createEntry}
          disabled={isLoading}
          className={`px-4 py-2 bg-green-500 text-white rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Creating Entry...' : 'Create Entry'}
        </button>
      </div>
    </div>
  );
};

export default Integrate;