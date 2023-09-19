# Mongo-db-API

This is a app includes a server and a mongo schema.

The schema is for a to do list app, but the app can easily
be refactored to accommodate other schemas. 

## Setup

### For Mac:
To connect your local Mongo DB instance to this API
you'll want to have brew installed. Then you can run 

`brew tap mongodb/brew`

Followed by

`brew install mongodb-community@latest`

These enable mongo to run locally
Once they are finished installing you
can start the instance with:

`brew services start mongo-community`

A local mongo db instance is running!
To get the URI to connect to, run:

`mongosh`

The URI will start with 'mongodb://127.0.0.1...'

This will bring to a new command line prompt.
To exit type `.exit` and enter



