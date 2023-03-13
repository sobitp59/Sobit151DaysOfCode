import React from 'react'

const cookbook = [
    {
      id: 1,
      name: "Chocolate Chip Cookies",
      ingredients: ["2 1/4 cups all-purpose flour", "1 tsp baking soda", "1 tsp salt", "1 cup unsalted butter, at room temperature", "3/4 cup white sugar", "3/4 cup brown sugar", "2 eggs", "2 tsp vanilla extract", "2 cups semisweet chocolate chips"],
      instructions: "1. Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper. \n2. In a medium bowl, whisk together the flour, baking soda, and salt. \n3. In a large bowl, beat together the butter, white sugar, and brown sugar until light and fluffy. Add the eggs, one at a time, beating well after each addition. Stir in the vanilla extract. \n4. Gradually stir in the flour mixture until just combined. Stir in the chocolate chips. \n5. Drop dough by rounded tablespoons onto the prepared baking sheet, spacing them about 2 inches apart. \n6. Bake for 10-12 minutes, or until the edges are lightly golden. Allow the cookies to cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely."
    },
    {
      id: 2,
      name: "Chicken Parmesan",
      ingredients: ["4 boneless, skinless chicken breasts", "1 cup Italian breadcrumbs", "1/2 cup grated Parmesan cheese", "1/2 cup all-purpose flour", "2 eggs, beaten", "1 cup marinara sauce", "1 cup shredded mozzarella cheese", "1/4 cup chopped fresh basil"],
      instructions: "1. Preheat oven to 375°F (190°C). \n2. In a shallow dish, combine the breadcrumbs and Parmesan cheese. Place the flour in a separate shallow dish, and beat the eggs in a third shallow dish. \n3. Dip each chicken breast in the flour, shaking off any excess, then dip it in the egg mixture, and finally coat it in the breadcrumb mixture. Place the chicken on a baking sheet lined with parchment paper. \n4. Bake for 25-30 minutes, or until the chicken is cooked through and the coating is golden brown. \n5. Spoon marinara sauce over the chicken and sprinkle with mozzarella cheese. Return the chicken to the oven and bake for an additional 5-10 minutes, or until the cheese is melted and bubbly. \n6. Garnish with chopped fresh basil before serving."
    },]

const Cookbook = () => {
  return (
    <div>
        <h2>cookbook</h2>
        <ul>
            {cookbook.map(({id, name, ingredients, instructions}) => {
                return <li id={id}>
                        <h3>{name}</h3>
                        <h4>ingredients</h4>
                        {ingredients.map(ingredient => <p>{ingredient}</p> )}
                        <h4>instructions</h4>
                        {instructions.split('\n').map(instruction => <p>{instruction}</p> )}
                      </li>
            })}
        </ul>
    </div>
  )
}

export default Cookbook;

// 10. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, name, ingredients, and instructions. Write a React component that takes the array of recipes as input and generates an ordered list of recipes, where each list item displays the recipe's name, ingredients, and instructions. Data has been provided below for this questions.