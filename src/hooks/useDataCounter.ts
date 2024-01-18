import { useState, useEffect } from 'react';
import { Account, Campaign, Profile } from '../utils/definitions';

export const useDataCounter = (
  data: Account[] | Profile[] | Campaign[],
  currentPage: number,
  itemsPerPage: number
) => {
  const [totalItems, setTotalItems] = useState(0);
  const [viewedStart, setViewedStart] = useState(0);
  const [viewedEnd, setViewedEnd] = useState(0);

  useEffect(() => {
    const total = data.length;
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(start + itemsPerPage - 1, total);

    setTotalItems(total);
    setViewedStart(start);
    setViewedEnd(end);
  }, [data, currentPage, itemsPerPage]);

  return { totalItems, viewedStart, viewedEnd };
};
