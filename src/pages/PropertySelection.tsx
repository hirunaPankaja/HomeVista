import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, FilterIcon, PencilRulerIcon } from 'lucide-react';
const PropertySelection = () => {
  const [filter, setFilter] = useState('all');
  // Mock property data
  const properties = [{
    id: '1',
    title: 'Modern Downtown Loft',
    price: '$425,000',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    location: 'Downtown',
    type: 'apartment',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: '2',
    title: 'Suburban Family Home',
    price: '$750,000',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    location: 'Suburbia',
    type: 'house',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: '3',
    title: 'Luxury Waterfront Villa',
    price: '$1,250,000',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    location: 'Beachside',
    type: 'house',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  }, {
    id: '4',
    title: 'Urban Studio Apartment',
    price: '$320,000',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    location: 'Downtown',
    type: 'apartment',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
  }, {
    id: '5',
    title: 'Mountain View Retreat',
    price: '$875,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    location: 'Mountain Area',
    type: 'house',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: '6',
    title: 'City Center Penthouse',
    price: '$1,100,000',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2000,
    location: 'Downtown',
    type: 'apartment',
    image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }];
  // Filter properties based on selected filter
  const filteredProperties = filter === 'all' ? properties : properties.filter(property => property.type === filter);
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">3D-Ready Properties</h1>
        <p className="text-gray-600 mb-8">
          Browse our collection of properties available for virtual exploration
        </p>
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input type="text" placeholder="Search properties..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="flex items-center space-x-2">
            <FilterIcon className="text-gray-500 h-5 w-5" />
            <span className="text-gray-700">Filter:</span>
            <div className="flex space-x-2">
              <FilterButton active={filter === 'all'} onClick={() => setFilter('all')} label="All" />
              <FilterButton active={filter === 'house'} onClick={() => setFilter('house')} label="Houses" />
              <FilterButton active={filter === 'apartment'} onClick={() => setFilter('apartment')} label="Apartments" />
            </div>
          </div>
        </div>
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => <PropertyCard key={property.id} property={property} />)}
        </div>
      </div>
    </div>;
};
type FilterButtonProps = {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
};

const FilterButton = ({
  active,
  onClick,
  label
}: FilterButtonProps) => <button className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={onClick}>
    {label}
  </button>;
type Property = {
  id: string;
  title: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  location: string;
  type: string;
  image: string;
};

const PropertyCard = ({
  property
}: { property: Property }) => <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="relative h-48 overflow-hidden">
      <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-md font-medium">
        {property.price}
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
        <span>{property.bedrooms} Beds</span>
        <span>{property.bathrooms} Baths</span>
        <span>{property.sqft} sqft</span>
      </div>
      <div className="flex space-x-2">
        <Link to={`/vr/${property.id}`} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
          <div className="h-4 w-4 mr-2" />
          VR Tour
        </Link>
        <Link to={`/design/${property.id}`} className="flex-1 bg-gray-100 text-gray-800 text-center py-2 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors">
          <PencilRulerIcon className="h-4 w-4 mr-2" />
          Design
        </Link>
      </div>
    </div>
  </div>;
export default PropertySelection;