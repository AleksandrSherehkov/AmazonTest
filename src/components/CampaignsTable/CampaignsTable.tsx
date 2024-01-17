import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import rawData from '../../data/data.json';
import { Data, Campaign } from '../../utils/definitions';

import { Title } from '../Title/Title';

const columnHeaders = ['Campaign Id', 'Clicks', 'Cost', 'Date'];

export const CampaignsTable = () => {
  const { profileId } = useParams();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const data: Data = rawData as Data;

  useEffect(() => {
    const accountCampaigns = data.Accounts.flatMap(account =>
      account.Profiles.filter(profile => profile.profileId === profileId)
    ).flatMap(profile => profile.Campaigns);

    setCampaigns(accountCampaigns);
  }, [data.Accounts, profileId]);

  return (
    <>
      <Title title={`Campaigns of Profile ${profileId}`} />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
            {campaigns.map(campaign => (
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
    </>
  );
};
