import { merger } from "~/common/utils/utils";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "text" | "outline";
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  const variantClass = `button--${variant}`;
  return (
    <button
      className={merger("button", variantClass, className || "")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
