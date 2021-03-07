import React from 'react';

type Props = {
  type: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, type, handleChange }: Props) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xs">{label}</label>
      <input
        className="p-1 text-sm focus:outline-none rounded border-solid border-2 border-gray-500 text-md"
        required
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default Input;
