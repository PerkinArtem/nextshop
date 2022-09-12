import styles from "../styles/ui/Button.module.css";

type ButtonProps = {
  children?: React.ReactNode,
  onClick?: () => void,
  bgColor?: string,
  styles?: {},
  href?: string,
  isDisabled?: boolean,
  opacity?: string
}

const Button = ({children, onClick, bgColor, href, isDisabled = false, opacity}: ButtonProps) => {

  return (
    <button 
      className={styles.button}
      type="button"
      style={{
        backgroundColor: bgColor ? bgColor : 'peru',
        opacity: opacity ? opacity : '1',
        ...styles
      }}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;