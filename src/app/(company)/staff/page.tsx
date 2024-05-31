import React from 'react';

interface StaffMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
}

const staffData: StaffMember[] = [
  { id: 1, name: 'John Doe', role: 'Manager', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', role: 'Assistant', email: 'jane.smith@example.com', phone: '098-765-4321' },
  // Add more staff members as needed
];

const Staff: React.FC = () => {
  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Staff</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr className="bg-primary rounded-t-lg text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id}>
                <td className="py-2 px-4 border-b border-r">{staff.name}</td>
                <td className="py-2 px-4 border-b border-r">{staff.role}</td>
                <td className="py-2 px-4 border-b border-r">{staff.email}</td>
                <td className="py-2 px-4 border-b border-r">{staff.phone}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button className="bg-blue-500 text-white py-1 px-2 rounded">View</button>
                  <button className="bg-yellow-500 text-white py-1 px-2 rounded">Edit</button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Staff;

