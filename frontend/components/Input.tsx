type Props = {
  type: string;
  label: string;
};

const Input = ({ label, type }: Props) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm">{label}</label>
      <input
        className="p-1 focus:outline-none rounded border-solid border-2 border-gray-500 text-md"
        type={type}
      />
    </div>
  );
};

export default Input;