import React from "react";
import { useWalletKit } from "@mysten/wallet-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { toast } from "react-toastify";

function PurchaseListing({ itemToPurchase, amountSent, packageId, marketplaceId, afterPurchase }) {
  const { signAndExecuteTransactionBlock } = useWalletKit();

  const purchaseListing = async () => {
    try {
      // insert code here

      if (afterPurchase) {
        await afterPurchase();
      }

      toast.success(`Successfully purchased!`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    } catch (e) {
      console.log(e);
      alert("Failed to purchase listing");
    }
  };
  return (
    <div>
      <button className="button" onClick={purchaseListing}>
        purchase item
      </button>
    </div>
  );
}

export default PurchaseListing;
