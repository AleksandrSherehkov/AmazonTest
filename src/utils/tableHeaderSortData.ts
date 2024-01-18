import { Account, Profile, Campaign } from './definitions';

export const columnHeadersAccounts: { label: string; sortKey: keyof Account }[] = [
  { label: 'Account ID', sortKey: 'accountId' },
  { label: 'Email', sortKey: 'email' },
  { label: 'Auth Token', sortKey: 'authToken' },
  { label: 'Creation Date', sortKey: 'creationDate' },
];

export const columnHeadersProfiles: { label: string; sortKey: keyof Profile }[] = [
  { label: 'Profile Id', sortKey: 'profileId' },
  { label: 'Country', sortKey: 'country' },
  { label: 'Marketplace', sortKey: 'marketplace' },
];

export const columnHeadersCampaigns: { label: string; sortKey: keyof Campaign }[] = [
  { label: 'Campaign Id', sortKey: 'campaignId' },
  { label: 'Clicks', sortKey: 'clicks' },
  { label: 'Cost', sortKey: 'cost' },
  { label: 'Date', sortKey: 'date' },
];
