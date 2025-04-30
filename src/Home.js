import React from "react";
import ProductList from "./pages/Product/ProductList";

const userData = [
  {
    id: 1,
    name: "user",
    email: "user@gmail.com",
    role: "user",
  },
  {
    id: 2,
    name: "sam",
    email: "sam@gmail.com",
    role: "admin",
  },
  {
    id: 3,
    name: "user",
    email: "user1@gmail.com",
    role: "user",
  },
]
const Homes = () => {
  const [users, setUsers] = React.useState(userData);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    role: "user",
  });
  const [search, setSearch] = React.useState("");
  const [ids, setIds] = React.useState(0);
  const [show, setShow] = React.useState(false);  

  const saveUser = () => {
    if(!formData.name || !formData.email) {
      alert("Please fill all the fields");
      return;
    }
    const payload = {
      id: users.length + 1,
      ...formData,
    };
    setUsers([...users, payload]);
    setFormData({
      name: "",
      email: "",
      role: "user",
    });
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleUpdate = () => {
    const index = users
      .map((item) => {
        return item.id;
      })
      .indexOf(ids);
      const dt = [...users]
    dt[index].name = formData.name;
    dt[index].email = formData.email;
    dt[index].role = formData.role;
    setUsers(dt);
    setShow(false);
    setFormData({
      name: "",
      email: "",
      role: "user",
    });
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      email: item.email,
      role: item.role,
    });
    setIds(item.id);
    setShow(true);
  };

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });
  
  return (
    <div className="container py-4">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="mb-0">Admin Dashboard</h2>
    <input
      className="form-control w-50"
      type="search"
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <h4 className="card-title mb-3">{show ? "Edit User" : "Add User"}</h4>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={formData.role}
          onChange={(e) =>
            setFormData({ ...formData, role: e.target.value })
          }
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button
        className="btn btn-primary"
        onClick={show ? handleUpdate : saveUser}
      >
        {show ? "Update User" : "Save User"}
      </button>
    </div>
  </div>

  <div className="card shadow-sm">
    <div className="card-body">
      <h4 className="card-title mb-3">User List</h4>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.length ? (
            filteredUsers?.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-muted">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  <div className="container py-4" >
  <ProductList/>
  </div>
</div>

  );
};

export default Homes;
