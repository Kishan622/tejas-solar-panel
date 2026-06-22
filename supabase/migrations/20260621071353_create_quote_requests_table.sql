/*
# Create quote_requests table (single-tenant, no auth)

## Purpose
Stores submissions from the "Get Free Quote" form on the solar panel business website.
No user accounts are required — the public-facing website inserts rows directly using
the anon key.

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — full name of the requester
  - `email` (text, not null) — contact email
  - `phone` (text, not null) — contact phone number
  - `address` (text, not null) — installation address
  - `property_type` (text, not null) — residential | commercial | industrial
  - `monthly_bill` (numeric, nullable) — average monthly electricity bill (optional)
  - `message` (text, nullable) — additional notes from the requester
  - `status` (text, not null, default 'new') — new | contacted | converted
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `quote_requests`.
- Allow anon + authenticated INSERT only (public visitors can submit quotes).
- No public SELECT/UPDATE/DELETE — only backend/service role can read or manage requests.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  property_type text NOT NULL CHECK (property_type IN ('residential', 'commercial', 'industrial')),
  monthly_bill numeric,
  message text,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
ON quote_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
