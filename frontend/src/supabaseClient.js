import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rfjbruymaccgzcdvelfn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmamJydXltYWNjZ3pjZHZlbGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5OTUzNDMsImV4cCI6MjA4NjU3MTM0M30.OwD2MIsZlrNxk-UewyWHvskJMvMedtE00lV-Af65I2M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
