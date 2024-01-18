import { FC } from 'react';

interface ButtonBackProps {
  handleBackClick: () => void;
}

export const ButtonBack: FC<ButtonBackProps> = ({ handleBackClick }) => {
  return (
    <button
      onClick={handleBackClick}
      className="mb-4 bg-gray-500 hover:bg-gray-700 text-white font-bold  px-4 rounded"
    >
      Back
    </button>
  );
};
