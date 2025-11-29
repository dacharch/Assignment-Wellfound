# User Management + Analytics Dashboard  

A mini admin-style dashboard built using **React + TypeScript**, featuring:

- User Management (List + Filters + Sorting + Pagination)
- User Details Page with Edit Modal
- Analytics Overview with Charts
- Reusable UI Components (Table, Modal, Input, Select, Skeleton)
- Global state management using **Zustand**
- Fully responsive dashboard layout with Sidebar
- Mock data + Local state updates

---

##  Features

### Users List Page (`/users`)
Displays a paginated, filterable, sortable list of users.

**Includes:**
- Avatar  
- Name  
- Email  
- Status (Active/Inactive)  
- Created Date  
- View + Edit actions  
- Filtering by name + status  
- Sorting by name + created date  
- Client-side pagination  
- Skeleton loader during loading  
- Debounced search  

---

### User Details Page (`/users/:id`)
Shows a detailed user profile:

- Avatar, name, email, status  
- Last 5 mock activities  
- Edit User (opens modal)  
- Real-time UI update via Zustand  

---

### ✅ Analytics Overview Page (`/analytics`)
Contains two charts (using **Recharts**):

- **Signup Trend** (Line Chart)  
- **Active vs Inactive Users** (Pie Chart)

Charts use mock data or derived data from users.

---

### 🎨 Clean UI / UX
- Admin-style left sidebar  
- Right side content area wrapped in a beautiful responsive card  
- TailwindCSS based design  
- Fully responsive on mobile/tablet/desktop  

---

### 🧠 State Management  
Using **Zustand** for:

- User list  
- User filters  
- Sorting  
- Updating users  
- Getting user by ID  
- Theme support (optional)  

---



---

## 📦 Libraries Used

### Frontend
- **React 18**
- **TypeScript**
- **React Router**
- **Zustand** (state management)
- **Recharts** (charts)
- **TailwindCSS** (styling)
- **date-fns** (date utilities)

### Development Tools
- Vite  
- ESLint + Prettier (optional)  
- JSON Server (optional for API simulation)  

---

## 🔧 How to Run the Project

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git

cd your-repo-name

# Install dependencies
npm install

# Start the dev server
npm run dev

