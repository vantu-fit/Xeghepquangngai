export interface Price {
  price: number;
  priceOne: number;
  type: string;
  from: string;
  to: string;
  _id?: string;
  createdAt?: string;
}
export interface Post {
  title: string;
  content: string;
  _id?: string;
  date?: Date;
  image : string 
  location?: string
}

export interface PriceForm {
  _id? : string 
  price: number;
  priceOne: number;
  type: string;
  from: string;
  to: string;
  createdAt?: string;
}