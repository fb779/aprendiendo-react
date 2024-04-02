import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel',
    isFollowing: true,
  },
  {
    userName: 'fb779',
    name: 'Fabian Forero',
    isFollowing: false,
  },
];

function App() {
  return (
    <div className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  );
}

export default App;
