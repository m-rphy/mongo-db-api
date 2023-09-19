# Mongo-db-API

This is a app includes a server and a mongo schema.

The schema is for a to do list app, but the app can easily
be refactored to accommodate other schemas. 

## Setup

### Get local Mongo DB instance: (For Mac)
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

## Get Keys and Certs for HTTPS protocol

In the app's root directory, make a new folder titled
"certs" and cd into it.

This is where the self-signed certificates will go.

NOTE - Self signed certificates are not for production
       environments!

You will first need to get openssl, so run:

`brew install openssl` 

Then you can generate the key file with:

`openssl genrsa -out key.pem`

and the certificate service request (CSR)
(The CSR is used to provide all the inputs required
create the actual certificate)

`openssl req -new -key key.pem -out csr.pem`

You'll be asked so questions, answer them honestly
and then create the certificate with:

`openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -our cert.pem`

At this point the app should be up and running!

## Best Practices

Be sure to put your Mongo URI in a .env file.
If you named place your HTTPS certs and keys
if a different folder that `certs` or named them
something other than what is named in .gitignore
be sure to update the .gitignore

