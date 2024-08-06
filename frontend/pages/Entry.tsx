import React, { useState, FormEvent } from "react";
import { createEntry as createEntryFunction } from "@/entry-functions/createEntry";
import { aptosClient } from "@/utils/aptosClient";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQueryClient } from "@tanstack/react-query";

interface EntryProps {}

export const Entry: React.FC<EntryProps> = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const queryClient = useQueryClient();

  const [ipfscontent, setIpfscontent] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleCreateEntry = async (e: FormEvent) => {
    e.preventDefault();
    if (!account) return;

    const transactionData = createEntryFunction({
      account: account.address,
      ipfscontent,
      timestamp,
    });

    try {
      const response = await signAndSubmitTransaction(transactionData);
      await aptosClient().waitForTransaction(response.hash);
      queryClient.invalidateQueries();
      setIpfscontent("");
      setTimestamp("");
      console.log("Entry created successfully");
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (
    <form onSubmit={handleCreateEntry}>
      <div>
        <label htmlFor="ipfscontent">IPFS Content:</label>
        <input
          type="text"
          id="ipfscontent"
          value={ipfscontent}
          onChange={(e) => setIpfscontent(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="timestamp">Timestamp:</label>
        <input
          type="text"
          id="timestamp"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Entry</button>
    </form>
  );
};
