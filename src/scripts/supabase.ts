import { createClient } from '@supabase/supabase-js'
import type { Database } from './types.ts'
const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY
/**
 * Creates a Supabase client for interacting with the Supabase database.
 *
 * @template T - The type of the database client.
 * @param {string} supabaseUrl - The URL of the Supabase server.
 * @param {string} supabaseAnonKey - The anonymous key for accessing the Supabase server.
 * @return {T} - The Supabase database client.
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)