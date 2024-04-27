import "./button.css";
import { cva } from "class-variance-authority";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "primary" | "secondary";

  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  const buttonClasses = cva(["border rounded"], {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-700",
        secondary: "bg-gray-500 text-white hover:bg-gray-700",
      },
      size: {
        small: "py-1 px-2 text-sm",
        medium: "py-2 px-4 text-md",
        large: "py-3 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  });
  return (
    <button
      type="button"
      className={buttonClasses({ variant, size })}
      {...props}
    >
      {children}
    </button>
  );
};
