import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cppjjnydlxlwucklizzy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwcGpqbnlkbHhsd3Vja2xpenp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNjQ3MzMsImV4cCI6MjA0MTY0MDczM30.COdDJn8Sfb9j3oxVISjHTC31-yPOO8-ahs8B9CgDH14'
export const supabase = createClient(supabaseUrl, supabaseKey)