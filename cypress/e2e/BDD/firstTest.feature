Feature: Greencart End to End scenario

    @smoke
    Scenario Outline: Verify the user is able to place the order for multiple products

        Given User navigate to Greencart webshop
        When Add the product to cart "<Product_1>"
        When Add the product to cart "<Product_2>"
        Then Click cart link
        Then Click the proceed to checkout link
        Then Click Place order on cart page
        Then Select the country India in select country dropdown
        Then Check the Agree terms and condition checkbox
        Then Click the Proceed button
        Then Verify the Thank you place the order message is displayed

        Examples:
            | Product_1 | Product_2 |
            | Apple     | Carrot    |

