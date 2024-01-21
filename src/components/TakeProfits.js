import React from "react";
import { useWalletKit } from "@mysten/wallet-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { toast } from "react-toastify";

function TakeProfits({ packageId, marketplaceId }) {
  const { signAndExecuteTransactionBlock } = useWalletKit();

  const takeProfits = async () => {
    try {
      // insert code here

      toast.success(`Successfully took profits!`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    } catch (e) {
      console.log(e);
      alert("Failed to take profits");
    }
  };
  return (
    <div>
      <button className="button" onClick={takeProfits}>
        take profits
      </button>
    </div>
  );
}

export default TakeProfits;
