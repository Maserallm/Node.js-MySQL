DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products
(
    id INT(25)
    AUTO_INCREMENT NOT NULL,
product_name VARCHAR
    (100) NOT NULL,
department_name VARCHAR
    (50) NOT NULL,
price_consumer DECIMAL
    (10, 2) NOT NULL,
stock_quantity INT
    (30) NOT NULL,
PRIMARY KEY
    (id)
);

    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('MacBook Pro', 'Electronics', '1299', '10000');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('77in 4K UHD Samsung TV', 'Electronics', '1199', '1000');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('Apple HomePod', 'Electronics', '299.99', '500');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('Design Essentials Shampoo', 'Health and Body Care', '6.99', '5000');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('Shea Moisture African Black Soap', 'Health and Body Care', '4.99', '2000');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('Bamazon 10lb Medicine Ball', 'Fitness and Exercise', '9.99', '1000');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('Google Home Mini', 'Electronics', '49.99', '5000');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('Bamazon Sit and Stand Adjustable Desk', 'Furniture', '299', '500');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('JavaScript Essentials', 'Books', 'avg.99', '5000');
    INSERT INTO products
        (product_name, department_name, price_consumer, stock_quantity)
    VALUES
        ('Northface Hiking Backpack', 'Accessories', '49.99', '1000');

    CREATE TABLE departments
    (
        department_id INT
        AUTO_INCREMENT NOT NULL,
    department_name TEXT NOT NULL,
    over_head_cost DECIMAL
        (10, 2) NOT NULL,
    primary key
        (department_id)
);

        INSERT INTO departments
            (department_name, over_head_cost)
        values
            ('Electronics', '100000');
        INSERT INTO departments
            (department_name, over_head_cost)
        values
            ('Health and Body Care', '20000');
        INSERT INTO departments
            (department_name, over_head_cost)
        values
            ('Books', '10000');
        INSERT INTO departments
            (department_name, over_head_cost)
        values
            ('Furniture', '50000');
        INSERT INTO departments
            (department_name, over_head_cost)
        values
            ('Fitness and Exercise', '100000');
        INSERT INTO departments
            (department_name, over_head_cost)
        values
            ('Accessories', 20000);

