# Rest API Job queue 
Desription: Create a job queue whose workers fetch data from a URL and store the results in a database. The job queue should expose a REST API for adding jobs and checking their status / results.

Example:

User submits www.google.com to your endpoint. The user gets back a job id. Your system fetches www.google.com (the result of which would be HTML) and stores the result. The user asks for the status of the job id and if the job is complete, he gets a response that includes the HTML for www.google.com.

# How to run it 
git clone https://github.com/hgerard765/restAPI.git
cd restAPI
npm install
brew install httpie
npm run start

# Testing
Open a new tab and cd into the restAPI directory
http POST localhost:3000/jobs url=https://www.facebook.com
