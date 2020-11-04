-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select 
    p.productname as 'Product Name',
    c.categoryname as 'Category'
from Product as p
join Category as c
    on p.categoryid = c.id



-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select 
    [order].id, 
    s.companyname
from [order]
join shipper as s
    on [order].shipvia = s.id

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select 
    o.quantity,
    p.productname
from orderdetail as o
join product as p
    on p.id = o.ProductId
where o.OrderId = 10251
order by p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select 
    [order].id, 
    [order].shipname, 
    e.lastname
from [order]
join employee as e
    on e.id = [order].EmployeeId