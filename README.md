# Rest API Job queue 
Desription: Create a job queue whose workers fetch data from a URL and store the results in a database. The job queue should expose a REST API for adding jobs and checking their status / results.

Example:

User submits www.google.com to your endpoint. The user gets back a job id. Your system fetches www.google.com (the result of which would be HTML) and stores the result. The user asks for the status of the job id and if the job is complete, he gets a response that includes the HTML for www.google.com.

# What to install if needed  


Homebrew:

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Node.js:

brew install -v node

Install MongoDb:

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/

Once repo is cloned:

npm install

brew install httpie


# Testing

git clone https://github.com/hgerard765/restAPI.git

Open a new tab and cd into the restAPI directory

mongod

Open another new tab and cd into the restAPI directory:

npm run start 

http POST localhost:3000/jobs url=https://www.facebook.com

A successful post should look like:



HTTP/1.1 200 OK

Connection: keep-alive

Content-Length: 138

Content-Type: application/json; charset=utf-8

Date: Thu, 26 Apr 2018 22:53:14 GMT

ETag: W/"8a-kASUsnR2+KYFWJmJ/kCy/fqreP8"

X-Powered-By: Express

{

    "Created_date": "2018-04-26T22:53:14.206Z",
    
    "__v": 0,
    
    "_id": "5ae2585ae533d911d94b01b6",
    
    "status": [
    
        "pending"
        
    ],
    
    "url": "https://www.facebook.com"
    
}

