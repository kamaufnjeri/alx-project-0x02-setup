import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black truncate" title={title}>
          {title}
        </h3>
       
      </div>
      <p className="text-gray-700 text-sm line-clamp-3">{content}</p>
      
      </div>
  );
};

export default Card;
