# wedding-api
An API I built to facilitate RSVPs on my wedding website. The website (link will be here when the repo is ready) uses this API to update RSVP records for each person invited to my wedding. The invites were sent out with a code that when entered, pulled the RSVP details for that invitee. They were able to update their status, and send their response through. I would occasionally query the database to get a count for who was coming, what dietary restrictions were needed tended to, and if they had any song requests for our DJ (my wife's sister with an aux cord and Spotify).

It is a fairly basic website/API, but it was a fun first foray into personal projects that had an actual helpful use in my day-to-day life. I am also happy to say that no one encountered any issues with RSVPing, so I must have done something right.

## Tech Stack
This API uses the following libraries;

### Serverless
[Serverless](https://www.serverless.com/framework) is used to define HTTP endpoints and to simplify the deployment process to AWS.

### Sequelize
[Sequelize](https://sequelize.org/) is a JavaScript ORM that is used to define my table structures and facilitate easy reads/writes to the database.

