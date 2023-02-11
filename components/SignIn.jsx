import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { FaEthereum } from 'react-icons/fa'

export default function SignIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });

    console.log(signature);
  };

  return (
    <div>
      <button className="flex items-center justify-center gap-2 px-6 py-2 tracking-tight transition duration-300 dark:bg-neutral-400/40 rounded-2xl text-neutral-50 bg-neutral-900 hover:bg-neutral-800/80 dark:hover:bg-neutral-800/80" onClick={handleAuth}>       <FaEthereum/>
 Authenticate</button>
    </div>
  );
}

