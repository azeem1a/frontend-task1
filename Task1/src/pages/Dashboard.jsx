import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'

function Dashboard() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) throw new Error('Failed to fetch users')
      const data = await response.json()
      setUsers(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Calculate metrics
  const totalUsers = users.length
  const uniqueCompanies = new Set(users.map(user => user.company?.name)).size
  const uniqueDomains = new Set(users.map(user => user.email.split('@')[1])).size

  const stats = [
    { label: 'Total Users', value: totalUsers, color: 'main-gradient-start' },
    { label: 'Companies', value: uniqueCompanies, color: 'main-gradient-end' },
    { label: 'Unique Domains', value: uniqueDomains, color: 'main-gradient-start' },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-section-title text-text-white mb-8">Dashboard</h1>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-main-gradient-start"></div>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-[5px] text-red-400">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-card rounded-[20px] p-6 border border-border-gray"
                >
                  <p className="text-text-gray text-sm mb-2">{stat.label}</p>
                  <p className="text-section-title text-text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Users Preview */}
            <div className="bg-dark-card rounded-[20px] p-6 border border-border-gray">
              <h2 className="text-feature-title text-text-white mb-4">Recent Users</h2>
              <div className="space-y-3">
                {users.slice(0, 5).map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 bg-dark-card-alt rounded-[5px]"
                  >
                    <div>
                      <p className="text-text-white font-medium">{user.name}</p>
                      <p className="text-text-gray text-sm">{user.email}</p>
                    </div>
                    <span className="text-text-gray text-sm">{user.company?.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to="/users"
                  className="text-main-gradient-start hover:underline text-sm"
                >
                  View all users →
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Dashboard

