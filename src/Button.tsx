import "./Button.css";

type Props = {
  color: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ color, text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="button"
    >
      <div className="fake-button">
        <div className="button-content">{text}</div>
      </div>
    </button>
  );
}

export default Button;
