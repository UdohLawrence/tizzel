import {hashSync} from 'bcrypt-ts-edge'

const sampleData = {
  users: [
    {
      name: 'Ekomobong',
      email: 'ekomobong001@gmail.com',
      password: hashSync('nuuh7224', 10),
      role: 'admin'
    },
    {
      name: 'Etimbuk',
      email: 'etimbuklawrenceudoh@gmail.com',
      password: hashSync('nuuh7224', 10),
      role: 'user'
    }
  ],
  products: [
    {
      name: "High Resolution Camera",
      slug: "high-resolution-camera",
      description: "Take the best pictures, even under poor lighting",
      category: "Electronics",
      subCategory: "Cameras",
      images: [
        "/images/samples/camera1.jpg",
        "/images/samples/camera2.jpg"
      ],
      price: 35.67,
      brand: "Nikon",
      rating: 4,
      numReviews: 7,
      stock: 35,
      isFeatured: true,
      banner: ""
    },
    {
      name: 'Long Sleeved Shirt',
      slug: 'long-sleeved-shirt',
      category: 'Clothing',
      subCategory: "Men's Dress Shirts",
      description: 'Timeless style and premium comfort',
      images: [
        '/images/samples/p2-1.jpg',
        '/images/samples/p2-2.jpg',
      ],
      price: 85.9,
      brand: 'Brooks Brothers',
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: '',
    },
    {
      name: "High Fidelity Headphones",
      slug: "high-fidelity-headphones",
      description: "Listen to your music with noise cancelling effects",
      category: "Electronics",
      subCategory: "Headphones",
      images: [
        "/images/samples/headphone1.jpg",
        "/images/samples/headphone2.jpg"
      ],
      price: 15.23,
      brand: "Behringer",
      rating: 3,
      numReviews: 47,
      stock: 5,
      isFeatured: true,
      banner: ""
    },
    {
      name: "Home Theater System",
      slug: "home-theater-syatem",
      description: "Listen to your music with noise cancelling effects",
      category: "Electronics",
      subCategory: "Home Theater",
      images: [
        "/images/samples/homeTheater1.jpg",
        "/images/samples/homeTheater2.jpg"
      ],
      price: 55.97,
      brand: "LG",
      rating: 5,
      numReviews: 147,
      stock: 45,
      isFeatured: true,
      banner: ""
    },
    {
      name: "UK Used I-Phone",
      slug: "uk-used-iphone",
      description: "Phones you can trust",
      category: "Electronics",
      subCategory: "Mobile Phones",
      images: [
        "/images/samples/iPhone1.jpg",
        "/images/samples/iPhone2.jpg"
      ],
      price: 15.23,
      brand: "Apple",
      rating: 3,
      numReviews: 47,
      stock: 5,
      isFeatured: true,
      banner: ""
    },
    {
      name: "Apple MacBook Pro",
      slug: "macbook-pro-laptop",
      description: "Satisfy all your computing needs",
      category: "Electronics",
      subCategory: "Laptop/Computers",
      images: [
        "/images/samples/laptop1.jpg",
        "/images/samples/laptop2.jpg",
        "/images/samples/laptop3.jpg",
        "/images/samples/laptop4.jpg"
      ],
      price: 15.23,
      brand: "Apple MacBook",
      rating: 3,
      numReviews: 47,
      stock: 5,
      isFeatured: true,
      banner: ""
    },
    {
      name: "Tablet Phones",
      slug: "tablet-phones",
      description: "Move around with your most important files",
      category: "Electronics",
      subCategory: "Tablets",
      images: [
        "/images/samples/tablet1.jpg",
        "/images/samples/tablet2.jpg"
      ],
      price: 15.23,
      brand: "Android",
      rating: 3,
      numReviews: 47,
      stock: 5,
      isFeatured: true,
      banner: ""
    },
    {
      name: "Hisense Smart Television",
      slug: "highsense-smart-television",
      description: "Crystal clear motion pictures",
      category: "Electronics",
      subCategory: "Television",
      images: [
        "/images/samples/television1.jpg",
        "/images/samples/television2.jpg"
      ],
      price: 15.23,
      brand: "Hisense",
      rating: 3,
      numReviews: 47,
      stock: 5,
      isFeatured: true,
      banner: ""
    }
  ]
}

export default sampleData;