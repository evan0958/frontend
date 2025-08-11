import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import PropertyCard from '../components/PropertyCard';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.rpc('search_leads_fast', { q: query });
    if (!error) setResults(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-brand-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Find Motivated Seller Leads</h1>
        <form onSubmit={handleSearch} className="flex justify-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by address, owner, or city"
            className="px-4 py-2 rounded-l-lg text-gray-900 w-2/3"
          />
          <button className="bg-accent px-6 py-2 rounded-r-lg">Search</button>
        </form>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
