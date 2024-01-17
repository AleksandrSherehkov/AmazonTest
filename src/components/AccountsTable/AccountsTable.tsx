import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSortAlt2 } from 'react-icons/bi';

import rawData from '../../data/data.json';
import { Account, Data } from '../../utils/definitions';

import { Title } from '../Title/Title';

const columnHeaders: { label: string; sortKey: keyof Account }[] = [
  { label: 'Account ID', sortKey: 'accountId' },
  { label: 'Email', sortKey: 'email' },
  { label: 'Auth Token', sortKey: 'authToken' },
  { label: 'Creation Date', sortKey: 'creationDate' },
];

export const AccountsTable = () => {
  const navigate = useNavigate();
  const [data] = useState<Data>(rawData as Data);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'ascending' | 'descending';
  } | null>(null);
  const [filterText, setFilterText] = useState('');

  const sortedData = useMemo(() => {
    const sortableItems = [...data.Accounts];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const keyA = a[sortConfig.key as keyof Account];
        const keyB = b[sortConfig.key as keyof Account];
        if (keyA < keyB) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (keyA > keyB) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const filteredData = sortedData.filter(account => {
    return Object.values(account).some(value =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const requestSort = (key: keyof Account) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (accountId: string) => {
    navigate(`/profiles/${accountId}`);
  };

  return (
    <div className="p-8">
      <Title title="Accounts" />
      <input
        type="text"
        placeholder="Filter accounts..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        className="mb-4 border-2 outline-none"
      />
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              {columnHeaders.map(({ label, sortKey }) => (
                <th
                  key={label}
                  scope="col"
                  className="py-3 px-6 cursor-pointer"
                  onClick={() => requestSort(sortKey)}
                >
                  <span className="flex gap-2">
                    {label}
                    <BiSortAlt2 className="" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map(account => (
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
    </div>
  );
};
