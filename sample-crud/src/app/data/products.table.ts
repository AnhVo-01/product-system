export class ProductsTable {
  public static products = [
    {
      id: 1,
      name: 'Power Bank',
      image: 'https://m.media-amazon.com/images/I/61kgxjWJ17L._AC_SY450_.jpg',
      quantity: 1,
      price: 130,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 2,
      name: 'Tablet',
      image: 'https://m.media-amazon.com/images/I/71nJxwi2gYL._AC_SY450_.jpg',
      quantity: 7,
      price: 399,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 3,
      name: 'VTech Switch and Go 3-in-1 Rescue Rex',
      image: 'https://m.media-amazon.com/images/I/61taSAJfRWL._AC_SX679_.jpg',
      quantity: 157,
      price: 43,
      category: {
        id: 2,
        categoryName: 'Toy'
      }
    },
    {
      id: 4,
      name: 'Dog-E Interactive Robot Dog',
      image: 'https://m.media-amazon.com/images/I/510BINJ+NZL._AC_SX679_.jpg',
      quantity: 157,
      price: 43,
      category: {
        id: 2,
        categoryName: 'Toy'
      }
    },
    {
      id: 5,
      name: 'Lego',
      image: 'https://m.media-amazon.com/images/I/81oFahIGTaL._AC_SX679_.jpg',
      quantity: 60,
      price: '35',
      category: {
        id: 2,
        categoryName: 'Toy'
      }
    },
    {
      id: 6,
      name: "T-Shirt",
      quantity: 100,
      price: 5,
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 7,
      name: "Jeans",
      quantity: 50,
      price: 20,
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 8,
      name: "Maxi dress",
      quantity: 75,
      price: 12,
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 9,
      name: "Phone",
      quantity: 20,
      price: 920,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 10,
      name: "Laptop",
      quantity: 15,
      price: 890,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 11,
      name: "Product 1",
      quantity: 10,
      price: 25.99,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 12,
      name: "Product 2",
      quantity: 15,
      price: 19.99,
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 13,
      name: "Product 3",
      quantity: 20,
      price: 12.49,
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 14,
      name: "Product 4",
      quantity: 5,
      price: 49.99,
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 15,
      name: "Product 5",
      quantity: 30,
      price: 9.99,
      category: {
        id: 4,
        categoryName: 'Education'
      }
    },
    {
      id: 16,
      name: "Product 6",
      quantity: 25,
      price: 34.99,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 17,
      name: "Product 7",
      quantity: 8,
      price: 29.99,
      category: {
        id: 6,
        categoryName: 'Sport'
      }
    },
    {
      id: 18,
      name: "Product 8",
      quantity: 12,
      price: 39.99,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 19,
      name: "Product 9",
      quantity: 18,
      price: 15.99,
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 20,
      name: "Product 10",
      quantity: 22,
      price: 8.99,
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 21,
      name: "Product 11",
      quantity: 7,
      price: 59.99,
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 22,
      name: "Product 12",
      quantity: 14,
      price: 17.49,
      category: {
        id: 4,
        categoryName: 'Education'
      }
    },
    {
      id: 23,
      name: "Product 13",
      quantity: 28,
      price: 45.99,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 24,
      name: "Product 14",
      quantity: 9,
      price: 19.99,
      category: {
        id: 6,
        categoryName: 'Sport'
      }
    },
    {
      id: 25,
      name: "Product 15",
      quantity: 16,
      price: 29.99,
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 26,
      name: "Product 16",
      quantity: 21,
      price: 12.99,
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 27,
      name: "Product 17",
      quantity: 11,
      price: 14.99,
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 28,
      name: "Product 18",
      quantity: 26,
      price: 7.99,
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 29,
      name: "Product 19",
      quantity: 6,
      price: 39.99,
      category: {
        id: 4,
        categoryName: 'Education'
      }
    },
    {
      id: 30,
      name: "Product 20",
      quantity: 17,
      price: 22.49,
      category: {
        id: 6,
        categoryName: 'Sport'
      }
    },
    {
      id: 31,
      name: "Bluetooth headphone",
      quantity: 30,
      price: '200',
      category: {
        id: 1,
        categoryName: 'Technology'
      }
    },
    {
      id: 32,
      name: "Shoes",
      quantity: 30,
      price: '48',
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 33,
      name: "Book",
      quantity: 50,
      price: '3.7',
      category: {
        id: 4,
        categoryName: 'Education'
      }
    },
    {
      id: 34,
      name: "Notebook",
      quantity: 100,
      price: '1.5',
      category: {
        id: 4,
        categoryName: 'Education'
      }
    },
    {
      id: 35,
      name: "TV",
      quantity: 760,
      price: '464',
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 36,
      name: "Fridge",
      quantity: 150,
      price: '760',
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 37,
      name: "Washing machine",
      quantity: 100,
      price: '268',
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 38,
      name: "Air conditioner",
      quantity: 50,
      price: '199.6',
      category: {
        id: 5,
        categoryName: 'Houseware'
      }
    },
    {
      id: 39,
      name: "Pochette Métis East West Bag",
      quantity: 30,
      price: '3140',
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
    {
      id: 40,
      name: "OnTheGo MM Bag",
      quantity: 30,
      price: '3140',
      category: {
        id: 3,
        categoryName: 'Fashion'
      }
    },
  ]
}
