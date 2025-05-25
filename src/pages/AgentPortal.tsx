import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, MessageCircleIcon, PhoneIcon, MailIcon, ClipboardCheckIcon, DollarSignIcon, CalendarIcon } from 'lucide-react';
const AgentPortal = () => {
  const [activeTab, setActiveTab] = useState('designs');
  // Mock saved designs data
  const savedDesigns = [{
    id: '1',
    propertyId: '1',
    propertyName: 'Modern Downtown Loft',
    date: '2023-10-15',
    status: 'Pending Review',
    thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: '2',
    propertyId: '3',
    propertyName: 'Luxury Waterfront Villa',
    date: '2023-10-10',
    status: 'Quote Provided',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  }];
  // Mock messages data
  const messages = [{
    id: '1',
    from: 'Agent Sarah',
    subject: 'Your Modern Loft Design',
    preview: "I've reviewed your design and have some suggestions...",
    date: '2023-10-16',
    unread: true
  }, {
    id: '2',
    from: 'Agent Michael',
    subject: 'Waterfront Villa Quote',
    preview: "Here's the detailed quote for your customizations...",
    date: '2023-10-12',
    unread: false
  }];
  // Mock quotes data
  const quotes = [{
    id: '1',
    propertyName: 'Luxury Waterfront Villa',
    designId: '2',
    amount: '$45,800',
    items: [{
      name: 'Interior Paint (Walls)',
      cost: '$3,200'
    }, {
      name: 'Marble Flooring',
      cost: '$18,500'
    }, {
      name: 'Custom Furniture',
      cost: '$24,100'
    }],
    date: '2023-10-11',
    expiryDate: '2023-11-11'
  }];
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-white p-3 rounded-full mr-4">
                  <UserIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Agent Portal</h1>
                  <p className="text-blue-100">
                    View your saved designs and agent communications
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
                  <MessageCircleIcon className="h-4 w-4 mr-2" />
                  Contact Agent
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="border-b">
            <div className="flex">
              <TabButton active={activeTab === 'designs'} onClick={() => setActiveTab('designs')} icon={<ClipboardCheckIcon className="h-4 w-4" />} label="Saved Designs" count={savedDesigns.length} hasUnread={false} />
              <TabButton active={activeTab === 'messages'} onClick={() => setActiveTab('messages')} icon={<MailIcon className="h-4 w-4" />} label="Messages" count={messages.length} hasUnread={messages.some(m => m.unread)} />
              <TabButton active={activeTab === 'quotes'} onClick={() => setActiveTab('quotes')} icon={<DollarSignIcon className="h-4 w-4" />} label="Quotes" count={quotes.length} hasUnread={false} />
            </div>
          </div>
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'designs' && <div>
                <h2 className="text-xl font-semibold mb-4">
                  Your Saved Designs
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {savedDesigns.map(design => <div key={design.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <img src={design.thumbnail} alt={design.propertyName} className="w-full h-full object-cover" />
                        <div className={`absolute top-0 right-0 m-3 px-3 py-1 rounded-full text-sm font-medium ${design.status === 'Quote Provided' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {design.status}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">
                          {design.propertyName}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          Modified on {design.date}
                        </p>
                        <div className="flex justify-between">
                          <Link to={`/design/${design.propertyId}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                            Edit Design
                          </Link>
                          <Link to={`/compare/${design.propertyId}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                            View Comparison
                          </Link>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>}
            {activeTab === 'messages' && <div>
                <h2 className="text-xl font-semibold mb-4">Agent Messages</h2>
                <div className="space-y-3">
                  {messages.map(message => <div key={message.id} className={`border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors ${message.unread ? 'border-blue-300 bg-blue-50' : ''}`}>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className={`font-semibold ${message.unread ? 'text-blue-800' : ''}`}>
                          {message.from}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {message.date}
                        </span>
                      </div>
                      <p className="font-medium text-gray-800">
                        {message.subject}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {message.preview}
                      </p>
                      {message.unread && <div className="mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                            New Message
                          </span>
                        </div>}
                    </div>)}
                </div>
              </div>}
            {activeTab === 'quotes' && <div>
                <h2 className="text-xl font-semibold mb-4">
                  Customization Quotes
                </h2>
                {quotes.map(quote => <div key={quote.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {quote.propertyName} - Customization Quote
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Provided on {quote.date}
                          </p>
                        </div>
                        <div className="mt-3 md:mt-0">
                          <span className="text-2xl font-bold text-blue-800">
                            {quote.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-3">Quote Details</h4>
                      <div className="space-y-2 mb-6">
                        {quote.items.map((item, index) => <div key={index} className="flex justify-between">
                            <span className="text-gray-700">{item.name}</span>
                            <span className="font-medium">{item.cost}</span>
                          </div>)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>Quote valid until {quote.expiryDate}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex-1 flex justify-center items-center">
                          Accept Quote
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex-1 flex justify-center items-center">
                          Request Changes
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>}
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
  count: number;
  hasUnread: boolean;
};

const TabButton = ({
  active,
  onClick,
  icon,
  label,
  count,
  hasUnread
}: TabButtonProps) => <button className={`px-6 py-4 flex items-center text-sm font-medium transition-colors ${active ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`} onClick={onClick}>
    <span className="relative">
      {icon}
      {hasUnread && <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>}
    </span>
    <span className="ml-2">{label}</span>
    {count > 0 && <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${active ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700'}`}>
        {count}
      </span>}
  </button>;
export default AgentPortal;