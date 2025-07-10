import { useAtom } from 'jotai';
import { userAtom } from '../store/atoms';

export const ProfilePage = () => {
  const [user, setUser] = useAtom(userAtom);

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};
