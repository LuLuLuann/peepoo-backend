import express from "express";
const nycOpenDataPublicBathroomApiRouter = express.Router();


nycOpenDataPublicBathroomApiRouter.get('/', async (req, res) => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/i7jb-7jku.json?$limit=10');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// module.exports = router;
export default nycOpenDataPublicBathroomApiRouter
