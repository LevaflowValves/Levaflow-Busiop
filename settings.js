// =====================================================================
// settings.js — LEVAFLOW ONLY. Sits beside Index.html on Levaflow's site.
// NEVER put this file on Flometriq's site: it points the app at
// Levaflow's database.
// Created 23 Sep 2026 for build 2026-09-23T03:30:00Z (86).
// =====================================================================
window.APP_SETTINGS = {
  // Levaflow's own database (Supabase project Levaflow_ERP, Mumbai)
  supabaseUrl: "https://mlxxgzpwfrmidsfcqtnz.supabase.co",
  supabaseKey: "sb_publishable__JpZhGRm_km2C9HjU3XkwA_dbFQavGn",

  // Shown in the browser tab and on the sign-in screen
  appTitle: "Levaflow — BOM Estimator",
  instanceLabel: "Levaflow Valves and Instruments",

  // Fallback letterhead text. PDFs normally print from Company Master;
  // these only fill in where a PDF has no company record to use.
  // Website and email are blank until Levaflow's are known.
  companyName: "LEVAFLOW VALVES AND INSTRUMENTS (OPC) PRIVATE LIMITED",
  companyAddress: "No. 7(55), Sai Baba Colony, 1st Street, Virugambakkam, Chennai, Tamil Nadu 600092, India",
  companyWebsite: "",
  companyEmail: "",

  // First quote typed by hand becomes the datum; later ones are suggested
  quoteNumberSuggestion: true
};
