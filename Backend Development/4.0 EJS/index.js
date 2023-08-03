import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  // console.log(day);

  let type = "the weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekday";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
