import { Link } from "@tanstack/react-router";

const Header = () => {
    const user = {
        name: "Lawrence"
    }

    const handleLogout = () => {
        console.log('User logged out');
    }

    return (
    <header className="bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-black">SlugFind</span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-black font-medium transition-colors"
          >
            Listings
          </Link>
          { user && (
            <Link
              to="/"
              className="
                inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium
                px-4 py-2 rounded-lg shadow transition"
            >
              + New Listing
            </Link>
          )}
          
        </nav>
        <div className="flex items-center space-x-2">
          {
            !user ? (
              <>
                <Link to="/" className="text-gray-600 hover:text-gray-700 font-medium transition px-3 py-2 leading-none">
                  Login
                </Link>
                <Link to="/" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition px-4 py-2 rounded-md leading-none">
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="text-gray-700 font-medium px-2 hidden sm:block">
                  Welcome, {user.name}
                </span>
                <button onClick={handleLogout} className="text-red-600 hover:text-red-900 font-medium transition px-3 py-2 leading-none cursor-pointer">
                  Logout
                </button>
              </>
            )
          }
          
        </div>
      </div>
    </header>
  )
}
 
export default Header;