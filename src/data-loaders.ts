import { Ingredient } from "./models/ingredient";

export const loadIngredients = (): Promise<Ingredient[]> => {
  return fetch("salad.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data.items;
    });
};
