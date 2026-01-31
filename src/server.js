require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB(); // 👈 YE LINE VERY IMPORTANT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
