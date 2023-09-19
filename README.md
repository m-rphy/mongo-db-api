# Mongo-db-API

This is a app includes a server and a mongo schema.

The schema is for a to do list app, but the app can easily
be refactored to accommodate other schemas. 

To connect your local Mongo DB instance to this API

For Mac:
you'll want to have brew installed. Then you can run 

`brew tap mongodb/brew`

Then

`brew install mongodb-community@latest`

Once this is complete, run 

`brew services start mongo-community`

This will start the local db instance.
Once your mongo db instance is running,
you can get the URI by running

`mongosh`

The URI will start with 'mongodb://127.0.0.1...'

This will bring to a new command line prompt.
To exit type `.exit` and enter



