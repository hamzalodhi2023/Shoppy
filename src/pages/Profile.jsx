import MyOrdersPage from "./MyOrdersPage";

function Profile() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="grow container mx-auto p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0">
                    {/* Left Section */}
                    <div className="w-full md:h-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">
                            John Doe
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">john@example.com</p>
                        <button className="w-full bg-steel-blue text-white py-2 px-4 rounded hover:bg-red-500">Logout</button>
                    </div>
                    {/* Right Section: Order Table */}
                    <div className="w-full md:2/3 lg:w-3/4 shadow-md rounded-lg p-6">
                        <MyOrdersPage />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;