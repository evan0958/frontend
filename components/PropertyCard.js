import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow p-4">
      <h2 className="text-xl font-bold">{property.address}</h2>
      <p className="text-sm">{property.city}, {property.state}</p>
      <p className="text-sm">Type: {property.type}</p>
      {property.price_ask && <p className="text-sm">Ask: ${property.price_ask.toLocaleString()}</p>}
      <div className="flex gap-2 mt-4">
        <button className="p-2 bg-green-500 text-white rounded-full"><Phone size={16} /></button>
        <button className="p-2 bg-blue-500 text-white rounded-full"><MessageCircle size={16} /></button>
        <button className="p-2 bg-pink-500 text-white rounded-full"><Mail size={16} /></button>
      </div>
    </div>
  );
}
