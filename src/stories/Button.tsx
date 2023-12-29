import "./App.css";

const Button = ({
    onClick,
    children,
  }: {
    onClick?: () => void;
    children?: React.ReactNode;
  }) => {
    return (
      <button onClick={onClick} className="button">
        {children}
      </button>
    );
  };
  
  export default Button;
  