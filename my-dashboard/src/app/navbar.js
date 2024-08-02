export default function Navbar({ children }) {
    return (
<div className="w-full h-16 bg-gradient-to-r bg-gradient-to-t from-purple-400 to-blue-200 
 border-b border-gray-400 flex items-center justify-between px-6">
<div className="text-3xl font-bold text-gray-900">Dashboard</div>
        <nav className="flex space-x-3">
          <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/profile" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-yellow-500">Profile</a>
          <a href="/settings" className=" px-3 py-2 rounded-md text-sm font-medium text-black hover:text-blue-900">Settings</a>
        </nav>
      </div>
    );
  }
  