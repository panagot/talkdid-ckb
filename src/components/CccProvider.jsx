import { useEffect, useState } from "react";
import { ccc } from "@ckb-ccc/connector-react";

/**
 * Wraps the app with CCC wallet connector (testnet + mainnet).
 */
export default function CccProvider({ children }) {
  const [clientOptions, setClientOptions] = useState(null);

  useEffect(() => {
    let disposed = false;
    let owner;
    try {
      owner = ccc.OwnerAggregated.from([
        ccc.ClientPublicTestnet.open(),
        ccc.ClientPublicMainnet.open(),
      ]);
      const [testnet, mainnet] = owner.value;
      if (!disposed) {
        setClientOptions([
          { name: "CKB Testnet", client: testnet },
          { name: "CKB Mainnet", client: mainnet },
        ]);
      }
    } catch {
      if (!disposed) setClientOptions([]);
    }
    return () => {
      disposed = true;
      if (owner) void owner.dispose().catch(() => {});
    };
  }, []);

  return (
    <ccc.Provider
      name="TalkDID"
      icon="/favicon.svg"
      clientOptions={
        clientOptions && clientOptions.length > 0 ? clientOptions : undefined
      }
      connectorProps={{
        style: {
          "--background": "#0c1411",
          "--btn-primary": "#1a2e26",
          "--btn-primary-hover": "#d6ff6b",
          "--btn-color": "#e8efe9",
          "--btn-color-hover": "#0c1411",
          "--tip-color": "#c5d4cb",
          color: "#e8efe9",
        },
      }}
    >
      {children}
    </ccc.Provider>
  );
}
