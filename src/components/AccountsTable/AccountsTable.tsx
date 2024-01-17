import { useNavigate } from 'react-router-dom';

import rawData from '../../data/data.json';
import { Data, Account } from '../../utils/definitions';

import { Title } from '../Title/Title';

const columnHeaders = ['Account ID', 'Email', 'Auth Token', 'Creation Date'];
const data: Data = rawData as Data;
export const AccountsTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (accountId: string) => {
    navigate(`/profiles/${accountId}`);
  };

  return (
    <>
      <Title title="Accounts" />
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columnHeaders.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.Accounts.map((account: Account) => (
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
    </>
  );
};
