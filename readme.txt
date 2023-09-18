Question 2

Compile

Run `npm install` then `npm run start`.

How would I do it?

1. Create a Product Context Provider - Since the data in the PDP page are mostly related to each component and its functionality, 
I would create a Context Provider that will store the pre-loaded product data into a state. 
So that I can avoid drilling the data into each component and I can also reference the state values for the selected size and color upon adding it to the cart. 

We can also mutate the product data based on the selected color. 
What this mean is that, instead of reloading the page when we select a different color we can simply mutate the state product data after we fetch 
the new product data from the API and it will automatically update all the sizes, images, and price in the PDP without reloading it.

(**I wasn’t able to do it here yet since I only have one default product data.)

2. Create a centralized and standard styling across the site - creating a centralized and standard styling will improve the maintainability and consistency of the web design. 
In this sample react-app, I leveraged the styled-components library and its built-in Theme Provider. 

For example, in line 16 of ProductDetails.style.js, I referenced its font-family and font-size by using the variable `theme`. 
Inside this `theme` variable are styling objects that we can reference anywhere on the site. 
One benefit of having this is that we don't have to update each component styling if we decide to change the font or any design that affects multiple elements in the site. 


TODOs:

1. Pre-load/fetch the master product data - in the ProductPage.js run an API request to fetch the master product data and store it in a state. 

2. Change product available sizes and price if the user switches to a different color - in ColorSelector.js we can run an API request to fetch the new product data and update the information in the PDP.

3. Add to wish list - in the AddToWishList.js we can add an API request to add/remove the product to the wishlist.

4. Show a cross-out styling if the size is out-of-stock - add an out-of-stock logic in SizeSelector.js

5. Pricing - in ProductPricing.js add any logic that will render the correct pricing based on product data or promos.

6. Carousel - in Carousel.js we can add a 3rd party application that will render the carousel and this component should be able to cater to any type of carousel. 

7. Carousel Events - in ProductMedia.js add all the carousel events. 

8. Breadcrumbs - in Breadcrumb.js add a logic to render the breadcrumbs links.

9. Link redirects.

10. Add to Bag functionality.

11. Clean up styling - most of the styling here are a copy of the styling in the actual SHOWPO PDP so it needs to be cleaned.