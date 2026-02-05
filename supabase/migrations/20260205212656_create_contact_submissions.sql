/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `email` (text, required) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the submission (new, contacted, closed)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public INSERT access (anyone can submit)
    - Add policy for authenticated admin access to read submissions
  
  3. Important Notes
    - Public can only INSERT, not read their own submissions
    - This prevents privacy concerns and data exposure
    - Admin users (authenticated) can view all submissions
*/

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  phone text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms (INSERT only)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admins) to view all submissions
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admins) to update submission status
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);