import { useState, useEffect } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'

function Users() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('az')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState(null)
  const usersPerPage = 5

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    filterAndSortUsers()
  }, [users, searchQuery, sortOrder])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedUser) {
        setSelectedUser(null)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedUser])

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

  const filterAndSortUsers = () => {
    let filtered = [...users]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortOrder === 'az') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })

    setFilteredUsers(filtered)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)
  const startIndex = (currentPage - 1) * usersPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage)

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-section-title text-text-white mb-8">Users</h1>

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
            {/* Search and Sort Controls */}
            <div className="bg-dark-card rounded-[20px] p-6 border border-border-gray mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition"
                  />
                </div>
                <div>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition"
                  >
                    <option value="az">Sort A-Z</option>
                    <option value="za">Sort Z-A</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Users List */}
            <div className="bg-dark-card rounded-[20px] border border-border-gray overflow-hidden">
              {paginatedUsers.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-text-gray text-lg">No users found</p>
                </div>
              ) : (
                <div className="divide-y divide-border-gray">
                  {paginatedUsers.map((user) => (
                    <div
                      key={user.id}
                      className="p-6 hover:bg-dark-card-alt transition cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-text-white font-medium text-lg">{user.name}</p>
                          <p className="text-text-gray text-sm mt-1">{user.email}</p>
                          <p className="text-text-gray text-sm mt-1">{user.phone}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-text-gray text-sm">{user.company?.name}</p>
                          <p className="text-text-gray text-xs mt-1">{user.website}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="p-6 flex items-center justify-between border-t border-border-gray">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-dark-card-alt text-text-white rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-card-deep transition focus:outline-none focus:ring-2 focus:ring-main-gradient-start"
                  >
                    Previous
                  </button>
                  <span className="text-text-gray">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-dark-card-alt text-text-white rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-card-deep transition focus:outline-none focus:ring-2 focus:ring-main-gradient-start"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* User Detail Modal */}
        {selectedUser && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedUser(null)}
          >
            <div
              className="bg-dark-card rounded-[20px] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-feature-title text-text-white">User Details</h2>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-text-gray hover:text-text-white transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-text-gray text-sm mb-1">Name</p>
                  <p className="text-text-white">{selectedUser.name}</p>
                </div>
                <div>
                  <p className="text-text-gray text-sm mb-1">Email</p>
                  <p className="text-text-white">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-text-gray text-sm mb-1">Phone</p>
                  <p className="text-text-white">{selectedUser.phone}</p>
                </div>
                <div>
                  <p className="text-text-gray text-sm mb-1">Website</p>
                  <p className="text-text-white">{selectedUser.website}</p>
                </div>
                <div>
                  <p className="text-text-gray text-sm mb-1">Company</p>
                  <p className="text-text-white">{selectedUser.company?.name}</p>
                  <p className="text-text-gray text-sm mt-1">{selectedUser.company?.catchPhrase}</p>
                </div>
                <div>
                  <p className="text-text-gray text-sm mb-1">Address</p>
                  <p className="text-text-white">
                    {selectedUser.address?.street}, {selectedUser.address?.city},{' '}
                    {selectedUser.address?.zipcode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Users

