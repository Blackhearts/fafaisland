// Minimal Supabase client setup for the browser
// IMPORTANT: The anon key is safe to expose in the browser. Keep the service_role key private (server only).

;(function(){
  // Replace these with your Supabase project's values (Project Settings → API)
  // You can safely commit these, but consider different branches per environment.
  const SUPABASE_URL = "https://jnirvdgnvqmipznvzyrb.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuaXJ2ZGdudnFtaXB6bnZ6eXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTk1MjAsImV4cCI6MjA3MzQ5NTUyMH0.iHhjTCK4XgLido-GatUZYbd55tn_lgnveN0cOBHR8QI";

  if (!window.supabase) {
    // Load from CDN if not already present
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";
    s.async = false;
    s.onload = init;
    document.head.appendChild(s);
  } else {
    init();
  }

  function init(){
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL.includes("YOUR-") || SUPABASE_ANON_KEY.includes("YOUR-")) {
      console.warn("[Supabase] Configure SUPABASE_URL and SUPABASE_ANON_KEY in js/supabaseClient.js");
    }
    window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("[Supabase] Client initialized");
  }
})();
