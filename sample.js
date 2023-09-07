const express = require('express');
const app = express();
const github_file_url = "https://githunfileurl.com";
const github_repo = "htttps example.com";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for handling GET requests with query parameters slack_name and track
app.get('/api/:slack_name/:track', (req, res) => {
    const slackname = req.params.slack_name;
    const track = req.params.track;
    
    if (!slackname || !track) {
        return res.status(400).send('Both slack and track parameters are required');
    }

    // Calculate current day and UTC time for each request
    // Calculate the current day of the week as a string (e.g., "Monday")
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const currentDay = daysOfWeek[date.getDay()];
    const current_time = date.getTime();

    res.json({
        "slack_name": slackname,
        "current_day": currentDay,
        "utc_time": current_time,
        "track": track,
        "github_file_url": github_file_url,
        "github_repo": github_repo,
        "status_code": 200
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
