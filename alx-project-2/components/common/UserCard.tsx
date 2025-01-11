// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <h3 className="text-xl font-bold text-blue-500">{name}</h3>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-700">Phone: {phone}</p>
      <p className="text-gray-700">Website: {website}</p>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800">Address:</h4>
        <p className="text-gray-700">
          {address.suite}, {address.street}, {address.city} ({address.zipcode})
        </p>
        <p className="text-sm text-gray-500">
          Geo: Lat {address.geo.lat}, Lng {address.geo.lng}
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800">Company:</h4>
        <p className="text-gray-700">{company.name}</p>
        <p className="text-sm text-gray-500">{company.catchPhrase}</p>
        <p className="text-sm text-gray-500">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
