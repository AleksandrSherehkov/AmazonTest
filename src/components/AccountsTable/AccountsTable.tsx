import accounts from '../../data/Accounts.json';
import { Account } from '../../utils/definitions';

export const AccountsTable = () => {
  const headers = accounts.length > 0 ? Object.keys(accounts[0]) : [];

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map(header => (
              <th key={header} scope="col" className="py-3 px-6">
                {header.replace(/([A-Z])/g, ' $1').trim()}{' '}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {accounts.map((account: Account) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={account.accountId}
            >
              {headers.map(header => (
                <td key={header} className="py-4 px-6">
                  {account[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
