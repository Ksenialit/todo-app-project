import { createClient } from '@supabase/supabase-js'

const baseUrl = 'https://pwsgzvkrikpumwoilfch.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3c2d6dmtyaWtwdW13b2lsZmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNjQxMzMsImV4cCI6MTk5Nzk0MDEzM30._2nCDy2G3yEVgDplva3f88g07EXtwSZ2R5BYUPJEC1s';

export default createClient(baseUrl, apiKey)
