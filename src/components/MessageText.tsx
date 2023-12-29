import { CopyBlock, dracula } from "react-code-blocks";
import { Avatar } from "./Avatar";

const MessageText = ({
  value,
  img,
  avatarDimensions,
  className,
  avatarWrapperClassName,
}: {
  value?: string;
  img?: string;
  avatarDimensions?: { width: number; height: number };
  className?: string;
  avatarWrapperClassName?: string;
}) => {
  const valueText = value?.split("```")[0];
  const codePart = value?.split("```")[1];
  const valueRest = value?.split("```")[2];
  return (
    <div className={className}>
      <Avatar avatarWrapperClassName={avatarWrapperClassName} img={img} avatarDimensions={avatarDimensions} />
      {codePart ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {valueText}
          <CopyBlock
            text={codePart}
            language={"jsx"}
            showLineNumbers={false}
            theme={dracula}
          />
          {valueRest}
        </div>
      ) : (
        value
      )}
    </div>
  );
};

export default MessageText;
