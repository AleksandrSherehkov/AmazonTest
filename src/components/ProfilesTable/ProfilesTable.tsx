import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiSortAlt2 } from 'react-icons/bi';

import { useSortableAndFilterableData } from '../../hooks/useSortableAndFilterableData';
import { usePagination } from '../../hooks/usePagination';
import { Data, Profile } from '../../utils/definitions';
import { columnHeadersProfiles } from '../../utils/tableHeaderSortData';

import { ITEMS_PER_PAGE } from '../../constants/paginationConstants';
import rawData from '../../data/data.json';

import { Title } from '../Title/Title';
import { Pagination } from '../Pagination/Pagination';

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

  const {
    items: sortedAndFilteredProfiles,
    requestSort,
    setFilterText,
    filterText,
  } = useSortableAndFilterableData(profiles);

  const { currentData, currentPage, maxPage, jump } = usePagination(
    sortedAndFilteredProfiles,
    ITEMS_PER_PAGE
  );

  const handleRowClick = (profileId: string) => {
    navigate(`campaigns/${profileId}`);
  };

  return (
    <div className="p-8">
      <Title title={`Profiles of Account ${accountId}`} />
      <input
        type="text"
        placeholder="Filter profiles..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        className="mb-4 border-2 outline-none"
      />
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columnHeadersProfiles.map(({ label, sortKey }) => (
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
            {currentData().map(profile => (
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
      <Pagination pageCount={maxPage} goToPage={jump} currentPage={currentPage} />
    </div>
  );
};
