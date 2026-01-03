# pastebin-lite
Pastebin-lite is a lightweight, full-stack web application that allows users to easily create, share, and manage text snippets or code snippets online. Inspired by the popular Pastebin platform, this project is designed for simplicity, speed, and usability. Users can create “pastes” with optional expiration times and limited views.

# Features
### Create text/code pastes
### Shareable URLs
### Auto expiry (TTL)
### View limits
### Clean, responsive UI
### No signup required

# Preview Screenshot-
#### Homepage-
![Homepage](https://jbocmsmgechiwurvokav.supabase.co/storage/v1/object/sign/pastebin%20content/homepage.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNGU4YzVmNS0zYzdhLTRmOGMtOGM2ZC04N2JjYTU0ZWVhZWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXN0ZWJpbiBjb250ZW50L2hvbWVwYWdlLnBuZyIsImlhdCI6MTc2NzQzMzQ4MSwiZXhwIjoxNzk4OTY5NDgxfQ.JY3FNalsAHZ1Yvp8Nr3WCubNn7Hbdp-PqedyvGVcsVs)

#### Create Paste form - 
![Create](https://jbocmsmgechiwurvokav.supabase.co/storage/v1/object/sign/pastebin%20content/create-paste.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNGU4YzVmNS0zYzdhLTRmOGMtOGM2ZC04N2JjYTU0ZWVhZWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXN0ZWJpbiBjb250ZW50L2NyZWF0ZS1wYXN0ZS5wbmciLCJpYXQiOjE3Njc0MzM2ODAsImV4cCI6MTc5ODk2OTY4MH0.nFpdZBOZ1ZmaPGND4l-JqZ20wlu4rbtd3yMntWE9Q8o)

#### Url Generation - 
![url](https://jbocmsmgechiwurvokav.supabase.co/storage/v1/object/sign/pastebin%20content/generated-url.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNGU4YzVmNS0zYzdhLTRmOGMtOGM2ZC04N2JjYTU0ZWVhZWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXN0ZWJpbiBjb250ZW50L2dlbmVyYXRlZC11cmwucG5nIiwiaWF0IjoxNzY3NDMzNzE4LCJleHAiOjE3OTg5Njk3MTh9.jiG4WRib7U6AqaXRqoanHQM-UzaDwyU1awyuKEBlsEY)

#### View Paste - 
![viewpaster](https://jbocmsmgechiwurvokav.supabase.co/storage/v1/object/sign/pastebin%20content/view-paste.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNGU4YzVmNS0zYzdhLTRmOGMtOGM2ZC04N2JjYTU0ZWVhZWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXN0ZWJpbiBjb250ZW50L3ZpZXctcGFzdGUucG5nIiwiaWF0IjoxNzY3NDMzNzc2LCJleHAiOjE3OTg5Njk3NzZ9.Yi5WX_UwLlCznueUVnCqI7-GJcyY-GvFN2H7Cq1I2m8)

# Tech Stack
### Next.js (App Router)
### Tailwind CSS
### Supabase (PostgreSQL)
### Vercel

# How to run project locally
1)Clone the repo -
```
  git clone https://github.com/Suraj-1408/pastebin-lite.git
  cd pastebin-lite
```

2)Install dependencies- 
```
npm install
```

3) Setup Supabase -
i)Create a project at https://supabase.com

ii)Create a pastes table:
```
   create table pastes (
  id uuid primary key,
  content text not null,
  created_at timestamp with time zone default now(),
  expires_at timestamp with time zone,
  max_views integer,
  views integer default 0
);
```

4)Add Environment Variable - 
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DB_HOST=Your host name
DB_USER=Your User name
DB_PASSWORD="Your Password"
DB_NAME=Your database name
DB_PORT=6543
DB_SSL=true
NODE_ENV=development
```

5)Start the app using - 
```
npm run dev
```


6) Routes -
i)`/` → Home
ii)`/create` → Create paste
iii)`/p/[id]` → View paste
iv)`/my_pastes` → My pastes
