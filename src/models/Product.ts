export type Product = {
  id: string;
  price: number;
  description: string;
  hasPreviousPrice: boolean;
  previousPrice?: number;
  image: string;
  score: number;
  amountOfRatings: number;
};
