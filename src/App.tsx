import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ListingsGrid } from './components/ListingsGrid';
import { RelatedSites } from './components/RelatedSites';
import { ContactForm } from './components/ContactForm';
import { SEO } from './components/SEO';
import EmpireNetwork from './components/EmpireNetwork';
import { sampleListings } from './data/listings';
import { siteConfig } from './lib/config';
import { Home, TrendingUp, Mountain, Shield, DollarSign, Clock, MapPin, Bed, Bath, Maximize } from 'lucide-react';
import './index.css';

const featuredHomes = [
  { title: '4BR Ranch on 2 Acres', price: '$425,000', beds: 4, baths: 3, sqft: 2400, location: 'Kenai', img: '🏡' },
  { title: 'Modern Soldotna Home', price: '$389,000', beds: 3, baths: 2, sqft: 1850, location: 'Soldotna', img: '🏠' },
  { title: 'Waterfront Homer Retreat', price: '$675,000', beds: 4, baths: 3, sqft: 3200, location: 'Homer', img: '🏘️' },
  { title: 'Seward Mountain View', price: '$319,000', beds: 3, baths: 2, sqft: 1650, location: 'Seward', img: '🏡' },
  { title: 'Cooper Landing Cabin', price: '$285,000', beds: 2, baths: 1, sqft: 1200, location: 'Cooper Landing', img: '🏠' },
  { title: 'Kenai Executive Home', price: '$549,000', beds: 5, baths: 4, sqft: 3800, location: 'Kenai', img: '🏘️' },
];

const neighborhoods = [
  { name: 'Kenai', desc: 'Affordable living near world-class fishing on the Kenai River.', homes: '1,200+', avg: '$340K' },
  { name: 'Soldotna', desc: 'The commercial hub with great schools and family amenities.', homes: '900+', avg: '$375K' },
  { name: 'Homer', desc: 'Art colony charm with stunning Kachemak Bay views.', homes: '650+', avg: '$425K' },
  { name: 'Seward', desc: 'Gateway to Kenai Fjords with cruise ship tourism.', homes: '400+', avg: '$310K' },
  { name: 'Cooper Landing', desc: 'Riverside paradise for outdoor adventure enthusiasts.', homes: '150+', avg: '$295K' },
];

function App() {
  // Filter listings based on site type
  const filteredListings = sampleListings.filter(listing => 
    siteConfig.listingTypes.includes('all') || siteConfig.listingTypes.includes(listing.type)
  );

  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />

          {/* Featured Properties */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-4">Featured Properties</h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Hand-picked homes across the Kenai Peninsula — from cozy cabins to executive estates.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredHomes.map((home, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 text-center py-8 text-6xl">{home.img}</div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{home.title}</h3>
                        <span className="text-blue-600 font-bold text-lg">{home.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                        <MapPin size={14} /> {home.location}
                      </div>
                      <div className="flex gap-4 text-sm text-gray-600 border-t border-gray-200 pt-3">
                        <span className="flex items-center gap-1"><Bed size={14} /> {home.beds} Beds</span>
                        <span className="flex items-center gap-1"><Bath size={14} /> {home.baths} Baths</span>
                        <span className="flex items-center gap-1"><Maximize size={14} /> {home.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Neighborhoods */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-4">Explore Neighborhoods</h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Discover the unique communities that make the Kenai Peninsula special.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {neighborhoods.map((n, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors text-center">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{n.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{n.desc}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p><span className="font-semibold text-gray-700">{n.homes}</span> listings</p>
                      <p>Avg. <span className="font-semibold text-blue-600">{n.avg}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Buy in Kenai */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-10">Why Buy in Kenai?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <DollarSign size={28} />, color: 'bg-green-100 text-green-600', title: 'No State Income Tax', desc: 'Alaska has no state income or sales tax — keep more of your hard-earned money.' },
                  { icon: <Mountain size={28} />, color: 'bg-blue-100 text-blue-600', title: 'Unmatched Scenery', desc: 'Mountains, glaciers, rivers, and coastline minutes from your doorstep.' },
                  { icon: <Shield size={28} />, color: 'bg-purple-100 text-purple-600', title: 'Safe Communities', desc: 'Small-town values with tight-knit neighborhoods and low crime rates.' },
                  { icon: <TrendingUp size={28} />, color: 'bg-orange-100 text-orange-600', title: 'Growing Market', desc: 'Steady appreciation with strong demand from in-state and Lower 48 buyers.' },
                ].map((card, i) => (
                  <div key={i} className="text-center p-6">
                    <div className={`${card.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>{card.icon}</div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-10">Kenai Peninsula Market Snapshot</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <DollarSign className="mx-auto mb-2 text-blue-200" size={32} />
                  <p className="text-3xl font-bold">$365K</p>
                  <p className="text-blue-200 text-sm mt-1">Average Home Price</p>
                </div>
                <div>
                  <Clock className="mx-auto mb-2 text-blue-200" size={32} />
                  <p className="text-3xl font-bold">42</p>
                  <p className="text-blue-200 text-sm mt-1">Avg Days on Market</p>
                </div>
                <div>
                  <TrendingUp className="mx-auto mb-2 text-blue-200" size={32} />
                  <p className="text-3xl font-bold">+5.2%</p>
                  <p className="text-blue-200 text-sm mt-1">YoY Price Growth</p>
                </div>
                <div>
                  <Home className="mx-auto mb-2 text-blue-200" size={32} />
                  <p className="text-3xl font-bold">320+</p>
                  <p className="text-blue-200 text-sm mt-1">Active Listings</p>
                </div>
              </div>
            </div>
          </section>

          {/* List Your Property CTA */}
          <section className="bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">List Your Property — Start Selling Today</h2>
              <p className="text-gray-300 text-lg mb-8">Reach thousands of qualified buyers across the Kenai Peninsula. Professional photos, virtual tours, and maximum exposure.</p>
              <a href="#contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Get a Free Home Valuation
              </a>
            </div>
          </section>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ListingsGrid listings={filteredListings} />
          </div>
          
          <RelatedSites />
          <ContactForm />
          <EmpireNetwork currentSite="kenaihomesales" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
