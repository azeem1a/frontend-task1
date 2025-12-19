import { Link, useNavigate, useLocation } from 'react-router-dom'

function DashboardLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken')
    }
    navigate('/login')
  }

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/users', label: 'Users' },
    { path: '/settings', label: 'Settings' },
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-dark-card border-r border-border-gray">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-text-white mb-8">User Dashboard</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-[5px] transition ${
                  location.pathname === item.path
                    ? 'gradient-main text-text-white'
                    : 'text-text-gray hover:bg-dark-card-alt hover:text-text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 bg-dark-card-alt text-text-white rounded-[5px] hover:bg-dark-card-deep transition focus:outline-none focus:ring-2 focus:ring-main-gradient-start"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout

