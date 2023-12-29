import ListItem from "./ListItem";
import { CeramicIcon } from "./CeramicIcon";
import Profile from "./Profile";
import DropDown from "./Dropdown";
import { IIndex } from "../types/index.type";
import { LitIcon } from "./LitIcon";
import { IpsfIcon } from "./IpsfIcon";
import { GitcoinIcon } from "./GitcoinIcon";
import { useState } from "react";

const indexList: IIndex[] = [
  {
    id: 1,
    headline: "Owned (3)",
    indexs: [
      {
        icon: <CeramicIcon />,
        title: "Ceramic Docs",
        id: 1,
      },
      {
        icon: <CeramicIcon />,
        title: "Ceramic Blog",
        id: 2,
      },
      {
        icon: <CeramicIcon />,
        title: "Ceramic Ecosystem",
        id: 3,
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

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <div className="header">
      <div className="badge">
        <ListItem
          onClick={handleDropdown}
          icon={<CeramicIcon />}
          title="Ceramic Network"
          text="(6)"
        />
        {showDropdown && (
          <div className="index-list">
            <DropDown items={indexList} />
          </div>
        )}
      </div>
      <Profile />
    </div>
  );
};

export default Header;
