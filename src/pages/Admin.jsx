import { useEffect, useState } from "react";

import { toast } from "react-toastify"; // Import toast for better alerts

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("https://backendsampleclg.onrender.com/users", {
      headers: { "auth-token": token },
    });
    const data = await res.json();
    setUsers(data);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    await fetch("https://backendsampleclg.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", "auth-token": token },
      body: JSON.stringify({ username, password }),
    });
    setUsername("");
    setPassword("");
    fetchUsers();
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setUsername(user.username);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!editingUser) return;

    await fetch(`https://backendsampleclg.onrender.com/users/${editingUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "auth-token": token },
      body: JSON.stringify({ username, password }),
    });

    setEditingUser(null);
    setUsername("");
    setPassword("");
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`https://backendsampleclg.onrender.com/users/${id}`, {
        method: "DELETE",
        headers: { "auth-token": token },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("User deleted successfully!");
        fetchUsers(); // Refresh the user list
      } else {
        toast.error(data.error || "Failed to delete user");
      }
    } catch (error) {
      toast.error("Error deleting user. Try again later.");
      console.error("Delete Error:", error);
    }
  };
  
  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      {/* Add or Update User */}
      <form onSubmit={editingUser ? handleUpdateUser : handleAddUser} className="mb-4">
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="border p-2 mr-2"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          {editingUser ? "Update User" : "Add User"}
        </button>
      </form>

      {/* User List */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Username</th>
            <th className="border p-2">Password</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border">
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.password}</td>
              <td className="border p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEditUser(user)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
