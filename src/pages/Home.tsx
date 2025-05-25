import { Link } from 'react-router-dom';
import { BuildingIcon, MicIcon, PencilRulerIcon, UserIcon, LayoutGridIcon, ArrowRightIcon } from 'lucide-react';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reimagine Your Dream Home in Virtual Reality
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Explore, customize, and experience properties in immersive 3D
              before making your decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/properties" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center">
                Browse Properties
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/design/demo" className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
                Try Design Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Experience Real Estate Like Never Before
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard icon={<BuildingIcon className="h-8 w-8 text-blue-600" />} title="3D-Ready Properties" description="Browse our catalog of properties that are ready for virtual exploration and customization." />
            <FeatureCard icon={<div className="h-8 w-8 text-blue-600" />} title="VR Experience" description="Walk through properties in immersive 3D, using your browser or VR headset." />
            <FeatureCard icon={<MicIcon className="h-8 w-8 text-blue-600" />} title="Voice Commands" description="Customize interiors with simple voice instructions using our smart NLP system." />
            <FeatureCard icon={<PencilRulerIcon className="h-8 w-8 text-blue-600" />} title="Design Editor" description="Drag and drop furniture, change wall colors, and customize every detail." />
            <FeatureCard icon={<UserIcon className="h-8 w-8 text-blue-600" />} title="Agent Portal" description="Get quotes and feedback on your customized designs from real estate professionals." />
            <FeatureCard icon={<LayoutGridIcon className="h-8 w-8 text-blue-600" />} title="Design Comparison" description="Compare original and customized interiors side-by-side to visualize your changes." />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to explore?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start browsing our collection of 3D-ready properties and experience
            the future of real estate shopping.
          </p>
          <Link to="/properties" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center">
            View Properties
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>;
};
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({
  icon,
  title,
  description
}: FeatureCardProps) => <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;
export default Home;