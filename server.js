const express = require("express");
const authRoutes = require("./routes/authRoutes");
const viewsRoutes = require("./routes/viewsRoutes");
const profileRoutes = require("./routes/profileRoutes");
const newsRoutes = require("./routes/newsRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const dashboardViewsRoutes = require("./routes/dashboardViewsRoutes");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./db/connect");
const partials = require("express-partials");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files (e.g., CSS, JS) from the public folder
app.use(express.static(path.join(__dirname, "public"))); // Ensure public folder is correctly resolved

// View Engine
app.set("view engine", "ejs");
app.use(partials());
app.set("views", path.join(__dirname, "views")); // Views folder is correctly set

// Use the routes for views and authentication
app.use("/", viewsRoutes);
app.use("/dashboard", dashboardViewsRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/category", categoryRoutes);

// Start the server
app.listen(3000, () => console.log("Server is running at port 3000"));
