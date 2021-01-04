# IsValid test

Install reference backend project, start and test

````
  npm install
  npm start
````

# Return validation send post

````
  curl --location --request POST 'http://localhost:5000/api/isvalid' \
--header 'Content-Type: application/json' \
--data-raw '{
    "value": "AbTp9!fok"
}'
````

# Run test coverage

````
  npm test
````

# The project uses three types of regex

````
  Nine or more characters
  At least 1 digit
  At least 1 lowercase letter
  At least 1 capital letter
  At least 1 special character
  Consider the following characters as special:! @ # $% ^ & * () - +
   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()-+]).{9,}$/

   Do not have repeated characters within the set
   /(.)(?=.*\1)/

   validation space 
   /[\n# $&:\n\t]/
````
