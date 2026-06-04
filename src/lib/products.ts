export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Atelier · 纯白翻领短袖",
    price: 299,
    category: "上衣",
    description: "优质莫代尔面料，V领翻领设计，修身剪裁展现优雅身形，简约百搭。",
    images: ["https://i.ibb.co/xtvNTfk6/0e3e332c-b800-45e3-b644-a439e2abe572.png"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["米白", "浅粉"],
    stock: 50,
  },
  {
    id: "2",
    name: "Studio · 冰蓝无袖背心",
    price: 259,
    category: "上衣",
    description: "清爽冰蓝色调，垂感面料，简洁无袖设计，夏日清凉必备。",
    images: ["https://i.ibb.co/v4nrJNxk/374d13e5-ebc0-4dd5-a5c0-e65add97c958.png"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["冰蓝", "白色"],
    stock: 45,
  },
  {
    id: "3",
    name: "Maison · 黄绿色翻领上衣",
    price: 319,
    category: "上衣",
    description: "清新黄绿色调，宽松休闲版型，棉质面料透气舒适。",
    images: ["https://i.ibb.co/QjQ4PX6X/aa320f4a-5a37-4d14-a007-e36c33b0e241.png"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["黄绿", "白色"],
    stock: 35,
  },
  {
    id: "4",
    name: "Luxe · 简约白色短袖T恤",
    price: 239,
    category: "上衣",
    description: "100%纯棉面料，经典圆领，干净利落的极简风格，日常百搭首选。",
    images: ["https://i.ibb.co/p6qKX2PD/O1-CN01a-Tekk11-ZOK2-M6ab-Il-862293184-jpg-q50-jpg.avif"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["白色", "黑色", "灰色"],
    stock: 80,
  },
  {
    id: "5",
    name: "Éclat · 碎花优雅长裙",
    price: 489,
    category: "裙装",
    description: "浪漫碎花印花，飘逸长裙设计，展现女性柔美气质，适合约会及出游。",
    images: ["https://i.ibb.co/tTcZGKJt/O1-CN01g3r-NL71ix-R5-Ml-Htyi-crop-250-0-1500-2000-2832424479-jpg-q50-jpg.avif"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["蓝色碎花", "粉色碎花"],
    stock: 30,
  },
  {
    id: "6",
    name: "Versant · 奶油针织毛衣",
    price: 459,
    category: "外套",
    description: "柔软羊毛混纺面料，宽松舒适，奶油白色系温柔气质，秋冬必备单品。",
    images: ["https://i.ibb.co/5gbZPkJy/O1-CN01-Vuftsh1-OXy-WHXpk6-E-0-item-pic-jpg-q50-jpg.avif"],
    sizes: ["S", "M", "L"],
    colors: ["奶白", "浅灰", "浅粉"],
    stock: 25,
  },
  {
    id: "7",
    name: "Nordique · 丹宁牛仔套装",
    price: 599,
    category: "裤装",
    description: "经典水洗牛仔面料，时尚做旧工艺，宽松版型舒适有型，街头风格首选。",
    images: ["https://i.ibb.co/RT2jhNwt/O1-CN017-V3-Bh51-Rdsj468h7-B-2938602135-jpg.avif"],
    sizes: ["25", "26", "27", "28", "29", "30"],
    colors: ["浅蓝", "深蓝"],
    stock: 20,
  },
  {
    id: "8",
    name: "Santal · 米色褶皱半裙",
    price: 369,
    category: "裙装",
    description: "优雅米色调，细腻褶皱工艺，高腰A字版型显瘦显腿长，通勤约会两相宜。",
    images: ["https://i.ibb.co/vCpjdqRG/20260315133440-646-38.png"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["米色", "白色", "黑色"],
    stock: 40,
  },
  {
    id: "9",
    name: "Lumière · 银灰阔腿裤",
    price: 429,
    category: "裤装",
    description: "高级银灰色调，垂感面料阔腿设计，高腰剪裁拉长比例，时髦感十足。",
    images: ["https://i.ibb.co/27H6grwP/20260315133525-647-38.png"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["银灰", "浅卡其"],
    stock: 35,
  },
  {
    id: "10",
    name: "Terrain · 工装宽松长裤",
    price: 399,
    category: "裤装",
    description: "多口袋工装设计，宽松版型穿着自在，帅气中性风格，街头潮流必备。",
    images: ["https://i.ibb.co/2TMZPmG/20260329233842-40-15.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["灰色", "卡其", "黑色"],
    stock: 30,
  },
  {
    id: "11",
    name: "Obsidian · 黑色阔腿长裙",
    price: 449,
    category: "裙装",
    description: "深邃黑色，宽摆长裙设计，高级感溢出，适合多种场合，优雅百搭。",
    images: ["https://i.ibb.co/jPsNxBnF/20260329233843-41-15.jpg"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["黑色"],
    stock: 25,
  },
  {
    id: "12",
    name: "Velours · 黑色直筒西裤",
    price: 389,
    category: "裤装",
    description: "修身直筒剪裁，质感面料，经典黑色百搭，商务休闲皆宜。",
    images: ["https://i.ibb.co/j9YJWvSt/20260329233844-42-15.jpg"],
    sizes: ["25", "26", "27", "28", "29", "30"],
    colors: ["黑色", "深灰"],
    stock: 45,
  },
  {
    id: "13",
    name: "Roseau · 镂空钩花上衣",
    price: 349,
    category: "上衣",
    description: "精致镂空钩花工艺，复古文艺气息，宽松慵懒版型，层叠穿搭更出彩。",
    images: ["https://i.ibb.co/spDnq5mb/20260329233845-43-15.jpg"],
    sizes: ["S", "M", "L"],
    colors: ["米白", "浅棕"],
    stock: 20,
  },
];

export const categories = ["全部", "上衣", "裤装", "裙装", "外套"];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "全部") return products;
  return products.filter((p) => p.category === category);
}
