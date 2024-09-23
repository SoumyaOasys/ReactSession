// Datatable.tsx
import * as React from 'react';
import { User } from '../types'; // Import User type

interface IAppProps {
  users: User[];
}

const Datatable: React.FunctionComponent<IAppProps> = ({ users }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{`${user.address.at}, ${user.address.po}, ${user.address.dist}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
