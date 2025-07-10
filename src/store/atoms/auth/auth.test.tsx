import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { ProfilePage } from '../../../pages/profile.page';
import { userAtom } from './auth.atom';
import type { Role } from '../../../types';

it('shows user and handles logout', () => {
  const initialUser = { name: 'Jane', role: 'admin' as Role };
  const store = createStore();
  store.set(userAtom, initialUser);

  render(
    <Provider store={store}>
      <ProfilePage />
    </Provider>,
  );

  expect(screen.getByText('Welcome, Jane!')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Logout'));
  expect(screen.getByText('Not logged in')).toBeInTheDocument();
});
