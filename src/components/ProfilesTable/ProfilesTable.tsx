import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import rawData from '../../data/data.json';
import { Data, Profile } from '../../utils/definitions';

import { Title } from '../Title/Title';

const columnHeaders = ['Profile Id', 'Country', 'Marketplace'];

export const ProfilesTable = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const data: Data = rawData as Data;

  useEffect(() => {
    const accountProfiles = data.Accounts.find(
      account => account.accountId === accountId
    )?.Profiles;
    if (accountProfiles) {
      setProfiles(accountProfiles);
    }
  }, [accountId, data.Accounts]);

  const handleRowClick = (profileId: string) => {
    navigate(`/campaigns/${profileId}`);
  };

  return (
    <>
      <Title title={`Profiles of Account ${accountId}`} />
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
            {profiles.map(profile => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-200 focus:bg-gray-200"
                key={profile.profileId}
                onClick={() => handleRowClick(profile.profileId)}
                tabIndex={0}
              >
                <td className="py-4 px-6">{profile.profileId}</td>
                <td className="py-4 px-6">{profile.country}</td>
                <td className="py-4 px-6">{profile.marketplace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
