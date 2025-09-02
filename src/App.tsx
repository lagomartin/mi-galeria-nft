import { ConnectWallet, ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../index.css";

// Esta es la dirección de tu contrato que ya creaste en Thirdweb.
const NFT_COLLECTION_ADDRESS = "0xCb1518750139401e8eb4b5B67A7E456a71a2dcED";

const Home = () => {
  // Conectamos con tu contrato usando su dirección
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);

  // Obtenemos los NFTs de tu contrato
  const { data: nfts, isLoading, error } = useNFTs(contract);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem' }}>Mi Galería de NFTs</h1>
        <ConnectWallet
            theme="dark"
            btnTitle="Conectar Billetera"
        />
      </header>

      {isLoading ? (
        <p>Cargando NFTs...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {nfts?.map((nft) => (
            <div key={nft.metadata.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', padding: '10px' }}>
              <ThirdwebNftMedia
                metadata={nft.metadata}
                style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover' }}
              />
              <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>{nft.metadata.name}</h2>
              <p style={{ color: '#666' }}>{nft.metadata.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
