import { ButtonProps2 } from "@/interfaces";

const Button: React.FC<ButtonProps2> = ({ name, color, onClick }) => {
    return (
        <button 
            className={`w-36 border-2 rounded-md ${color ? `bg-${color}-500` : 'bg-gray-500'} p-3 text-center text-white hover:scale-105 h-12 transition-transform`}
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default Button;
