/*
  # Quality Management Portal Database Schema

  1. New Tables
    - Core tables for users and departments
    - Document management tables
    - Audit and findings tables
    - Training management tables
    - Laboratory and analysis tables
    - Maintenance and calibration records
    - Incident and emergency management
    - Customer feedback and surveillance
    - Management review records

  2. Security
    - RLS enabled on all tables
    - Policies for authenticated users
*/

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  department text,
  role text,
  created_at timestamptz DEFAULT now()
);

-- Departments Table
CREATE TABLE IF NOT EXISTS departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  manager_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now()
);

-- Documents Table
CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE,
  title text NOT NULL,
  category text,
  status text DEFAULT 'active',
  created_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now()
);

-- Document Versions Table
CREATE TABLE IF NOT EXISTS document_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid REFERENCES documents(id),
  version text NOT NULL,
  file_url text,
  approved_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now()
);

-- Audits Table
CREATE TABLE IF NOT EXISTS audits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text,
  start_date date,
  end_date date,
  status text DEFAULT 'planned',
  lead_auditor uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now()
);

-- Audit Findings Table
CREATE TABLE IF NOT EXISTS audit_findings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  audit_id uuid REFERENCES audits(id),
  finding_type text,
  description text,
  status text DEFAULT 'open',
  created_at timestamptz DEFAULT now()
);

-- Trainings Table
CREATE TABLE IF NOT EXISTS trainings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  trainer text,
  training_date date,
  duration integer,
  status text DEFAULT 'planned',
  created_at timestamptz DEFAULT now()
);

-- Training Participants Table
CREATE TABLE IF NOT EXISTS training_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  training_id uuid REFERENCES trainings(id),
  participant_id uuid REFERENCES users(id),
  attendance_status text DEFAULT 'registered',
  created_at timestamptz DEFAULT now()
);

-- Training Plans Table
CREATE TABLE IF NOT EXISTS training_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  training_id uuid REFERENCES trainings(id),
  planned_date date,
  department_id uuid REFERENCES departments(id),
  status text DEFAULT 'planned',
  created_at timestamptz DEFAULT now()
);

-- Laboratory Analyses Table
CREATE TABLE IF NOT EXISTS laboratory_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sample_code text,
  analysis_type text,
  requested_by uuid REFERENCES users(id),
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Laboratory Results Table
CREATE TABLE IF NOT EXISTS laboratory_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  analysis_id uuid REFERENCES laboratory_analyses(id),
  parameter text,
  result text,
  unit text,
  analyst uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now()
);

-- Maintenance Records Table
CREATE TABLE IF NOT EXISTS maintenance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  equipment_name text,
  maintenance_type text,
  maintenance_date date,
  performed_by text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Calibration Records Table
CREATE TABLE IF NOT EXISTS calibration_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  equipment_name text,
  serial_number text,
  calibration_date date,
  next_calibration_date date,
  calibrated_by text,
  result text,
  created_at timestamptz DEFAULT now()
);

-- Incidents Table
CREATE TABLE IF NOT EXISTS incidents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  incident_type text,
  incident_date timestamptz,
  location text,
  description text,
  reported_by uuid REFERENCES users(id),
  status text DEFAULT 'open',
  created_at timestamptz DEFAULT now()
);

-- Emergency Teams Table
CREATE TABLE IF NOT EXISTS emergency_teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name text,
  leader_id uuid REFERENCES users(id),
  department_id uuid REFERENCES departments(id),
  created_at timestamptz DEFAULT now()
);

-- Corrective Actions Table
CREATE TABLE IF NOT EXISTS corrective_actions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type text,
  source_id uuid,
  description text,
  assigned_to uuid REFERENCES users(id),
  due_date date,
  status text DEFAULT 'open',
  created_at timestamptz DEFAULT now()
);

-- Customer Feedback Table
CREATE TABLE IF NOT EXISTS customer_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text,
  feedback_type text,
  description text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Surveillance Records Table
CREATE TABLE IF NOT EXISTS surveillance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  process_name text,
  inspection_date date,
  inspector uuid REFERENCES users(id),
  findings text,
  created_at timestamptz DEFAULT now()
);

-- Management Reviews Table
CREATE TABLE IF NOT EXISTS management_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  meeting_date date,
  participants text[],
  agenda text,
  decisions text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security for all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audits ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_findings ENABLE ROW LEVEL SECURITY;
ALTER TABLE trainings ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE laboratory_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE laboratory_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE calibration_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE incidents ENABLE ROW LEVEL SECURITY;
ALTER TABLE emergency_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE corrective_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE surveillance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE management_reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (excluding suppliers table)
DO $$ 
DECLARE
  table_name text;
BEGIN
  FOR table_name IN (
    SELECT tablename 
    FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename != 'suppliers'
    AND tablename != 'nonconformities'
    AND tablename != 'nonconformity_images'
  ) 
  LOOP
    EXECUTE format('
      CREATE POLICY "Authenticated users can read %I" ON %I
        FOR SELECT TO authenticated USING (true);
      
      CREATE POLICY "Authenticated users can insert %I" ON %I
        FOR INSERT TO authenticated WITH CHECK (true);
      
      CREATE POLICY "Authenticated users can update %I" ON %I
        FOR UPDATE TO authenticated USING (true);
      
      CREATE POLICY "Authenticated users can delete %I" ON %I
        FOR DELETE TO authenticated USING (true);
    ', table_name, table_name, table_name, table_name, table_name, table_name, table_name, table_name);
  END LOOP;
END $$;