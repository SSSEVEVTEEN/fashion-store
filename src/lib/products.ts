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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542932/0e3e332c-b800-45e3-b644-a439e2abe572_wwd83m.png"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542935/374d13e5-ebc0-4dd5-a5c0-e65add97c958_bwznuw.png"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542933/aa320f4a-5a37-4d14-a007-e36c33b0e241_taw6ct.png"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542932/O1CN01aTekk11ZOK2M6abIl__862293184.jpg_q50.jpg__xnfaqs.avif"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542932/O1CN01g3rNL71ixR5MlHtyi_crop_250_0_1500_2000___2832424479.jpg_q50.jpg__wf3rys.avif"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542933/O1CN01Vuftsh1OXyWHXpk6E__0-item_pic.jpg_q50.jpg__etftr2.avif"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542933/O1CN017V3Bh51Rdsj468h7B__2938602135.jpg__yieahx.avif"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542933/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260315133440_646_38_ur7b0t.png"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542934/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260315133525_647_38_nxma8m.png"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542934/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260329233842_40_15_bu8ecr.jpg"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542934/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260329233843_41_15_rys6hf.jpg"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542934/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260329233844_42_15_kaoewl.jpg"],
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
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542934/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260329233845_43_15_cu0zxo.jpg"],
    sizes: ["S", "M", "L"],
    colors: ["米白", "浅棕"],
    stock: 20,
  },
  {
    id: "14",
    name: "Élance · 针织镂空上衣",
    price: 329,
    category: "上衣",
    description: "轻薄透气针织面料，精致镂空纹理，优雅休闲两相宜。",
    images: ["https://res.cloudinary.com/dskrdouvi/image/upload/v1780542932/O1CN01ff6pMR2EyryksMa9M__2215009088814.jpg_q50.jpg__opim1y.avif"],
    sizes: ["S", "M", "L"],
    colors: ["米白", "黑色"],
    stock: 30,
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
