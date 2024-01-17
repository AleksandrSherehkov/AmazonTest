import profiles from '../../data/profiles.json';
import { Profile } from '../../utils/definitions';

export const ProfilesTable = () => {
  const headers =
    profiles.length > 0 ? Object.keys(profiles[0]).filter(header => header !== 'accountId') : [];

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
          {profiles.map((profile: Profile) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={profile.profileId}
            >
              {headers.map(header => (
                <td key={`${profile.profileId}-${header}`} className="py-4 px-6">
                  {profile[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
