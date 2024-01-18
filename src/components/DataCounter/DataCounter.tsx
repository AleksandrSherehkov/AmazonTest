import { FC } from 'react';

interface DataCounterProps {
  totalItems: number;
  viewedStart: number;
  viewedEnd: number;
}

export const DataCounter: FC<DataCounterProps> = ({ totalItems, viewedStart, viewedEnd }) => {
  return (
    <div className="mt-4 flex justify-between items-center">
      <p>Total Items: {totalItems}</p>
      <p>
        Viewing {viewedStart} - {viewedEnd} of {totalItems}
      </p>
    </div>
  );
};
