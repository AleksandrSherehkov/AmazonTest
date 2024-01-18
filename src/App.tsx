import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage';

const AccountsPage = lazy(() => import('./pages/AccountsPage'));
const ProfilesPage = lazy(() => import('./pages/ProfilesPage'));
const CampaignsPage = lazy(() => import('./pages/СampaignsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="accounts/profiles/:accountId" element={<ProfilesPage />} />
        <Route
          path="accounts/profiles/:accountId/campaigns/:profileId"
          element={<CampaignsPage />}
        />
      </Route>
    </Routes>
  );
};
