import {
  ConnectWallet,
  ThirdwebNftMedia,
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import "./index.css";

// La dirección de tu contrato de colección de NFTs
const NFT_COLLECTION_ADDRESS = "0xCb1518750139401e8eb4b5B67A7E456a71a2dcED";

function App() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data: nfts, isLoading } = useNFTs(contract);

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif", color: "white" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "2rem" }}>Mi Galería de NFTs</h1>
        <ConnectWallet theme="dark" btnTitle="Conectar Billetera" />
      </header>

      {isLoading ? (
        <div style={{ textAlign: "center", fontSize: "1.5rem" }}>Cargando NFTs...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {nfts?.map((nft) => (
            <div
              key={nft.metadata.id}
              style={{
                border: "1px solid #333",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "10px",
                background: "#1a1a1a"
              }}
            >
              <ThirdwebNftMedia
                metadata={nft.metadata}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: "6px"
                }}
              />
              <h2 style={{ fontSize: "1.2rem", marginTop: "10px" }}>
                {nft.metadata.name}
              </h2>
              <p style={{ color: "#999" }}>
                {nft.metadata.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
