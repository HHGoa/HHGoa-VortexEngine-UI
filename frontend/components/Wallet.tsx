import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Header } from './Header';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { WalletDetails } from './WalletDetails';
import { NetworkInfo } from './NetworkInfo';
import { AccountInfo } from './AcoountInfo';

function Wallet() {
  const { connected } = useWallet();

  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-col">
        {connected ? (
          <Card>
            <CardContent className="flex flex-col gap-10 pt-6">
              <WalletDetails />
              {/* <NetworkInfo /> */}
              {/* <AccountInfo /> */}
            </CardContent>
          </Card>
        ) : (
          <CardHeader>
            {/* <CardTitle>To get started Connect a wallet</CardTitle> */}
          </CardHeader>
        )}
      </div>
    </>
  );
}

export default Wallet;