/*
  # Kalite Yönetim Sistemi Veritabanı Şeması

  1. New Tables
    - `suppliers` (tedarikçiler)
      - `id` (uuid, primary key)
      - `name` (text)
      - `contact_person` (text)
      - `email` (text)
      - `phone` (text)
      - `status` (text)
      - `created_at` (timestamp)
      
    - `nonconformities` (uygunsuzluklar)
      - `id` (uuid, primary key)
      - `no` (text, unique)
      - `date` (date)
      - `business` (text)
      - `supplier_id` (uuid, foreign key)
      - `product` (text)
      - `manufacturer` (text)
      - `label_info` (text)
      - `category` (text)
      - `description` (text)
      - `detected_by` (text)
      - `business_action` (text)
      - `status` (text)
      - `created_at` (timestamp)
      
    - `nonconformity_images` (uygunsuzluk resimleri)
      - `id` (uuid, primary key)
      - `nonconformity_id` (uuid, foreign key)
      - `image_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Tedarikçiler tablosu
CREATE TABLE IF NOT EXISTS suppliers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact_person text,
  email text,
  phone text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read suppliers"
  ON suppliers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert suppliers"
  ON suppliers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update suppliers"
  ON suppliers
  FOR UPDATE
  TO authenticated
  USING (true);

-- Uygunsuzluklar tablosu
CREATE TABLE IF NOT EXISTS nonconformities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  no text UNIQUE NOT NULL,
  date date NOT NULL,
  business text NOT NULL,
  supplier_id uuid REFERENCES suppliers(id),
  product text NOT NULL,
  manufacturer text,
  label_info text,
  category text,
  description text,
  detected_by text,
  business_action text,
  status text DEFAULT 'open',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE nonconformities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read nonconformities"
  ON nonconformities
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert nonconformities"
  ON nonconformities
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update nonconformities"
  ON nonconformities
  FOR UPDATE
  TO authenticated
  USING (true);

-- Uygunsuzluk resimleri tablosu
CREATE TABLE IF NOT EXISTS nonconformity_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nonconformity_id uuid REFERENCES nonconformities(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE nonconformity_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read nonconformity images"
  ON nonconformity_images
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert nonconformity images"
  ON nonconformity_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete nonconformity images"
  ON nonconformity_images
  FOR DELETE
  TO authenticated
  USING (true);