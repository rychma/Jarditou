SELECT (customers.CompanyName) AS 'Client', (COUNT(Orders.OrderId)) AS 'Nbre commandes' 
FROM customers
INNER JOIN orders ON orders.CustomerID = customers.CustomerID
WHERE (customers.Country LIKE 'France')
GROUP BY customers.CompanyName 
HAVING COUNT(Orders.OrderId) > 10