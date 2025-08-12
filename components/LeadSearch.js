import { useState } from 'react';
import { useZipLeads } from '../lib/data';

export default function LeadSearch({ onSelect }) {
  const [zip, setZip] = useState('');
  const { data, isLoading, error } = useZipLeads(zip);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded border px-3 py-2"
          placeholder="Enter ZIP"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <button className="rounded bg-black text-white px-4">Search</button>
      </div>
      {isLoading && <p>Searching…</p>}
      {error && <p className="text-red-600">{error.message}</p>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((p) => (
          <button
            key={p.id}
            className="text-left rounded border p-4 hover:shadow"
            onClick={() => onSelect?.(p)}
          >
            <div className="font-semibold">{p.address}</div>
            <div className="text-sm text-gray-600">
              {p.city}, {p.state}
            </div>
            <div className="mt-2 text-xs">Score: {Math.round(p.score ?? 0)}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
