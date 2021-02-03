SELECT SUM(`order details`.`Quantity` * `order details`.`UnitPrice`) AS 'Montant Ventes 97'

FROM `order details`

INNER JOIN `orders` ON orders.OrderID = `order details`.`OrderID`

WHERE orders.OrderDate LIKE '1997%'
