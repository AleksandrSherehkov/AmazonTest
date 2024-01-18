import { useMemo, useState, useDeferredValue } from 'react';

type SortDirection = 'ascending' | 'descending';
type SortConfig<T> = { key: keyof T; direction: SortDirection } | null;

export const useSortableAndFilterableData = <T extends Record<keyof T, unknown>>(
  items: T[],
  defaultSortConfig: SortConfig<T> = null
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>(defaultSortConfig);
  const [filterText, setFilterText] = useState('');

  const debouncedFilterText = useDeferredValue(filterText);

  const sortedAndFilteredItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const aValue =
          typeof a[sortConfig.key] === 'string'
            ? (a[sortConfig.key] as string).toLowerCase()
            : a[sortConfig.key];
        const bValue =
          typeof b[sortConfig.key] === 'string'
            ? (b[sortConfig.key] as string).toLowerCase()
            : b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems.filter(item => {
      return Object.values(item).some(value => {
        const valueStr = value !== null && value !== undefined ? String(value).toLowerCase() : '';
        return valueStr.includes(debouncedFilterText.toLowerCase());
      });
    });
  }, [items, sortConfig, debouncedFilterText]);

  const requestSort = (key: keyof T) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedAndFilteredItems, requestSort, setFilterText, filterText };
};
