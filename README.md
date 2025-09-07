# 🏨 Airbnb Clone

## 📌 Overview  
This is a full-stack web application inspired by **Airbnb**.  
It allows users to browse hotels at various tourist spots, manage property listings, and share reviews.  
Built with **Node.js, Express.js, MongoDB, and EJS**, it demonstrates core concepts of authentication, database design, and CRUD operations.  

---

## 🚀 Features  
- 👤 **User Authentication** (Signup/Login/Logout using Passport.js)  
- 🏘️ **Hotel Listings**  
  - Add new listings (with details like name, location, and price)  
  - Update or delete existing listings  
- ⭐ **Reviews System**  
  - Add, update, or delete reviews for hotels  
  - Star ratings and comments  
- 🔒 **Role-based Access Control**  
  - Only listing owners can edit or delete their listings  

---

## 🛠️ Tech Stack  
- **Frontend:** EJS, HTML, CSS, Bootstrap/Tailwind  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas / Local)  
- **Authentication:** Passport.js, Express-Session  
- **Other Tools:** Mongoose, Connect-Flash, Method-Override  

---

## 📂 Project Structure  
├── models/ # Database models (User, Listing, Review)
├── routes/ # Express route handlers
├── views/ # EJS templates
├── public/ # Static assets (CSS, JS, Images)
├── app.js # Main application file
├── package.json # Project dependencies
└── README.md # Project documentation
