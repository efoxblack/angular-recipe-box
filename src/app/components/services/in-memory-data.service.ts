import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const recipes = [
      {mealId: '52860', strMeal: 'Chocolate Raspberry Brownies', strInstructions: 'Heat oven to 180C\/160C fan\/gas 4. Line a 20 x 30cm baking tray tin with baking parchment. Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat.\r\nStir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days.'},
      {mealId: '53015', strMeal: 'Krispy Kreme Donut', srtInstructions: 'Dissolve yeast in warm water in 2 1\/2-quart bowl. Add milk, sugar, salt, eggs, shortening and 2 cups flour. Beat on low for 30 seconds, scraping bowl constantly. Beat on medium speed for 2 minutes, scraping bowl occasionally. Stir in remaining flour until smooth. Cover and let rise until double, 50-60 minutes. (Dough is ready when indentation remains when touched.) Turn dough onto floured surface; roll around lightly to coat with flour. Gently roll dough 1\/2-inch thick with floured rolling pin. Cut with floured doughnut cutter. Cover and let rise until double, 30-40 minutes.\r\nHeat vegetable oil in deep fryer to 350\u00b0. Slide doughnuts into hot oil with wide spatula. Turn doughnuts as they rise to the surface. Fry until golden brown, about 1 minute on each side. Remove carefully from oil (do not prick surface); drain. Dip the doughnuts into creamy glaze set on rack.\r\n\r\n\r\nGlaze: \r\nHeat butter until melted. Remove from heat. Stir in powdered sugar and vanilla until smooth. Stir in water, 1 tablespoon at a time, until desired consistency.'},
      {mealId: '52857', strMeal: 'Pumpkin Pie', srtInstructions: 'Place the pumpkin in a large saucepan, cover with water and bring to the boil. Cover with a lid and simmer for 15 mins or until tender. Drain pumpkin; let cool.\r\nHeat oven to 180C\/160C fan\/gas 4. Roll out the pastry on a lightly floured surface and use it to line a 22cm loose-bottomed tart tin. Chill for 15 mins. Line the pastry with baking parchment and baking beans, then bake for 15 mins. Remove the beans and paper, and cook for a further 10 mins until the base is pale golden and biscuity. Remove from the oven and allow to cool slightly.\r\nIncrease oven to 220C\/200C fan\/gas 7. Push the cooled pumpkin through a sieve into a large bowl. In a separate bowl, combine the sugar, salt, nutmeg and half the cinnamon. Mix in the beaten eggs, melted butter and milk, then add to the pumpkin pur\u00e9e and stir to combine. Pour into the tart shell and cook for 10 mins, then reduce the temperature to 180C\/160C fan\/gas 4. Continue to bake for 35-40 mins until the filling has just set.\r\nLeave to cool, then remove the pie from the tin. Mix the remaining cinnamon with the icing sugar and dust over the pie. Serve chilled.' }
    ]
    return {recipes};
  }

  constructor() { }
}
