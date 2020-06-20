export class Product {
  constructor(
      public  name: string,
      public  price: number,
      public  image: string,
      public  onsale: boolean,
      public  quantityInCart: number,
    ) {
    }
}
