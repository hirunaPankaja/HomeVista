import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PencilRulerIcon, Sofa, TableIcon, LampIcon, PaletteIcon, LayoutIcon, SaveIcon, UndoIcon, RedoIcon, MicIcon, LayoutGridIcon } from 'lucide-react';
const DesignStudio = () => {
  const {
    propertyId
  } = useParams();
  const [activeTab, setActiveTab] = useState('furniture');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [wallColor, setWallColor] = useState('#FFFFFF');
  const [floorType, setFloorType] = useState('hardwood');
  // Mock property data
  const property = {
    id: propertyId,
    title: propertyId === '1' ? 'Modern Downtown Loft' : propertyId === '2' ? 'Suburban Family Home' : propertyId === '3' ? 'Luxury Waterfront Villa' : 'Sample Property'
  };
  // Mock furniture items
  const furnitureItems = [{
    id: 'sofa1',
    name: 'Modern Sofa',
    icon: <Sofa className="h-6 w-6" />
  }, {
    id: 'table1',
    name: 'Coffee Table',
    icon: <TableIcon className="h-6 w-6" />
  }, {
    id: 'lamp1',
    name: 'Floor Lamp',
    icon: <LampIcon className="h-6 w-6" />
  }, {
    id: 'chair1',
    name: 'Dining Chair',
    icon: <TableIcon className="h-6 w-6" />
  }, {
    id: 'bed1',
    name: 'Queen Bed',
    icon: <Sofa className="h-6 w-6" />
  }, {
    id: 'shelf1',
    name: 'Bookshelf',
    icon: <LayoutIcon className="h-6 w-6" />
  }];
  // Mock color palette
  const colorPalette = ['#FFFFFF', '#F5F5F5', '#E0E0E0', '#FAFAFA', '#FFF8E1', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#BBDEFB'];
  const handleToolSelect = (tool: string) => {
    setActiveTool(activeTool === tool ? null : tool);
  };
  return <div className="bg-gray-100 min-h-screen w-full">
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 border-b">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <PencilRulerIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold">
                {property.title} - Design Studio
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors">
                <UndoIcon className="h-5 w-5 text-gray-700" />
              </button>
              <button className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors">
                <RedoIcon className="h-5 w-5 text-gray-700" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Design
              </button>
              <Link to={`/compare/${propertyId}`} className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center">
                <LayoutGridIcon className="h-4 w-4 mr-2" />
                Compare
              </Link>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <div className="flex-grow flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white shadow-md border-r">
            {/* Tabs */}
            <div className="flex border-b">
              <TabButton active={activeTab === 'furniture'} onClick={() => setActiveTab('furniture')} icon={<Sofa className="h-4 w-4" />} label="Furniture" />
              <TabButton active={activeTab === 'walls'} onClick={() => setActiveTab('walls')} icon={<PaletteIcon className="h-4 w-4" />} label="Walls" />
              <TabButton active={activeTab === 'floors'} onClick={() => setActiveTab('floors')} icon={<LayoutIcon className="h-4 w-4" />} label="Floors" />
            </div>
            {/* Tab Content */}
            <div className="p-4">
              {activeTab === 'furniture' && <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    DRAG ITEMS TO ROOM
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {furnitureItems.map(item => <div key={item.id} className="bg-gray-100 p-3 rounded-md flex flex-col items-center cursor-move hover:bg-gray-200 transition-colors">
                        {item.icon}
                        <span className="text-sm mt-2 text-center">
                          {item.name}
                        </span>
                      </div>)}
                  </div>
                </div>}
              {activeTab === 'walls' && <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    WALL COLOR
                  </h3>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {colorPalette.map(color => <button key={color} className={`w-8 h-8 rounded-full border ${wallColor === color ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'}`} style={{
                  backgroundColor: color
                }} onClick={() => setWallColor(color)} />)}
                  </div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3 mt-4">
                    WALL TEXTURE
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gray-100 p-2 rounded-md text-center text-sm hover:bg-gray-200">
                      Smooth
                    </button>
                    <button className="bg-gray-100 p-2 rounded-md text-center text-sm hover:bg-gray-200">
                      Textured
                    </button>
                    <button className="bg-gray-100 p-2 rounded-md text-center text-sm hover:bg-gray-200">
                      Brick
                    </button>
                    <button className="bg-gray-100 p-2 rounded-md text-center text-sm hover:bg-gray-200">
                      Wood Panel
                    </button>
                  </div>
                </div>}
              {activeTab === 'floors' && <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    FLOOR TYPE
                  </h3>
                  <div className="space-y-2">
                    <button className={`w-full p-2 text-left rounded-md ${floorType === 'hardwood' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={() => setFloorType('hardwood')}>
                      Hardwood
                    </button>
                    <button className={`w-full p-2 text-left rounded-md ${floorType === 'carpet' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={() => setFloorType('carpet')}>
                      Carpet
                    </button>
                    <button className={`w-full p-2 text-left rounded-md ${floorType === 'tile' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={() => setFloorType('tile')}>
                      Tile
                    </button>
                    <button className={`w-full p-2 text-left rounded-md ${floorType === 'marble' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={() => setFloorType('marble')}>
                      Marble
                    </button>
                  </div>
                </div>}
            </div>
          </div>
          {/* Design Canvas */}
          <div className="flex-grow flex flex-col">
            <div className="flex-grow relative">
              {/* This would be where the Three.js canvas would render */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center p-8 bg-white bg-opacity-90 rounded-lg max-w-md shadow-lg">
                  <PencilRulerIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h2 className="text-2xl font-bold mb-4">
                    Design Editor Placeholder
                  </h2>
                  <p className="mb-4">
                    This is where a Three.js 3D environment would render,
                    allowing furniture placement and customization.
                  </p>
                </div>
              </div>
            </div>
            {/* Tools Bar */}
            <div className="bg-white border-t p-3">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <ToolButton active={activeTool === 'move'} onClick={() => handleToolSelect('move')} label="Move" />
                  <ToolButton active={activeTool === 'rotate'} onClick={() => handleToolSelect('rotate')} label="Rotate" />
                  <ToolButton active={activeTool === 'scale'} onClick={() => handleToolSelect('scale')} label="Resize" />
                </div>
                <div className="flex items-center">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mr-2">
                    <MicIcon className="h-4 w-4 mr-2" />
                    Voice Command
                  </button>
                  <Link to={`/vr/${propertyId}`} className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors">
                    <div className="h-4 w-4 mr-2" />
                    VR Mode
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};
const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  icon,
  label
}) => <button className={`flex-1 py-3 flex flex-col items-center text-sm font-medium transition-colors ${active ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`} onClick={onClick}>
    {icon}
    <span className="mt-1">{label}</span>
  </button>;

type ToolButtonProps = {
  active: boolean;
  onClick: () => void;
  label: string;
};
const ToolButton: React.FC<ToolButtonProps> = ({
  active,
  onClick,
  label
}) => <button className={`px-3 py-1 rounded-md text-sm transition-colors ${active ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={onClick}>
    {label}
  </button>;
export default DesignStudio;