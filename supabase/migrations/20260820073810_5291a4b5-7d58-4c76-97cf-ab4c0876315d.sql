CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.enquiries TO anon;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public enquiry submissions"
  ON public.enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);