import { useTheme, useToken } from "@chakra-ui/react";

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  label?: string;
};

export const Button: React.FC<ButtonProps> = ({ label, variant, children }) => {

  const [primaryColor, secondaryColor] = useToken('colors', ['brand.900', 'brand.700'])

  return (
    <button
      style={{
        backgroundColor: variant === 'primary' ? primaryColor : secondaryColor,
        color: 'white',
      }}
    >
      {label || children}
    </button>
  );
};
