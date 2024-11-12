import { useState } from "react";

function Users() {
  // Sample user data
  const [users, setUsers] = useState([
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Williams",
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState("");

  // Filtered list based on the search term
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle adding a new user
  const handleAddUser = () => {
    if (newUser.trim() !== "") {
      setUsers([...users, newUser.trim()]);
      setNewUser("");
    }
  };

  return (
    <>
      <div className="lg:px-48 lg:py-5 p-5 mb-24">
        {/* Header Section */}
        <div className="w-full flex justify-between items-center mb-5">
          <div className="py-3 text-xl font-bold">Users</div>
          <div className="py-3 text-blue-500 cursor-pointer">Link</div>
        </div>

        {/* Search and Add Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search users..."
            className="flex-grow p-3 border rounded bg-gray-50 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Add User Section */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add new user"
              className="p-3 border rounded bg-gray-50 focus:outline-none"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <button
              onClick={handleAddUser}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        {/* Single-Column List of Users */}
        <div className="flex flex-col gap-4">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="bg-zinc-200 border-2 p-4 rounded flex justify-between items-center"
            >
              <span>{user}</span>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <div className="text-center text-gray-500">No users found.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Users;
