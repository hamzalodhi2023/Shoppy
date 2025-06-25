import { useState } from "react"

function UserManagement() {
    const users = [
        {
            name: "John Doe",
            email: "john@gmail.com",
            role: "admin",
        }
    ]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer" // Default role

    })


    const handleChange = (e) => {
        setFormDate({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Usere Management</h2>
            {/* Add New User Form */}
            <div className="p-t rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-4">Add New User</h3>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UserManagement