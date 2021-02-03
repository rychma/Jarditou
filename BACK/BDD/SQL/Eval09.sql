SELECT (orders.OrderDate) AS 'Date de derniere commande'
FROM orders
INNER JOIN customers
ON customers.CustomerID = orders.CustomerID
WHERE customers.CompanyName = 'Du monde entier'
ORDER BY orders.OrderDate DESC 
LIMIT 1