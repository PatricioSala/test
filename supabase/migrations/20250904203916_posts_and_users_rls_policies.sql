
  create policy "Allow insert for anon"
  on "public"."posts"
  as permissive
  for insert
  to public
with check (true);



