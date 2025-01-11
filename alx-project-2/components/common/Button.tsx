import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ shape, size }) => {
  const sizeClasses = {
    small: "w-[80px] text-sm",
    medium: "w-[150px] py-2 text-base",
    large: "w-[200px] py-3 text-lg",
  };

  return (
    <button className={`${shape} ${sizeClasses[size]} p-2 border-2 bg-slate-300 text-s`}>
      Button
    </button>
  );
};

export default Button;
