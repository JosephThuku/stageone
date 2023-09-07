const express = require('express');
const app = express();
const github_file_url = "https://github.com/JosephThuku/stageone/blob/main/index.js";
const github_repo = "https://github.com/JosephThuku/stageone";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello there please pass slackname and track on the url get request example:');
});

// Route for handling GET requests with query parameters slack_name and track
app.get('/api', (req, res) => {
    const slackname = req.query.slack_name;
    const track = req.query.track;
    
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

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));
