export const categories = [
  {name:"Indian",emoji:"🍛",count:214,image:"/images/indian.svg"},
  {name:"Italian",emoji:"🍝",count:146,image:"/images/italian.svg"},
  {name:"Healthy",emoji:"🥗",count:98,image:"/images/healthy.svg"},
  {name:"Desserts",emoji:"🍰",count:121,image:"/images/dessert.svg"},
];

export const recipes = [
  {
    id:1,name:"Butter Chicken",category:"Indian",type:"Non-Veg",time:"55 min",difficulty:"Medium",rating:4.9,reviews:128,badge:"POPULAR",
    description:"Tender chicken simmered in a rich, silky tomato and butter sauce with warm Indian spices.",
    image:"/images/butter-chicken.svg",author:"Aarav Mehta",authorInitials:"AM",
    ingredients:[{amount:"500g",name:"boneless chicken"},{amount:"1 cup",name:"tomato puree"},{amount:"3 tbsp",name:"butter"},{amount:"½ cup",name:"cream"},{amount:"1 tsp",name:"garam masala"}],
    steps:["Marinate chicken with yogurt, spices and salt for at least 20 minutes.","Sear the chicken pieces until lightly charred and set aside.","Cook tomato puree with butter and spices until rich and glossy.","Add chicken and cream, then simmer gently until cooked through.","Finish with garam masala and serve with warm naan or rice."]
  },
  {
    id:2,name:"Creamy Tuscan Pasta",category:"Italian",type:"Veg",time:"30 min",difficulty:"Easy",rating:4.8,reviews:94,badge:"TRENDING",
    description:"Silky garlic cream sauce, sun-dried tomatoes and spinach wrapped around perfectly cooked pasta.",
    image:"/images/pasta.svg",author:"Mia Rossi",authorInitials:"MR",
    ingredients:[{amount:"250g",name:"penne pasta"},{amount:"3 cloves",name:"garlic"},{amount:"½ cup",name:"cream"},{amount:"½ cup",name:"sun-dried tomatoes"},{amount:"1 cup",name:"baby spinach"}],
    steps:["Cook pasta in salted water until al dente and reserve some pasta water.","Sauté garlic and sun-dried tomatoes in olive oil.","Add cream and simmer for two minutes.","Stir in spinach and parmesan until creamy.","Toss with pasta, adding pasta water if needed, and serve."]
  },
  {
    id:3,name:"Berry Breakfast Bowl",category:"Healthy",type:"Veg",time:"10 min",difficulty:"Easy",rating:4.7,reviews:72,badge:"QUICK",
    description:"A bright, creamy breakfast bowl packed with berries, banana, yogurt and crunchy toppings.",
    image:"/images/bowl.svg",author:"Nora Singh",authorInitials:"NS",
    ingredients:[{amount:"1 cup",name:"Greek yogurt"},{amount:"½ cup",name:"mixed berries"},{amount:"1",name:"banana"},{amount:"2 tbsp",name:"granola"},{amount:"1 tsp",name:"honey"}],
    steps:["Blend half the berries with banana and yogurt until smooth.","Pour into a chilled bowl.","Top with remaining berries and granola.","Drizzle with honey and serve immediately."]
  },
  {
    id:4,name:"Chocolate Celebration Cake",category:"Desserts",type:"Veg",time:"70 min",difficulty:"Medium",rating:4.9,reviews:156,
    description:"A deeply chocolatey layer cake with a soft crumb and glossy chocolate frosting.",
    image:"/images/cake.svg",author:"Lena Kapoor",authorInitials:"LK",
    ingredients:[{amount:"2 cups",name:"flour"},{amount:"¾ cup",name:"cocoa powder"},{amount:"2",name:"eggs"},{amount:"1 cup",name:"milk"},{amount:"1 cup",name:"sugar"}],
    steps:["Whisk dry ingredients together in a large bowl.","Mix eggs, milk and sugar in another bowl.","Combine wet and dry ingredients until just smooth.","Bake in a lined cake tin until a skewer comes out clean.","Cool completely, frost, slice and enjoy."]
  },
  {
    id:5,name:"Garden Fresh Salad",category:"Healthy",type:"Veg",time:"15 min",difficulty:"Easy",rating:4.6,reviews:51,
    description:"Crisp vegetables, creamy avocado and a zesty lemon dressing for an effortless lunch.",
    image:"/images/salad.svg",author:"Isha Verma",authorInitials:"IV",
    ingredients:[{amount:"2 cups",name:"mixed greens"},{amount:"1",name:"avocado"},{amount:"1 cup",name:"cherry tomatoes"},{amount:"½",name:"cucumber"},{amount:"1 tbsp",name:"lemon juice"}],
    steps:["Wash and dry all vegetables thoroughly.","Slice avocado, cucumber and tomatoes.","Whisk lemon juice with olive oil, salt and pepper.","Toss vegetables and greens with dressing.","Serve immediately."]
  },
  {
    id:6,name:"Wood-Fired Margherita",category:"Italian",type:"Veg",time:"45 min",difficulty:"Medium",rating:4.8,reviews:88,
    description:"Simple pizza with tomato, fresh mozzarella, basil and a beautifully blistered crust.",
    image:"/images/pizza.svg",author:"Marco Bellini",authorInitials:"MB",
    ingredients:[{amount:"1",name:"pizza dough ball"},{amount:"½ cup",name:"tomato sauce"},{amount:"125g",name:"fresh mozzarella"},{amount:"8",name:"basil leaves"},{amount:"1 tbsp",name:"olive oil"}],
    steps:["Stretch dough into a thin round, keeping the edge slightly thicker.","Spread tomato sauce evenly over the base.","Add torn mozzarella and basil.","Bake at the highest oven temperature until the crust blisters.","Finish with olive oil and fresh basil."]
  }
];