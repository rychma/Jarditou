SELECT 
        MONTH(orders.OrderDate) AS 'Mois 97', 
        SUM(`order details`.UnitPrice * `order details`.Quantity) AS 'Montant Ventes'

FROM `order details`

INNER JOIN orders

ON orders.OrderID = `order details`.OrderID

WHERE `orders`.`OrderDate` LIKE '1997%'

GROUP BY `Mois 97`
