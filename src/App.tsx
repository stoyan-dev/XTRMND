import './index.css';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          User Directory
        </h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
