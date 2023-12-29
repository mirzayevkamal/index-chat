import { useEffect, useState } from "react";
import Button from "./Button";
import { useSDK } from "@metamask/sdk-react";
import { MetaMaskAvatar } from "react-metamask-avatar";
import DropDown from "./Dropdown";
import { CeramicIcon } from "./CeramicIcon";
import { IIndex } from "../types/index.type";
import { LitIcon } from "./LitIcon";
import { IpsfIcon } from "./IpsfIcon";
import { GitcoinIcon } from "./GitcoinIcon";
import { useChat } from "../providers/ChatProvider";

const indexList: IIndex[] = [
  {
    id: 1,
    headline: "Owned (2)",
    indexs: [
      {
        icon: <CeramicIcon />,
        title: "LLM Research",
        id: 1,
      },
      {
        icon: <CeramicIcon />,
        title: "Web3 Social",
        id: 2,
      },
    ],
  },
  {
    id: 2,
    headline: "Starred (3)",
    indexs: [
      {
        icon: <LitIcon />,
        title: "Lit Protocol Docs",
        id: 4,
      },
      {
        icon: <IpsfIcon />,
        title: "IPFS Docs",
        id: 5,
      },
      {
        icon: <GitcoinIcon />,
        title: "Gitcoin Grants",
        id: 6,
      },
    ],
  },
];

const Profile = () => {
  const [account, setAccount] = useState<string>();
  const [showDropdown, setShowDropdown] = useState(false);
  const { chatHistory, resetChatHistory } = useChat();

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const { sdk, connected } = useSDK();

  const getDetails = async () => {
    try {
      const accounts: any = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  useEffect(() => {
    if (connected) {
      getDetails();
    }
  }, [connected]);

  return (
    <div className="profile">
      {chatHistory.length > 0 && (
        <Button onClick={() => resetChatHistory()}>Reset</Button>
      )}
      {connected && account ? (
        <button className="profile-btn" onClick={handleDropdown}>
          <MetaMaskAvatar address={account} size={32} />
          {showDropdown && (
            <div className="profile-item-list">
              <DropDown items={indexList} />
            </div>
          )}
        </button>
      ) : (
        <Button onClick={getDetails}>Connect Wallet</Button>
      )}
    </div>
  );
};

export default Profile;
