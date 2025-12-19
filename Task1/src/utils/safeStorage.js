// Safe localStorage utilities to prevent SSR errors
export const safeLocalStorage = {
  getItem: (key) => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(key)
      } catch (e) {
        console.error('Error reading from localStorage:', e)
        return null
      }
    }
    return null
  },
  
  setItem: (key, value) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, value)
      } catch (e) {
        console.error('Error writing to localStorage:', e)
      }
    }
  },
  
  removeItem: (key) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key)
      } catch (e) {
        console.error('Error removing from localStorage:', e)
      }
    }
  }
}

