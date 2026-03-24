import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import SearchPage from './pages/SearchPage'
import TutorProfile from './pages/TutorProfile'
import LeadForm from './pages/LeadForm'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'

import Pricing from './pages/Pricing'
import TutorDashboard from './pages/TutorDashboard'

import AdminRevenue from './pages/AdminRevenue'
import Referral from './pages/Referral'
import MarketingAssets from './pages/MarketingAssets'
import SignUp from './pages/SignUp'
import SelectRole from './pages/SelectRole'

import Webinars from './pages/Webinars'
import Cohorts from './pages/Cohorts'
import Ecosystem from './pages/Ecosystem'
import AdminPanel from './pages/AdminPanel'
import CreateService from './pages/CreateService'
import Tuition from './pages/Tuition'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/groupclasses" element={<Webinars />} />
        <Route path="/livecohorts" element={<Cohorts />} />
        <Route path="/tuition" element={<Tuition />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/create-service" element={<CreateService />} />
        <Route path="/profile/:id" element={<TutorProfile />} />
        <Route path="/onboard" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<TutorDashboard />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/admin-revenue" element={<AdminRevenue />} />
        <Route path="/marketing-vault" element={<MarketingAssets />} />
      </Routes>
    </Router>
  )
}

export default App
