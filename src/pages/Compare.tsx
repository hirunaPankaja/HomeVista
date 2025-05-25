import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, PencilRulerIcon, DollarSignIcon } from 'lucide-react';
const Compare = () => {
  const {
    propertyId
  } = useParams();
  const [viewMode, setViewMode] = useState('side-by-side');
  const [roomView, setRoomView] = useState('living-room');
  // Mock property data
  const property = {
    id: propertyId,
    title: propertyId === '1' ? 'Modern Downtown Loft' : propertyId === '2' ? 'Suburban Family Home' : propertyId === '3' ? 'Luxury Waterfront Villa' : 'Sample Property',
    rooms: ['living-room', 'kitchen', 'bedroom', 'bathroom']
  };
  // Cost calculation mock data
  type RoomCost = {
    original: number;
    custom: number;
    breakdown: { item: string; cost: number }[];
  };
  const costData: { [key: string]: RoomCost } = {
    'living-room': {
      original: 0,
      custom: 12500,
      breakdown: [
        { item: 'Custom Furniture', cost: 8200 },
        { item: 'Wall Paint', cost: 1800 },
        { item: 'Flooring', cost: 2500 }
      ]
    },
    kitchen: {
      original: 0,
      custom: 18700,
      breakdown: [
        { item: 'Cabinets', cost: 9500 },
        { item: 'Countertops', cost: 5200 },
        { item: 'Appliances', cost: 4000 }
      ]
    },
    bedroom: {
      original: 0,
      custom: 9300,
      breakdown: [
        { item: 'Furniture', cost: 6500 },
        { item: 'Wall Treatment', cost: 1200 },
        { item: 'Flooring', cost: 1600 }
      ]
    },
    bathroom: {
      original: 0,
      custom: 14200,
      breakdown: [
        { item: 'Fixtures', cost: 5800 },
        { item: 'Tile Work', cost: 6400 },
        { item: 'Vanity', cost: 2000 }
      ]
    }
  };
  const totalOriginalCost = Object.values(costData).reduce((sum, room) => sum + room.original, 0);
  const totalCustomCost = Object.values(costData).reduce((sum, room) => sum + room.custom, 0);
  const currentRoomCost = costData[roomView];
  return <div className="bg-gray-100 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold">
                {property.title} - Design Comparison
              </h1>
              <p className="text-gray-600">
                Compare your customized design with the original property
              </p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button className={`px-4 py-2 rounded-md text-sm font-medium ${viewMode === 'side-by-side' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setViewMode('side-by-side')}>
                Side by Side
              </button>
              <button className={`px-4 py-2 rounded-md text-sm font-medium ${viewMode === 'slider' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setViewMode('slider')}>
                Slider View
              </button>
            </div>
          </div>
          {/* Room Navigation */}
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {property.rooms.map(room => <button key={room} onClick={() => setRoomView(room)} className={`px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium transition-colors ${roomView === room ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                {room.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>)}
          </div>
          {/* Comparison View */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {viewMode === 'side-by-side' ? <div className="flex flex-col md:flex-row">
                {/* Original Design */}
                <div className="flex-1 border-r border-gray-200">
                  <div className="p-4 border-b bg-gray-50">
                    <h2 className="text-lg font-semibold">Original Design</h2>
                  </div>
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                      <p className="text-gray-500">
                        Original{' '}
                        {roomView.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}{' '}
                        View
                      </p>
                    </div>
                  </div>
                </div>
                {/* Custom Design */}
                <div className="flex-1">
                  <div className="p-4 border-b bg-gray-50">
                    <h2 className="text-lg font-semibold">
                      Your Custom Design
                    </h2>
                  </div>
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <PencilRulerIcon className="h-10 w-10 mx-auto text-blue-500 mb-3" />
                      <p className="text-gray-700">
                        Customized{' '}
                        {roomView.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}{' '}
                        View
                      </p>
                    </div>
                  </div>
                </div>
              </div> : <div>
                <div className="p-4 border-b bg-gray-50">
                  <h2 className="text-lg font-semibold">
                    Comparison Slider View
                  </h2>
                </div>
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <ArrowLeftIcon className="h-5 w-5 text-gray-500" />
                      <div className="h-1 w-48 bg-gray-300 rounded-full relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-white rounded-full border-2 border-blue-500"></div>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <p className="text-gray-600">
                      Drag slider to compare original and custom designs
                    </p>
                  </div>
                </div>
              </div>}
            {/* Cost Comparison */}
            <div className="p-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Cost Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-600 mb-2">
                    Current Room (
                    {roomView.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    )
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700">Original Cost</span>
                      <span className="font-semibold">
                        ${currentRoomCost.original.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700">Custom Design Cost</span>
                      <span className="font-semibold text-blue-800">
                        ${currentRoomCost.custom.toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t pt-3">
                      <h5 className="font-medium text-sm mb-2">
                        Cost Breakdown:
                      </h5>
                      <div className="space-y-1">
                        {currentRoomCost.breakdown.map((item, index) => <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.item}</span>
                            <span>${item.cost.toLocaleString()}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 mb-2">
                    Total Property
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700">Original Property</span>
                      <span className="font-semibold">
                        ${totalOriginalCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700">With Customizations</span>
                      <span className="font-semibold text-blue-800">
                        ${totalCustomCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="text-gray-700">Difference</span>
                      <span className="font-bold text-green-700">
                        +$
                        {(totalCustomCost - totalOriginalCost).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
              <Link to={`/design/${propertyId}`} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center">
                <PencilRulerIcon className="h-4 w-4 mr-2" />
                Continue Editing
              </Link>
              <Link to="/agent" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                <DollarSignIcon className="h-4 w-4 mr-2" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Compare;