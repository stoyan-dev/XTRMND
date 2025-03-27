import './index.css';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">User Directory</h1>
      <UserList />
    </div>
  );
}

export default App;
