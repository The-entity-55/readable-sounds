// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nxeuvsjwmgufdenfsipy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZXV2c2p3bWd1ZmRlbmZzaXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0Mzg1NDYsImV4cCI6MjA1MzAxNDU0Nn0.TrSTzlLq9OqlNH4qhfzA6mBQnDluUDPotsavheDGDvc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);