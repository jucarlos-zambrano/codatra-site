-- Codatra marketing site — leads table
-- Project: compliance-os (public schema)
-- Run manually in Supabase SQL Editor if not using Supabase CLI migrations.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  role text,
  company text not null,
  email text not null,
  employee_size text not null,
  industry text not null,
  constraint leads_employee_size_check check (
    employee_size in ('10-25', '26-50', '51-100', '101-200')
  )
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;

grant all privileges on table public.leads to service_role;

grant usage on schema public to service_role;


-- No policies for anon or authenticated roles.
-- Inserts are performed server-side with the service role key only.
