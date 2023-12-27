# Hotel API

Hotel Offers Backend

Node.js, Express.js, MongoDB, Mongo Express, Docker e Swagger

## Install

git clone https://github.com/dionmaicon/hotels-api.git

Requirements:
- docker-compose

After clone this repository, copy the `.env.development` to `.env` and run:
``` bash
docker-compose up
```

## Seed

To seed database run up. (Seeders).

``` bash
docker exec -it hotel-offers_api_1 npm run migrate:up
```
To delete run down
``` bash
docker exec -it hotel-offers_api_1 npm run migrate:down
```

# Use
Backend server Node.js.

All the services are open. No authentication is required.

Mongo Express Running: http://localhost:8050
Express Running: http://localhost:3000/v1/hotel-offers
Swagger UI: http://localhost:3000/doc
