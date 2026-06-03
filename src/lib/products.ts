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
    name: "经典白衬衫",
    price: 299,
    category: "上衣",
    description: "100%纯棉面料，修身版型，适合商务及日常穿着。",
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["白色", "浅蓝"],
    stock: 50,
  },
  {
    id: "2",
    name: "高腰阔腿裤",
    price: 399,
    category: "裤装",
    description: "垂感面料，高腰设计，显瘦显腿长。",
    images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["黑色", "卡其"],
    stock: 30,
  },
  {
    id: "3",
    name: "针织开衫",
    price: 459,
    category: "外套",
    description: "柔软针织面料，宽松版型，百搭单品。",
    images: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"],
    sizes: ["S", "M", "L"],
    colors: ["米白", "灰色", "粉色"],
    stock: 25,
  },
  {
    id: "4",
    name: "A字半裙",
    price: 329,
    category: "裙装",
    description: "优雅A字版型，膝上长度，多场合适用。",
    images: ["https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["黑色", "深蓝", "格纹"],
    stock: 40,
  },
  {
    id: "5",
    name: "休闲连帽卫衣",
    price: 349,
    category: "上衣",
    description: "厚实棉质面料，宽松舒适，日常休闲首选。",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["灰色", "黑色", "白色"],
    stock: 60,
  },
  {
    id: "6",
    name: "牛仔外套",
    price: 599,
    category: "外套",
    description: "经典牛仔面料，水洗做旧工艺，时髦百搭。",
    images: ["https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["浅蓝", "深蓝"],
    stock: 20,
  },
  {
    id: "7",
    name: "修身连衣裙",
    price: 489,
    category: "裙装",
    description: "优雅修身设计，适合约会及聚会场合。",
    images: ["https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["黑色", "酒红", "墨绿"],
    stock: 35,
  },
  {
    id: "8",
    name: "直筒牛仔裤",
    price: 429,
    category: "裤装",
    description: "经典直筒版型，弹力面料，穿着舒适。",
    images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"],
    sizes: ["25", "26", "27", "28", "29", "30"],
    colors: ["浅蓝", "深蓝", "黑色"],
    stock: 45,
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
