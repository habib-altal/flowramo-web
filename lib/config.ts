// Public values only. The publishable key is designed to ship to the browser;
// row-level security on `website_leads` allows inserts and nothing else.
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://rfoebtyreltajblsryep.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_ivccS09z8Re2RqFdya1fiw_Jxn95OMx";

// The demo Lina on WhatsApp (digits only, international format, no +).
export const LINA_DEMO_WHATSAPP = process.env.NEXT_PUBLIC_LINA_DEMO_WHATSAPP || "905510380320";
