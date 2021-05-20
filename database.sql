CREATE DATABASE `sales_managment_system`;

CREATE TABLE `salespersons`
(
 	salesperson_id integer(5) NOT NULL,
 	first_name varchar(30) NOT NULL,
 	last_name varchar(30) NOT NULL,
 	email varchar(320) NOT NULL,
 	password varchar(80) NOT NULL,
 	gender varchar(6),
 	phone_number varchar(30),
    birth_date datetime,
    country varchar(30),
    city varchar(30),
    town varchar(30),
    postal_code varchar(10),
    img LONGBLOB,
    UNIQUE (phone_number),
    UNIQUE (email),
 	PRIMARY KEY(salesperson_id)
);

CREATE TABLE `customers`
(
 	customer_id integer(5) NOT NULL,
 	first_name varchar(30) NOT NULL,
 	last_name varchar(30) NOT NULL,
 	email varchar(320) NOT NULL,
    gender varchar(6) NOT NULL,
 	company varchar(30) NOT NULL,
    phone_number varchar(30) NOT NULL,
    birth_date datetime NOT NULL,
    country varchar(30) NOT NULL,
    city varchar(30) NOT NULL,
    town varchar(30) NOT NULL,
    postal_code varchar(10) NOT NULL,
    img LONGBLOB,
    UNIQUE (phone_number),
    UNIQUE (email),
    PRIMARY KEY(customer_id)
);

CREATE TABLE `add_`
(
 	salesperson_id integer(5) NOT NULL,
 	customer_id integer(5) NOT NULL,
 	FOREIGN KEY (salesperson_id) REFERENCES salespersons(salesperson_id),
 	FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
 	PRIMARY KEY (salesperson_id, customer_id)
);

CREATE TABLE `services`
(
 	service_id integer(5) NOT NULL,
 	title	 varchar(30) NOT NULL,
 	description text NOT NULL,
 	category varchar(30) NOT NULL,
    price decimal(10,2) NOT NULL,
    PRIMARY KEY(service_id)
);

CREATE TABLE `interest_`
(
 	service_id integer(5) NOT NULL,
 	customer_id integer(5) NOT NULL,
 	FOREIGN KEY (service_id) REFERENCES services(service_id),
 	FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
 	PRIMARY KEY (service_id, customer_id)
);

CREATE TABLE `products`
(
 	product_id integer(5) NOT NULL,
 	title	 varchar(30) NOT NULL,
 	description text NOT NULL,
 	category varchar(30) NOT NULL,
    price  decimal(10,2) NOT NULL,
    PRIMARY KEY(product_id)
);

CREATE TABLE `like_`
(
 	product_id integer(5) NOT NULL,
 	customer_id integer(5) NOT NULL,
 	FOREIGN KEY (product_id) REFERENCES products(product_id),
 	FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
 	PRIMARY KEY (product_id, customer_id)
);

CREATE TABLE `orders`
(
	order_id integer(5) NOT NULL,
	customer_id integer(5) NOT NULL,
	created_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	order_status varchar(11) NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
	PRIMARY KEY (order_id)
);

CREATE TABLE `orderItem`
(
	order_id integer(5) NOT NULL,
	item_type varchar(7) NOT NULL,
	item_name varchar(7) NOT NULL,
	item_count integer(5) NOT NULL,
	item_price decimal(10,2),
	FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
);

CREATE TABLE `bills`
(
	bill_id integer(5) NOT NULL,
	order_id integer(5) NOT NULL,
	salesperson_id integer(5) NOT NULL,
	total_price decimal(10,2),
	generated_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
	FOREIGN KEY (salesperson_id) REFERENCES salespersons(salesperson_id),
	PRIMARY KEY (bill_id)
);

CREATE TABLE `visits`
(
	visit_id integer(5) NOT NULL,
	customer_id integer(5) NOT NULL,
	title varchar(30) NOT NULL,
	location varchar(320) NOT NULL,
    customer_phone_number varchar(30) NOT NULL,
	start_time datetime NOT NULL,
	end_time datetime NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
	PRIMARY KEY (visit_id)
);