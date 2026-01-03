# pastebin-lite
Pastebin-lite is a lightweight, full-stack web application that allows users to easily create, share, and manage text snippets or code snippets online. Inspired by the popular Pastebin platform, this project is designed for simplicity, speed, and usability. Users can create “pastes” with optional expiration times and limited views.

# Features
### Create text/code pastes
### Shareable URLs
### Auto expiry (TTL)
### View limits
### Clean, responsive UI
### No signup required


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
```create table pastes (
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
