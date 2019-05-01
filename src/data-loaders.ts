import { Ingredient } from "./models/ingredient";
import { baseUrl } from "./config";

export const loadIngredients = (): Promise<Ingredient[]> => {
  return fetch(`${baseUrl}/salad.json`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data.items;
    });
};
