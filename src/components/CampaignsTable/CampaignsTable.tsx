import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rawData from '../../data/data.json';
import { Data, Campaign } from '../../utils/definitions';
import { Title } from '../Title/Title';
import { useSortableAndFilterableData } from '../../hooks/useSortableAndFilterableData';
import { BiSortAlt2 } from 'react-icons/bi';

const columnHeaders: { label: string; sortKey: keyof Campaign }[] = [
  { label: 'Campaign Id', sortKey: 'campaignId' },
  { label: 'Clicks', sortKey: 'clicks' },
  { label: 'Cost', sortKey: 'cost' },
  { label: 'Date', sortKey: 'date' },
];

export const CampaignsTable = () => {
  const { profileId } = useParams();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const data: Data = rawData as Data;

  useEffect(() => {
    const accountCampaigns = data.Accounts.flatMap(account =>
      account.Profiles.filter(profile => profile.profileId === profileId)
    ).flatMap(profile => profile.Campaigns);

    setCampaigns(accountCampaigns);
  }, [profileId, data.Accounts]);

  const {
    items: sortedAndFilteredCampaigns,
    requestSort,
    setFilterText,
    filterText,
  } = useSortableAndFilterableData(campaigns);

  return (
    <div className="p-8">
      <Title title={`Campaigns of Profile ${profileId}`} />
      <input
        type="text"
        placeholder="Filter campaigns..."
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
            {sortedAndFilteredCampaigns.map(campaign => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 transition"
                key={campaign.campaignId}
              >
                <td className="py-4 px-6">{campaign.campaignId}</td>
                <td className="py-4 px-6">{campaign.clicks}</td>
                <td className="py-4 px-6">{campaign.cost}</td>
                <td className="py-4 px-6">{campaign.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
