import React from "react";
import { useWalletKit } from "@mysten/wallet-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { toast } from "react-toastify";

function ListItem({ widgetToList, price, packageId, marketplaceId, afterListing }) {
  const { signAndExecuteTransactionBlock } = useWalletKit();

  const listItem = async () => {
    try {
      // insert code here

      if (afterListing) {
        await afterListing();
      }

      toast.success(`Listing created!`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    } catch (e) {
      alert("Failed to list item");
      console.log(e);
    }
  };

  return (
    <div>
      <button className="button" onClick={listItem}>
        list item
      </button>
    </div>
  );
}

export default ListItem;
