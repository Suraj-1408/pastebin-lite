# Pastebin-lite
Pastebin-lite is a lightweight, full-stack web application that allows users to easily create, share, and manage text snippets or code snippets online. Inspired by the popular Pastebin platform, this project is designed for simplicity, speed, and usability. Users can create “pastes” with optional expiration times and limited views.

# Features
#### 1)Create text/code pastes
#### 2)Shareable URLs
#### 3)Auto expiry (TTL)
#### 4)View limits
#### 5)Clean, responsive UI
#### 6)No signup required

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
#### 1)Frontend Framework - Made use of Next.js to handle API routes and application logic
#### 2)CSS Framework - Used Tailwind CSS for responsive UI styling
#### 3)Supabase (PostgreSQL) - Backend as service platform to define database relation & data storage
#### 4)Vercel - Used for app deployment.

# How to run project locally
### 1)Clone the repo -
```
  git clone https://github.com/Suraj-1408/pastebin-lite.git
  cd pastebin-lite
```

### 2)Install dependencies- 
```
npm install
```

### 3) Setup Supabase - 
#### i)Create a supabase project
1)Go to supabase.com → Sign up → New Project
2)Give a project name, set a password, and choose region


#### ii)Create a pastes table using SQL editor:
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
Here ,
1)id → unique identifier 
2)content → paste text 
3)created_at → creation timestamp 
4)expires_at → optional expiry 
5)max_views → optional max views 
6)views → view count


### 4)Add Environment Variable to your local- 
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

### 5)Start the app using - 
```
npm run dev
```


### 6) Persistence Layer - 
Supabase (PostgreSQL) – Used to Store all pastes content (pastes table) , Store metadata (created_at, views, max_views, expires_at).

### 7) Important Design Decisions: 
Used Next.js API routes as the backend for simplicity and Vercel deployment, Supabase for database and storage, environment variables for secure configuration, and a pastes table designed with expires_at, max_views, and views for flexibility.
 
