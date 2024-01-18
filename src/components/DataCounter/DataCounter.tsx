import { FC } from 'react';

interface DataCounterProps {
  totalItems: number;
  viewedStart: number;
  viewedEnd: number;
}

export const DataCounter: FC<DataCounterProps> = ({ totalItems, viewedStart, viewedEnd }) => {
  return (
    <div className="w-full flex justify-between items-center mb-10">
      <p>Total Items: {totalItems}</p>
      <p>
        Viewing {viewedStart} - {viewedEnd} of {totalItems}
      </p>
    </div>
  );
};
