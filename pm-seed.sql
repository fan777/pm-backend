INSERT INTO users(username, password, email)
VALUES ('cfan',
        'password',
        'test@test.com'),
        ('test',
        'password',
        'test1@test.com');

INSERT INTO portfolios (name, cash, notes, username)
VALUES ('active',
        1787.95,
        '',
        'cfan'),
      ('stable',
       10.62,
       '',
       'cfan'),
      ('test',
       0,
       'test notes',
       'test'
      );

INSERT INTO stocks (symbol, name)
VALUES ('ALLY','Ally Financial Inc'),
       ('EJFAW', 'EJF ACQUISITION C 26 WTF'),
       ('INTC', 'Intel Corporation'),
       ('SOFI', 'SoFi Technologies Inc'),
       ('VTI', 'Vanguard Total Stock Market Index Fund ETF'),
       ('VTV', 'Vanguard Value Index Fund ETF'),
       ('VUG', 'Vanguard Growth Index Fund'),
       ('VXF', 'Vanguard Extended Market Index Fund ETF'),
       ('VXUS', 'Vanguard Total International Stock Index Fund ETF'),
       ('QQQ', 'Invesco QQQ Trust Series 1'),
       ('AAPL', 'Apple Inc'),
       ('TSLA', 'Tesla Inc');

INSERT INTO holdings (portfolio_id, symbol, shares_owned, cost_basis, target_percentage, goal)
VALUES (1, 'ALLY', 20, 988.70, 0.1, 'HOLD'),
       (1, 'EJFAW', 300, 566.90, 0, 'SELL AT 3 - 5'),
       (1, 'INTC', 20, 1090.89, 0.1, 'HOLD'),
       (1, 'SOFI', 250, 5244.56, 0.55, 'HOLD'),
       (1, 'VTI', 0, 0, 0.25, 'BUY'),
       (2, 'VTI', 123.3962, 18626.94, 0.4, 'HOLD'),
       (2, 'VTV', 50.2929, 6381.13, 0.1, 'HOLD'),
       (2, 'VUG', 25.027, 6557.55, 0.1, 'HOLD'),
       (2, 'VXF', 73.1059, 11255.15, 0.2, 'HOLD'),
       (2, 'VXUS', 206.0241, 12117.98, 0.2, 'HOLD'),
       (3, 'QQQ', 10, 1000, 0.50, 'HOLD'),
       (3, 'AAPL', 0, 0, 0.25, 'BUY'),
       (3, 'TSLA', 0, 0, 0.25, 'BUY');
