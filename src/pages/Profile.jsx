import MyOrdersPage from "./MyOrdersPage";

function Profile() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto grow p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-6">
          {/* Left Section */}
          <div className="w-full rounded-lg p-6 shadow-md md:h-1/3 lg:w-1/4">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">John Doe</h1>
            <p className="mb-4 text-lg text-gray-600">john@example.com</p>
            <button className="bg-steel-blue w-full rounded px-4 py-2 text-white hover:bg-red-500">
              Logout
            </button>
          </div>
          {/* Right Section: Order Table */}
          <div className="md:2/3 w-full rounded-lg p-6 shadow-md lg:w-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
