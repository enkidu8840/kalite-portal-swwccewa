import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Varsayılan test kullanıcısı ile oturum aç
export const signInWithEmail = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'test@example.com',
    password: 'test123'
  })
  
  if (error) {
    throw error
  }
  
  return data
}

// Oturum durumunu kontrol et
export const checkAuth = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}