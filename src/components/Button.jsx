import btnStyle from "../components/styles/Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${btnStyle.btnCTA} font-bold rounded-full py-4 px-12`}
    >
      {children}
    </button>
  );
};

export default Button;
