SELECT (suppliers.CompanyName) AS 'Fournisseur', (COUNT(products.SupplierID)) AS 'Nbre produits'
FROM suppliers
INNER JOIN products ON products.SupplierID = suppliers.SupplierID
WHERE (suppliers.Country LIKE 'France')
GROUP BY suppliers.CompanyName 
HAVING COUNT(products.ProductID)
ORDER BY COUNT(products.ProductID) DESC 