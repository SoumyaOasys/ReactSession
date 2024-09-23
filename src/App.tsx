// App.tsx
import React from 'react';
import './App.css';
import Datatable from './components/Datatable';
import { User } from './types';

const App: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'Soumya', age: 28, address: { at: 'ampor', po: 'kend', dist: 'Bhadrak' } },
    { id: 2, name: 'Sandeep', age: 34, address: { at: 'chandaka', po: 'bbsr', dist: 'khordha' } },
    { id: 3, name: 'Rohan', age: 45, address: { at: 'manjur', po: 'Jajpur Road', dist: 'Jajpur' } },
  ];

  return (
    <div className="App">
      <h1>Data Table Example</h1>
      <Datatable users={users} />
    </div>
  );
};

export default App;
