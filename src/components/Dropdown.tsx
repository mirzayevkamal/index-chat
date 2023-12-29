import { IIndex } from "../types/index.type";
import ListItem from "./ListItem";

const DropDown = ({ items }: { items: IIndex[] }) => {
  return (
    <div className="dropdown">
      {items.map((item) => (
        <div key={item.id} className="dropdown-list">
          <span>{item.headline}</span>
          {item.indexs.map((index) => (
            <ListItem
              key={index.id}
              fontSize={12}
              icon={index.icon}
              title={index.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default DropDown;
