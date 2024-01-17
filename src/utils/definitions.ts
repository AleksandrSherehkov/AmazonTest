export interface Account {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string;
  Profiles: Profile[];
}

export interface Profile {
  profileId: string;
  country: string;
  marketplace: string;
  Campaigns: Campaign[];
}

export interface Campaign {
  campaignId: string;
  clicks: number;
  cost: number;
  date: string;
}

export interface Data {
  Accounts: Account[];
}
