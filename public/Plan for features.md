# isPurchased feature implementation

Overview
A feature allowing shared users to mark products as purchased while hiding this functionality from the wishlist owner. This feature will be implemented across two main views while ensuring proper access control.

# Access Controls
# Wishlist Owner

Cannot see or interact with purchase status toggles
Retains access to edit and delete functionality
Views products without purchase indicators

# Shared Users

- Can toggle purchase status of products
- Cannot access edit or delete functions
- Can view purchase status of all products

# Implementation Locations

1. WishlistProductListContainer (List View)
Add purchase toggle for shared users
Hide edit/delete buttons for shared users
Show purchase status indicator
Implement permission checks

2. WishlistProductContainer (Single Product View)
Add purchase toggle for shared users
Hide edit/delete controls for shared users
Show purchase status indicator
Implement permission checks

# Data Flow
- User toggles purchase status
- Send PATCH request to API
- Update UI to reflect changes
- Handle success/error states
- Refresh product data if needed

# API Requirements
Endpoint: PATCH /api/products/{productId}
Payload: isPurchased status
Authentication required
Proper error handling

# Share Wishlist via email function

