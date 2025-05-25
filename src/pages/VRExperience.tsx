import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VolumeIcon, Volume2Icon, RotateCwIcon, HomeIcon, PencilRulerIcon } from 'lucide-react';
const VRExperience = () => {
  const {
    propertyId
  } = useParams();
  const [loading, setLoading] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [view, setView] = useState('living-room');
  // Mock property data
  const property = {
    id: propertyId,
    title: propertyId === '1' ? 'Modern Downtown Loft' : propertyId === '2' ? 'Suburban Family Home' : propertyId === '3' ? 'Luxury Waterfront Villa' : 'Sample Property',
    rooms: ['living-room', 'kitchen', 'bedroom', 'bathroom']
  };
  // Simulate loading the 3D environment
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };
  return <div className="bg-gray-900 min-h-screen w-full text-white">
      {loading ? <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="h-16 w-16 text-blue-500 animate-pulse" />
          <h2 className="text-2xl font-bold mt-4 mb-2">
            Loading VR Experience
          </h2>
          <p className="text-gray-400">Preparing your virtual tour...</p>
        </div> : <div className="h-screen flex flex-col">
          {/* VR Controls Header */}
          <div className="bg-gray-800 p-4 shadow-lg">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
              <h1 className="text-xl font-bold mb-4 sm:mb-0">
                {property.title} - VR Tour
              </h1>
              <div className="flex items-center space-x-4">
                <button onClick={toggleAudio} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title={audioEnabled ? 'Mute audio' : 'Enable audio'}>
                  {audioEnabled ? <Volume2Icon className="h-5 w-5" /> : <VolumeIcon className="h-5 w-5" />}
                </button>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Reset view">
                  <RotateCwIcon className="h-5 w-5" />
                </button>
                <Link to={`/design/${propertyId}`} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md flex items-center transition-colors">
                  <PencilRulerIcon className="h-4 w-4 mr-2" />
                  Design Mode
                </Link>
              </div>
            </div>
          </div>
          {/* Main VR View */}
          <div className="flex-grow relative">
            {/* This would be where the Three.js canvas would render */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-black bg-opacity-50 rounded-lg max-w-md">
                <div className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h2 className="text-2xl font-bold mb-4">
                  VR Viewer Placeholder
                </h2>
                <p className="mb-4">
                  This is where a Three.js 3D environment would render.
                </p>
                <p className="text-sm text-gray-400">
                  Use your mouse to look around or connect a VR headset for
                  immersive experience.
                </p>
              </div>
            </div>
            {/* Room navigation overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="container mx-auto">
                <div className="flex justify-center space-x-3 overflow-x-auto pb-2">
                  {property.rooms.map(room => <button key={room} onClick={() => setView(room)} className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${view === room ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
                      {room.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>)}
                </div>
              </div>
            </div>
          </div>
          {/* Voice Command Bar */}
          <div className="bg-gray-800 p-4 border-t border-gray-700">
            <div className="container mx-auto flex items-center">
              <div className="flex-grow">
                <div className="relative">
                  <input type="text" placeholder="Say 'change wall color to blue' or click to speak..." className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                    <VolumeIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <Link to="/properties" className="ml-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center transition-colors">
                <HomeIcon className="h-4 w-4 mr-2" />
                Exit Tour
              </Link>
            </div>
          </div>
        </div>}
    </div>;
};
export default VRExperience;