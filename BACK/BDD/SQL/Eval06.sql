SELECT DISTINCT   orders.ShipCountry AS 'Pays'

FROM (((orders 
              INNER JOIN `order details` ON `order details`.OrderID = orders.OrderID)
	           INNER JOIN products ON products.ProductID = `order details`.`ProductID`)
	           INNER JOIN suppliers ON suppliers.SupplierID = products.SupplierID)

WHERE suppliers.CompanyName = "Exotic Liquids"

ORDER BY 1 ASC

