import clsx from "clsx";
import Headline from "./Headline";

const ListItem = ({
  onClick,
  icon,
  title,
  text,
  fontSize = 14,
  className,
}: {
  onClick?: () => void;
  icon?: React.ReactNode;
  title?: string;
  text?: string;
  fontSize?: number;
  className?: string;
}) => {
  return (
    <li className={clsx("list-item", className)} onClick={onClick}>
      {icon}
      <div className="headline-text">
        <Headline size={fontSize} className="title" title={title} />
        <span>{text}</span>
      </div>
    </li>
  );
};

export default ListItem;
