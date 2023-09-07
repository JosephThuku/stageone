const express = require('express');
const app = express();
// get current day and time in utc
const date = new Date();
const current_day = date.getDay();
const current_time = date.getTime();
github_file_url = "https://githunfileurl.com";
github_repo = "htttps example.com";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes for handling get request with query parameters slack_name and track
app.get('/api/:slack_name/:track', (req, res) => {
    slackname = req.params.slack_name;
    track = req.params.track;
    if (!slackname, track || !track){
        return res.status(400).send('Both slack and track parameters are required');
    }
    // return response if user perovided info
    res.json({
        "slack_name": slackname,
        "curret_day": current_day,
        "utc_time": current_time,
        "track": track,
        "github_file_url": github_file_url,
        "github_repo": github_repo,
        "status_code": 200
    });
});
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listenning on port ${port}`));