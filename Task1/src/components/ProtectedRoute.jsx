import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
  
  if (!token) {
    return <Navigate to="/login" replace />
  }
  
  return children
}

export default ProtectedRoute

