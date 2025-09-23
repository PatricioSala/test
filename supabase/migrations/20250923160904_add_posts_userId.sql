alter table "public"."posts" add column "user_id" bigint;

alter table "public"."users" add column "profile_picture" text;

alter table "public"."posts" add constraint "posts_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."posts" validate constraint "posts_user_id_fkey";

create policy "Enable insert for all users"
on "public"."users"
as permissive
for insert
to public
with check (true);



