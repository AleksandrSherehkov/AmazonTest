import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSortAlt2 } from 'react-icons/bi';

import { useSortableAndFilterableData } from '../../hooks/useSortableAndFilterableData';
import { usePagination } from '../../hooks/usePagination';
import { useDataCounter } from '../../hooks/useDataCounter';
import { Account, Data } from '../../utils/definitions';
import { columnHeadersAccounts } from '../../utils/tableHeaderSortData';

import rawData from '../../data/data.json';
import { ITEMS_PER_PAGE } from '../../constants/paginationConstants';

import { Pagination } from '../Pagination/Pagination';
import { Title } from '../Title/Title';
import { DataCounter } from '../DataCounter/DataCounter';

export const AccountsTable = () => {
  const navigate = useNavigate();
  const data: Data = rawData as Data;

  const {
    items: sortedAndFilteredAccounts,
    requestSort,
    setFilterText,
    filterText,
  } = useSortableAndFilterableData<Account>(data.Accounts);

  const { currentData, currentPage, maxPage, jump, setCurrentPage } = usePagination(
    sortedAndFilteredAccounts,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [sortedAndFilteredAccounts, setCurrentPage]);

  const { totalItems, viewedStart, viewedEnd } = useDataCounter(
    sortedAndFilteredAccounts,
    currentPage,
    ITEMS_PER_PAGE
  );

  const handleRowClick = (accountId: string) => {
    navigate(`/accounts/profiles/${accountId}`);
  };

  return (
    <div className="p-8 bg-gray-200 w-full">
      <DataCounter totalItems={totalItems} viewedStart={viewedStart} viewedEnd={viewedEnd} />
      <Title title="Accounts" />
      <input
        type="text"
        placeholder="Filter accounts..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        className="mb-4 border-2 outline-none"
      />
      <div className="overflow-x-auto relative mb-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columnHeadersAccounts.map(({ label, sortKey }) => (
                <th
                  key={label}
                  scope="col"
                  className="py-3 px-6 cursor-pointer"
                  onClick={() => requestSort(sortKey)}
                >
                  <span className="flex gap-x-2">
                    {label}
                    <BiSortAlt2 />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData().map(account => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-200 focus:bg-gray-200"
                key={account.accountId}
                onClick={() => handleRowClick(account.accountId)}
                tabIndex={0}
              >
                <td className="py-4 px-6">{account.accountId}</td>
                <td className="py-4 px-6">{account.email}</td>
                <td className="py-4 px-6">{account.authToken}</td>
                <td className="py-4 px-6">{account.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination pageCount={maxPage} goToPage={jump} currentPage={currentPage} />
    </div>
  );
};
