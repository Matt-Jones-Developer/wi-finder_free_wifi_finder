import styles from './styles/Button.module.css'

const Button = () => {

  return (
    <>
      <button
        className={`${styles.btn} bg-purps text-white rounded-full
           py-2 px-4 hover:bg-dark text-light`}
      >
        {/* this would be a prop */}
        Let's GO
      </button>
      ;
    </>
  );
}

export default Button;

