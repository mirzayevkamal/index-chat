export const Avatar = ({
  img,
  avatarDimensions,
  avatarWrapperClassName,
}: {
  img?: string;
  avatarDimensions?: { width: number; height: number };
  avatarWrapperClassName?: string;
}) => {
  return (
    <div className={avatarWrapperClassName}>
      {img && (
        <img
          width={avatarDimensions?.width}
          height={avatarDimensions?.height}
          src={img}
        />
      )}
    </div>
  );
};
