SELECT
	customers.CompanyName AS 'Client',
	customers.Country AS 'Pays',
	SUM(`order details`.UnitPrice * `order details`.Quantity) AS 'CA'
FROM ((customers	 
	INNER JOIN orders ON orders.CustomerID = customers.CustomerID)
	INNER JOIN `order details` ON `order details`.OrderID = orders.OrderID)
GROUP BY customers.CustomerID
HAVING CA > 30000 
ORDER BY CA  DESC  
;