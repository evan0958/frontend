import { supabase } from './supabaseClient';
import { useQuery } from '@tanstack/react-query';

export function useZipLeads(zip, page = 1, pageSize = 25) {
  return useQuery({
    queryKey: ['zipLeads', zip, page, pageSize],
    enabled: !!zip,
    queryFn: async () => {
      const { data, error } = await supabase.rpc('search_leads_fast', { q: zip });
      if (error) throw error;
      return data ?? [];
    },
  });
}

export async function fetchQuota() {
  const { data, error } = await supabase.rpc('get_user_quota', {});
  if (error) throw error;
  return data;
}
