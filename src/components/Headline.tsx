import clsx from "clsx";

const Headline = ({
  title,
  size,
  className,
}: {
  title?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <h2
      style={{ fontSize: `${size || 20}px`, color: "#1E293B" }}
      className={clsx("headline", className)}
    >
      {title}
    </h2>
  );
};

export default Headline;
