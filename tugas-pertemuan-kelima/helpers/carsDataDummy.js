const carsData = [
  {
    id: 1,
    name: 'Honda CR-V Hybrid',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2022/07/13102850/Honda-CR-V-generasi-terbaru_0.jpg',
    category: 'Honda',
    description: `The Honda CR-V Hybrid is a top-tier hybrid SUV that seamlessly combines eco-friendliness with high-performance engineering. Designed with the environment in mind, this hybrid vehicle offers an impressive fuel efficiency that reduces your carbon footprint and helps you save on fuel costs. Its hybrid powertrain, consisting of a gasoline engine and an electric motor, ensures a smooth and responsive drive.
    Inside the Honda CR-V Hybrid, you'll find a spacious and comfortable cabin designed to accommodate both driver and passengers with ease. Premium materials and thoughtful design elements enhance the overall driving experience, making it perfect for long journeys and daily commutes alike.

    Safety is a top priority for Honda, and the CR-V Hybrid is equipped with advanced safety features to keep you and your loved ones protected on the road. From adaptive cruise control to lane-keeping assist, this SUV is designed to provide peace of mind in various driving conditions.

    With ample cargo space and versatile seating options, the Honda CR-V Hybrid is well-suited for your active lifestyle. Whether you're heading out for a weekend adventure or simply running errands in the city, this hybrid SUV offers the versatility and reliability you need.

    Experience the future of automotive technology with the Honda CR-V Hybrid. It's not just a vehicle; it's a sustainable and stylish driving solution that makes a positive impact on the environment while delivering the performance and comfort you expect from Honda.`,
    qty: 5,
    price: 35000,
  },
  {
    id: 2,
    name: 'Mitsubishi XFC / Mitsubishi Xforce',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2022/10/20100514/mitsubishi-xfc-test-drive.jpg',
    category: 'Mitsubishi',
    description: 'The Mitsubishi XFC is a stylish and modern crossover SUV.',
    qty: 8,
    price: 30000,
  },
  {
    id: 3,
    name: 'KIA EV9',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/05/26202257/2024-kia-ev9.jpg',
    category: 'KIA',
    description: 'The KIA EV9 is an all-electric SUV with advanced technology.',
    qty: 3,
    price: 50000,
  },
  {
    id: 4,
    name: 'Maxus MIFA 9',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/01/17115354/mpv-mg-mifa-9.jpg',
    category: 'Maxus',
    description: 'The Maxus MIFA 9 is a spacious and versatile MPV.',
    qty: 6,
    price: 40000,
  },
  {
    id: 5,
    name: 'Citroen C3 Aircross',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/04/29174525/citroen-c3-aircross-tampak-depan.jpg',
    category: 'Citroen',
    description: 'The Citroen C3 Aircross is a compact and stylish SUV.',
    qty: 10,
    price: 25000,
  },
  {
    id: 6,
    name: 'SUV Daihatsu D66B',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2022/12/06145035/Perodua-Nexis-Photo.jpg',
    category: 'Daihatsu',
    description: 'The SUV Daihatsu D66B offers comfort and performance.',
    qty: 7,
    price: 30000,
  },
  {
    id: 7,
    name: 'Hyundai Ioniq 6',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2022/12/29175609/hyundai-ioniq-6-semakin-dekat-indonesia.jpg',
    category: 'Hyundai',
    description: 'The Hyundai Ioniq 6 is a futuristic electric sedan.',
    qty: 4,
    price: 40000,
  },
  {
    id: 8,
    name: 'Hyundai Stargazer X',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/06/23094805/pemesanan-stargazer-cross.jpg',
    category: 'Hyundai',
    description: 'The Hyundai Stargazer X offers a unique design.',
    qty: 2,
    price: 35000,
  },
  {
    id: 9,
    name: 'Chery Tiggo 4 Pro',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/06/15104408/chery-tiggo-4-pro-comfort-vs-premium.jpg',
    category: 'Chery',
    description: 'The Chery Tiggo 4 Pro offers comfort and style.',
    qty: 6,
    price: 30000,
  },
  {
    id: 10,
    name: 'Suzuki Jimny 5 Pintu',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/01/13155104/eksterior-suzuki-jimny-5-pintu.jpg',
    category: 'Suzuki',
    description:
      'The Suzuki Jimny 5 Pintu is a compact SUV with off-road capability.',
    qty: 9,
    price: 25000,
  },
  {
    id: 11,
    name: 'Nissan X-Trail e-Power / X-Trail T33',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2022/07/21013814/Nissan-X-Trail-G-e-4ORCE.jpg',
    category: 'Nissan',
    description: 'The Nissan X-Trail e-Power is an efficient hybrid SUV.',
    qty: 5,
    price: 35000,
  },
  {
    id: 12,
    name: 'Suzuki XL7 Hybrid',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/06/15161224/image-3-4.png',
    category: 'Suzuki',
    description: 'The Suzuki XL7 Hybrid is a family-friendly SUV.',
    qty: 7,
    price: 40000,
  },
  {
    id: 13,
    name: 'Toyota Yaris Cross',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2023/05/13145626/harga-yarris-cross-2023-tampak-depan-1.jpg',
    category: 'Toyota',
    description: 'The Toyota Yaris Cross is a compact crossover SUV.',
    qty: 4,
    price: 30000,
  },
  {
    id: 14,
    name: 'Mazda CX-60 Hybrid',
    image:
      'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2022/11/28150829/mazda-cx-60-2022.jpg',
    category: 'Mazda',
    description: 'The Mazda CX-60 Hybrid offers a premium driving experience.',
    qty: 3,
    price: 35000,
  },
]

export default carsData
