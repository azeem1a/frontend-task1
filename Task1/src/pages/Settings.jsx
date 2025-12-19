import { useState, useEffect } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'

function Settings() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
  })
  const [theme, setTheme] = useState('dark')

  const applyTheme = (newTheme) => {
    if (typeof window !== 'undefined') {
      if (newTheme === 'light') {
        document.documentElement.classList.add('light')
        document.body.classList.add('light')
      } else {
        document.documentElement.classList.remove('light')
        document.body.classList.remove('light')
      }
    }
  }

  useEffect(() => {
    // Load saved settings
    if (typeof window !== 'undefined') {
      const savedProfile = localStorage.getItem('userProfile')
      const savedTheme = localStorage.getItem('theme') || 'dark'

      if (savedProfile) {
        try {
          setProfile(JSON.parse(savedProfile))
        } catch (e) {
          console.error('Error parsing saved profile:', e)
        }
      }
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveProfile = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userProfile', JSON.stringify(profile))
      alert('Profile saved successfully!')
    }
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
    applyTheme(newTheme)
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-section-title text-text-white mb-8">Settings</h1>

        {/* Profile Settings */}
        <div className="bg-dark-card rounded-[20px] p-6 border border-border-gray mb-6">
          <h2 className="text-feature-title text-text-white mb-6">Profile</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-text-white text-sm mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={profile.name}
                onChange={(e) => handleProfileChange('name', e.target.value)}
                className="w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-white text-sm mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => handleProfileChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="bio" className="block text-text-white text-sm mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => handleProfileChange('bio', e.target.value)}
                className="w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition resize-none"
                rows="4"
                placeholder="Tell us about yourself..."
              />
            </div>

            <button
              onClick={handleSaveProfile}
              className="gradient-main text-text-white py-3 px-6 rounded-[5px] font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-main-gradient-start focus:ring-offset-2 focus:ring-offset-dark-card"
            >
              Save Profile
            </button>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-dark-card rounded-[20px] p-6 border border-border-gray">
          <h2 className="text-feature-title text-text-white mb-6">Theme</h2>
          <div className="flex gap-4">
            <button
              onClick={() => handleThemeChange('dark')}
              className={`flex-1 py-4 px-6 rounded-[5px] border-2 transition ${
                theme === 'dark'
                  ? 'border-main-gradient-start gradient-main text-text-white'
                  : 'border-border-gray bg-dark-card-alt text-text-gray hover:border-main-gradient-start'
              }`}
            >
              Dark Mode
            </button>
            <button
              onClick={() => handleThemeChange('light')}
              className={`flex-1 py-4 px-6 rounded-[5px] border-2 transition ${
                theme === 'light'
                  ? 'border-main-gradient-start gradient-main text-text-white'
                  : 'border-border-gray bg-dark-card-alt text-text-gray hover:border-main-gradient-start'
              }`}
            >
              Light Mode
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Settings

