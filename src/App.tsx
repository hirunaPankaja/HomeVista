import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PropertySelection from './pages/PropertySelection';
import VRExperience from './pages/VRExperience';
import DesignStudio from './pages/DesignStudio';
import AgentPortal from './pages/AgentPortal';
import Compare from './pages/Compare';
export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertySelection />} />
            <Route path="/vr/:propertyId" element={<VRExperience />} />
            <Route path="/design/:propertyId" element={<DesignStudio />} />
            <Route path="/agent" element={<AgentPortal />} />
            <Route path="/compare/:propertyId" element={<Compare />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-4">VR Real Estate</h2>
                <p className="text-gray-300">
                  Explore and customize properties in virtual reality
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <p className="text-gray-300">info@vrealestate.com</p>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>© 2023 VR Real Estate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}