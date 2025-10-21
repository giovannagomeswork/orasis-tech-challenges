# SCENARIOS.md

```markdown
# Test Scenarios for nopCommerce Admin Demo

## Authentication Scenarios

### Scenario: Successful Login
**Given** the user is on the login page  
**When** the user enters valid credentials  
**Then** the user should be redirected to the dashboard  

### Scenario: Unsuccessful Login
**Given** the user is on the login page  
**When** the user enters invalid credentials  
**Then** an error message should be displayed  

### Scenario: Logout
**Given** the user is logged in  
**When** the user clicks on the logout button  
**Then** the user should be redirected to the login page  

## Navigation Scenarios

### Scenario: Access Dashboard
**Given** the user is logged in  
**When** the user navigates to the dashboard  
**Then** the dashboard should be displayed  

### Scenario: Access Customers Page
**Given** the user is logged in  
**When** the user navigates to the customers page  
**Then** the customers list should be displayed  

## Customer Management Scenarios

### Scenario: Create a New Customer
**Given** the user is on the customers page  
**When** the user fills in the customer form with valid data  
**And** submits the form  
**Then** the new customer should be listed in the customers list  

### Scenario: Edit an Existing Customer
**Given** the user is on the customers page  
**When** the user selects a customer to edit  
**And** updates the customer information  
**Then** the updated information should be reflected in the customers list  

### Scenario: Delete a Customer
**Given** the user is on the customers page  
**When** the user selects a customer to delete  
**And** confirms the deletion  
**Then** the customer should no longer be listed  

## Order Management Scenarios

### Scenario: View Orders
**Given** the user is on the orders page  
**When** the user views the list of orders  
**Then** the orders should be displayed with relevant details  

### Scenario: Filter Orders
**Given** the user is on the orders page  
**When** the user applies filters to the orders list  
**Then** the displayed orders should match the applied filters  

## Product Management Scenarios

### Scenario: Add a New Product
**Given** the user is on the products page  
**When** the user fills in the product form with valid data  
**And** submits the form  
**Then** the new product should be listed in the products list  

### Scenario: Edit a Product
**Given** the user is on the products page  
**When** the user selects a product to edit  
**And** updates the product information  
**Then** the updated information should be reflected in the products list  

## Export Scenarios

### Scenario: Export Customers to CSV
**Given** the user is on the customers page  
**When** the user clicks on the export button  
**Then** a CSV file should be downloaded containing the customer data  

## Error Handling Scenarios

### Scenario: Handle Empty State
**Given** the user is on the customers page  
**When** there are no customers available  
**Then** a message indicating "No customers found" should be displayed  

### Scenario: Validation Error on Customer Creation
**Given** the user is on the customer creation form  
**When** the user submits the form with invalid data  
**Then** validation messages should be displayed for the required fields  
```