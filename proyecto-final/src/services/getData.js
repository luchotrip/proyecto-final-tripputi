const data =
  [
    {
      "id": 1,
      "name": "Almond Toe Court Shoes, Patent Black",
      "category": "Womens Footwear",
      "price": 99.00,
      "stock": 5
    },
    {
      "id": 2,
      "name": "Suede Shoes, Blue",
      "category": "Womens Footwear",
      "price": 42.00,
      "stock": 4
    },
    {
      "id": 3,
      "name": "Leather Driver Saddle Loafers, Tan",
      "category": "Mens Footwear",
      "price": 34.00,
      "stock": 12
    },
    {
      "id": 4,
      "name": "Flip Flops, Red",
      "category": "Mens Footwear",
      "price": 19.00,
      "stock": 6
    },
    {
      "id": 5,
      "name": "Flip Flops, Blue",
      "category": "Mens Footwear",
      "price": 19.00,
      "stock": 0
    },
    {
      "id": 6,
      "name": "Gold Button Cardigan, Black",
      "category": "Womens Casualwear",
      "price": 167.00,
      "stock": 6
    },
    {
      "id": 7,
      "name": "Cotton Shorts, Medium Red",
      "category": "Womens Casualwear",
      "price": 30.00,
      "stock": 5
    },
    {
      "id": 8,
      "name": "Fine Stripe Short Sleeve￼Shirt, Grey",
      "category": "Mens Casualwear",
      "price": 49.99,
      "stock": 9
    },
    {
      "id": 9,
      "name": "Fine Stripe Short Sleeve￼Shirt, Green",
      "category": "Mens Casualwear",
      "price": 49.99,
      "offer": 39.99,
      "stock": 9
    },
    {
      "id": 10,
      "name": "Sharkskin Waistcoat, Charcoal",
      "category": "Mens Formalwear",
      "price": 75.00,
      "stock": 2
    },
    {
      "id": 11,
      "name": "Lightweight Patch Pocket￼Blazer, Deer",
      "category": "Mens Formalwear",
      "price": 175.50,
      "stock": 1
    },
    {
      "id": 12,
      "name": "Bird Print Dress, Black",
      "category": "Womens Formalwear",
      "price": 270.00,
      "stock": 10
    },
    {
      "id": 13,
      "name": "Mid Twist Cut-Out Dress, Pink",
      "category": "Womens Formalwear",
      "price": 540.00,
      "stock": 5
    },
  ];

export function getData(categoryId){
  const items = data.filter(item => item.category == categoryId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.length > 0 ? items : data);
    }, 2000)
  });
}

export function getItem(id){
  const item = data.filter(item => item.id == id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item[0]);
    }, 2000)
  });
}
