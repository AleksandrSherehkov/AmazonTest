// AccountsTable.tsx
import { useSortableAndFilterableData } from '../../hooks/useSortableAndFilterableData';
import { BiSortAlt2 } from 'react-icons/bi';
import rawData from '../../data/data.json';
import { Account, Data } from '../../utils/definitions';
import { Title } from '../Title/Title';
import { useNavigate } from 'react-router-dom';

const columnHeaders: { label: string; sortKey: keyof Account }[] = [
  { label: 'Account ID', sortKey: 'accountId' },
  { label: 'Email', sortKey: 'email' },
  { label: 'Auth Token', sortKey: 'authToken' },
  { label: 'Creation Date', sortKey: 'creationDate' },
];

export const AccountsTable = () => {
  const navigate = useNavigate();
  const data: Data = rawData as Data;

  const {
    items: sortedAndFilteredAccounts,
    requestSort,
    setFilterText,
    filterText,
  } = useSortableAndFilterableData<Account>(data.Accounts);

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
            <tr>
              {columnHeaders.map(({ label, sortKey }) => (
                <th
                  key={label}
                  scope="col"
                  className="py-3 px-6 cursor-pointer"
                  onClick={() => requestSort(sortKey)}
                >
                  <span className="flex gap-x-2 ">
                    {label}
                    <BiSortAlt2 />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredAccounts.map(account => (
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
