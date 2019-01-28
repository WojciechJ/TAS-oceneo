# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
products = Product.create([
	{
	  name: "iPhone 8",
	  description: "128GB, Space gray",
	  allow_unauth: true,
	  image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/9/pr_2017_9_13_13_44_35_578_01.jpg"
	},
  {
		name: "Huawei P20",
    description: "128 GB, Twilight blue",
  	allow_unauth: true,
	  image:"https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/3/pr_2018_3_12_12_13_20_559_00.jpg"
  },
	{
		 name: "Samsung S9",
     description: "G8341 Black",
	   allow_unauth: true,
	   image:"https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/2/pr_2018_2_23_9_35_35_39_00.jpg"
	},
	{
	 name: "Xiaomi Pocophone F1",
	 description: "6/128 GB Steel Blue",
	 allow_unauth: true,
	 image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/8/pr_2018_8_25_10_13_38_244_02.jpg"
	},
	{
	 name: "Sony Xperia XZ1",
	 description: "6/128 GB Steel Blue",
	 allow_unauth: true,
	 image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/9/pr_2017_9_1_13_10_59_282_00.jpg"
	},
	{
	 name: "Xiaomi Redmi Note 5",
	 description: "4/64GB Black",
	 allow_unauth: true,
	 image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/5/pr_2018_5_10_15_17_6_838_04.jpg"
	},
	{
	 name: "Apple iPhone X",
	 description: "64GB Space Gray",
	 allow_unauth: true,
	 image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/9/pr_2017_9_13_14_35_15_245_01.jpg"
	},
	{
	 name: "OnePlus 6",
	 description: "8/128GB Dual SIM",
	 allow_unauth: true,
	 image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/5/pr_2018_5_22_12_42_21_122_00.jpg"
	}

		])


user = User.new(
  email: 'anna.nowak@test.com',
  password: '123456789',
	image: 'http://www.trbimg.com/img-5ad0c8d1/turbine/ct-met-trump-comey-pee-tape-huppke-20180412/70/70x70',
	name: 'Anna',
	surname: 'Nowak'
)
user.save!

user = User.new(
  email: 'jan.kowalski@test.com',
  password: '123456789',
	image: 'https://thumbnails.aaehq.com/t_face_s70/https://aae-dev.s3.amazonaws.com/photo/image/775960/Hillary-Clinton-9251306-2-402.jpg',
	name: 'Jan',
	surname: 'Kowalski'
)
user.save!

rates = Rate.create([
  {value: 4, comment:"Świetny produkt", user_id:1, product_id: 3},
  {value: 5, comment:"Jestem zachwycony", user_id:2, product_id: 2},
  {value: 3, comment:"Taki sobie", user_id:1, product_id: 1},
  {value: 5, comment:"Dno.", user_id:2, product_id: 2},
  {value: 3, comment:"OK", user_id:1, product_id: 1},
  {value: 2, comment:"Nie polecam", user_id:2, product_id: 1},
  {value: 4, comment:"Świetny produkt", user_id:1, product_id: 2},
	{value: 3, comment:"Średniak", user_id:1, product_id: 3},
  {value: 4, comment:"Super", user_id:2, product_id: 2},
  {value: 2, comment:"Nie spełnił oczekiwań", user_id:1, product_id: 1},
  {value: 4, comment:"Prawie idealny", user_id:2, product_id: 2},
  {value: 5, comment:"Baardzo fajny", user_id:1, product_id: 1},
  {value: 3, comment:"Nie polecam", user_id:2, product_id: 1},
  {value: 2, comment:"Słaby", user_id:1, product_id: 2},
	{value: 1, comment:"Za drogi", user_id:1, product_id: 3},
	{value: 1, comment:"Kosmiczna cena", user_id:2, product_id: 3},
	{value: 4, comment:"Świetny produkt", user_id:1, product_id: 4},
  {value: 5, comment:"Jestem zachwycony", user_id:2, product_id: 5},
  {value: 3, comment:"Taki sobie", user_id:1, product_id: 6},
  {value: 1, comment:"Dno.", user_id:2, product_id: 4},
  {value: 3, comment:"OK", user_id:1, product_id: 5},
  {value: 2, comment:"Nie polecam", user_id:2, product_id: 6},
  {value: 5, comment:"Świetny produkt", user_id:1, product_id: 4},
	{value: 3, comment:"Średniak", user_id:1, product_id: 5},
  {value: 4, comment:"Super", user_id:2, product_id: 6},
  {value: 2, comment:"Nie spełnił oczekiwań", user_id:1, product_id: 7},
  {value: 4, comment:"Prawie idealny", user_id:2, product_id: 8},
  {value: 5, comment:"Baardzo fajny", user_id:1, product_id: 7},
  {value: 3, comment:"Nie polecam", user_id:2, product_id: 8},
  {value: 2, comment:"Słaby", user_id:1, product_id: 7},
	{value: 1, comment:"Za drogi", user_id:1, product_id: 8},
	{value: 1, comment:"Kosmiczna cena", user_id:2, product_id: 6}
  ])
