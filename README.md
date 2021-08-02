# hotel-Offers

Hotel Offers Backend

Node.js, Express.js, MongoDB, Mongo Express, Mongoose Migrate, Docker e Swagger

## Install

git clone https://dionmaicon@bitbucket.org/dionmaicon/hotel-offers.git

Requirements:
- docker-compose

After clone this repository, install dependencies in backend folder
``` bash
cd hotel-offers/backend && npm install
```

Go back to root folder and run docker-compose
``` bash
docker-compose up
```

## Migrate / Seed

After, with the service up. Run the migrations (Seeders).

``` bash
docker exec -it hotel-offers_api_1 migrate up
```

# Use
Backend server Node.js.

I left all the services open. No authentication is required.

Mongo Express Running: http://localhost:8050
Express Running: http://localhost:3000/v1/hotel-offers
Swagger UI: http://localhost:3000/doc
