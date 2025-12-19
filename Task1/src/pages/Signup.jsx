import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Signup({ setIsAuthenticated }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (name && email && password) {
      const token = 'fake-auth-token-' + Date.now()
      if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', token)
      }
      setIsAuthenticated(true)
      navigate('/dashboard')
    } else {
      setError('Please fill in all fields')
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-dark-card rounded-[20px] p-8 shadow-lg">
          <h1 className="text-section-title text-text-white text-center mb-2">Sign Up</h1>
          <p className="text-body-lg text-text-gray text-center mb-8">
            Create your account to get started.
          </p>

          {error && (
            <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded-[5px] text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-text-white text-sm mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-white text-sm mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-text-white text-sm mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-main text-text-white py-3 rounded-[5px] font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-main-gradient-start focus:ring-offset-2 focus:ring-offset-dark-card"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-text-gray text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-main-gradient-start hover:underline">
              Login
            </Link>
          </p>

          <p className="mt-4 text-center text-text-gray text-sm">
            <Link to="/" className="hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup

