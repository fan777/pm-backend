# Capstone-2 : Portfolio Manager (backend)

This is the landing page for the backend project. The frontend project is located at [pm-fronted](https://github.com/fan777/pm-frontend)

Demo @ https://unkempt-expansion.surge.sh/

---

## Table of Contents
- [1. About The Project](#about-the-project)
- [2. Objectives](#objectives)
- [3. Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Known Issues](#known-issues)
- [4. Schema](#schema)
- [5. User Flow](#user-flow)
- [6. Data](#data)
- [7. Additional Resources](#additional-resources)
- [8. Future Considerations](#future-considerations)


---

## About The Project

A portfolio manager to organize your invesments and determine whether your current allocations are in line with your targets. This project is the backend Node.js storing portfolio information and delivering stock data as API.

## Objectives

* Establish database, schema, and sample data for a stock portfolio
* Establish accessibility of backend portfolio information to frontend
* Establish API for frontend from external API for detailed stock information

## Getting Started
  * ### Prerequisites
    * PostgreSQL
    * NodeJS
    * Express
  
  * ### Installation
    * Clone repository
    * Run pm.sql (create database and load seed data)
    * npm to install dependencies

## Schema
  * Users table: contains username, password, email
  * Portfolios table: contains postfolio id, name, cash, notes for each user
  * Watchlist table: contains username and watched stock symbols
  * Holdings table: contains holding id, symbol, shares owned, etc for each portfolio

 ## User Flow

  * ### Homepage
    1. On unauthenticated entry page, user is presented with major US indices and trending symbols
    2. On authenticated entry page, user is presented with owned portfolios along with data from #1

  * ### Search
    1. The user may search for individual stocks, companies, news from search toolbar
    2. Results are presented and separated by type of security found
  
  * ### Detailed Symbol View
    1. Clicking on a ticker symbol will display a detailed view of the stock
    2. Chart is dynamically generated from API data
    3. Related symbols along with stock details (earnings, dividends, etc) are displayed
    4. If authenticated, a user may click on the * to add to watchlist

  * ### Portfolio
    1. From authenticated home page, a user may create a new portfolio
    2. The authenticated home page displays a summarized list of portfolios created by a user
    3. Clicking on a portfolio will display more details regarding the holdings within it
    4. The single portfolio page allows for deletion and update of portfolio
    5. The single portfolio page allows for adding, removing, and updating holdings

## Data
  * [node-yahoo-finance2](https://github.com/gadicc/node-yahoo-finance2)

## Future Considerations

The backend is based on another assignment and can be re-designed to better fit this application.