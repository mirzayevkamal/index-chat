const SampleInputBubble = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className="sample-bubble">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 18.5H15.5"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 22.5H14.5"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.59 14.5C15.77 13.52 16.24 12.76 17 12C17.4829 11.5555 17.8662 11.0138 18.1247 10.4106C18.3832 9.80734 18.5111 9.15621 18.5 8.5C18.5 6.9087 17.8679 5.38258 16.7426 4.25736C15.6174 3.13214 14.0913 2.5 12.5 2.5C10.9087 2.5 9.38258 3.13214 8.25736 4.25736C7.13214 5.38258 6.5 6.9087 6.5 8.5C6.5 9.5 6.73 10.73 8 12C8.72405 12.6621 9.218 13.5379 9.41 14.5"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>{text}</span>
    </button>
  );
};

export default SampleInputBubble;
