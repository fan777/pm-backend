CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1)
);

CREATE TABLE portfolios (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  cash DECIMAL(10,2) DEFAULT '0.00' NOT NULL,
  notes TEXT,
  username VARCHAR(25) 
    REFERENCES users ON DELETE CASCADE
);

CREATE TABLE stocks (
  symbol VARCHAR(25) PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE holdings (
  portfolio_id INTEGER
    REFERENCES portfolios ON DELETE CASCADE,
  symbol VARCHAR(25)
    REFERENCES stocks ON DELETE CASCADE,
  shares_owned DECIMAL,
  cost_basis DECIMAL,
  target_percentage DECIMAL,
  goal TEXT,
  PRIMARY KEY (portfolio_id, symbol)
);

CREATE TABLE watchlist (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25)
    REFERENCES users ON DELETE CASCADE,
  symbol VARCHAR(25)
    REFERENCES stocks ON DELETE CASCADE
)