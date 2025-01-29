{/*https://www.youtube.com/watch?v=5YCuUCRS_Ks*/}
const axios = require('axios');
{/*http library used for requests*/}
const cheerio = require('cheerio');
{/*way to pass in html string, navigate, grab right info*/}
const express = require('express');
const cors = require('cors') // Import CORS middleware

async function getScores(){
    try{
        const siteURL = 'https://www.pro-football-reference.com/boxscores/'

        const { data } = await axios({
            method: "GET",
            url: siteURL
        })

        const $ = cheerio.load(data)
        const elemSelector = '#content > div.game_summaries > div'
        const gameResults = []


        $(elemSelector).each((parentIdx, parentElem) => {
            const teams = [];
            const scores = [];
{/*https://chatgpt.com/c/6799c10c-c4bc-8011-80ef-1eb7d7e88d3e GPT used to get correct scraping of teams, scores*/}

            // Extract winning team and score
            $(parentElem).find('table.teams > tbody > tr.winner').each((teamIdx, teamElem) => {
                const teamName = $(teamElem).find('td:nth-child(1) > a').text().trim(); // Winner team name
                const teamScore = $(teamElem).find('td:nth-child(2)').text().trim(); // Winner score
                teams.push(teamName);
                scores.push(teamScore);
            });

            // Extract losing team and score
            $(parentElem).find('table.teams > tbody > tr.loser').each((teamIdx, teamElem) => {
                const teamName = $(teamElem).find('td:nth-child(1) > a').text().trim(); // Loser team name
                const teamScore = $(teamElem).find('td:nth-child(2)').text().trim(); // Loser score
                teams.push(teamName);
                scores.push(teamScore);
            });

            // Log if both teams and scores are found
            if (teams.length === 2 && scores.length === 2) {
                gameResults.push({
                    game: `${teams[0]} vs ${teams[1]}`,
                    scores: `${scores[0]} - ${scores[1]}`,
                    teams,
                    scores
                });
            }
        })

        return gameResults
    } catch (err) {
        console.error(err)
    }
}

{/*https://chatgpt.com/c/6799c4dc-ce14-8011-9094-65f617b7e5a0 used to help figure out how to launch react app and scraper at the same time*/}

//express server
// Enable CORS for all origins (you can restrict to specific origins if needed)
const app = express();
const corsOptions ={
    origin: 'https://ciaranburrplayoffpredictor.netlify.app',
}
app.use(cors(corsOptions)); // Allow all origins by default
// If you want to restrict to localhost:3000 specifically:
// app.use(cors({ origin: 'http://localhost:3000' }));
const port = 5001;  // Port for the backend server

//endpoint for gamescores
app.get('/api/gamescore', async (req, res) =>{
    try{
        const gamescore = await getScores()

        return res.status(200).json({
            result: gamescore
        })
    } catch (err){
        return res.status(500).json({
            err: err.toString()
        })
    }
})

// Initialize scraper once when the server starts
async function initializeScraper() {
    const scores = await getScores(); // Run scraper once on server start
    console.log('Scores fetched on server start:', scores);
}

initializeScraper();

// Start the Express server
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});