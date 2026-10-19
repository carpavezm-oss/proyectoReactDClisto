// src/data/data.js

export const initialCategories = [
  { id: 1, nombre: "Perfumes Hombre", slug: "hombre", descripcion: "Fragancias amaderadas e intensas.", imagen: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500" },
  { id: 2, nombre: "Perfumes Mujer", slug: "mujer", descripcion: "Aromas florales y dulces.", imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" },
  { id: 3, nombre: "Unisex", slug: "unisex", descripcion: "Frescura versátil para todos.", imagen: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500" },
  { id: 4, nombre: "Ofertas Especiales", slug: "ofertas", descripcion: "Precios de descuento por tiempo limitado.", imagen: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500" }
];

export const initialProducts = [
  {
    id: 1,
    nombre: "Vogue Night",
    categoria: "hombre",
    precio: 29990,
    precioOferta: 24990,
    esOferta: true,
    stock: 12,
    descripcion: "Una fragancia intemporal con notas de madera de cedro, ámbar y bergamota.",
    imagen: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500"
  },
  {
    id: 2,
    nombre: "Rose Mystique",
    categoria: "mujer",
    precio: 34990,
    precioOferta: null,
    esOferta: false,
    stock: 3, // Stock crítico (< 5)
    descripcion: "Aroma floral intenso con matices de rosa de Francia y jazmín silvestre.",
    imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
  },
  {
    id: 3,
    nombre: "Oasis Essence",
    categoria: "unisex",
    precio: 19990,
    precioOferta: 14990,
    esOferta: true,
    stock: 8,
    descripcion: "Frescura cítrica con notas acuáticas ideales para el uso diario.",
    imagen: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500"
  },
  {
    id: 4,
    nombre: "Noir Absolu",
    categoria: "hombre",
    precio: 42990,
    precioOferta: null,
    esOferta: false,
    stock: 2, // Stock crítico (< 5)
    descripcion: "Elegancia nocturna con notas de cuero, pimienta negra y pachulí.",
    imagen: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500"
  },
  {
    id: 5,
    nombre: "Eclat d'Or",
    categoria: "mujer",
    precio: 38990,
    precioOferta: 29990,
    esOferta: true,
    stock: 15,
    descripcion: "Brisa dorada con acorde de vainilla pura, orquídea y almizcle blanco.",
    imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500"
  }
];

export const initialBlogs = [
  {
    id: 1,
    titulo: "Cómo elegir tu perfume según la ocasión",
    resumen: "Descubre los secretos para seleccionar la fragancia adecuada según el día, la noche o eventos especiales.",
    contenido: "Elegir la fragancia perfecta va más allá del gusto personal. Los perfumes reaccionan con el pH de tu piel y las temperaturas del ambiente. Para el día se recomiendan notas cítricas y florales ligeras, mientras que para la noche las notas amaderadas y especiadas capturan una elegancia única.",
    fecha: "2026-10-10",
    autor: "Equipo Olores Que Matan",
    imagen: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?w=600"
  },
  {
    id: 2,
    titulo: "Guía para prolongar la duración de tu fragancia",
    resumen: "Puntos de pulso, hidratación previa y la forma correcta de aplicar el perfume sin alterar sus notas.",
    contenido: "Para que tu perfume dure todo el día, aplícalo justo después de ducharte cuando los poros están abiertos. Utiliza crema hidratante sin aroma en los puntos de pulso (muñecas, cuello y detrás de las orejas). ¡Nunca frotes tus muñecas!, ya que romperás las moléculas de las notas de salida.",
    fecha: "2026-10-15",
    autor: "Sofía Martínez",
    imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
  }
];

export const initialUsers = [
  { id: 1, nombre: "Admin General", email: "admin@oloresquematan.cl", rol: "Administrador", estado: "Activo" },
  { id: 2, nombre: "Pedro Hacker", email: "pedro.hacker20@example.com", rol: "Cliente", estado: "Activo" },
  { id: 3, nombre: "María Silva", email: "maria.silva@example.com", rol: "Cliente", estado: "Activo" }
];

export const initialOrders = [
  {
    id: "2026101801",
    cliente: "Pedro Hacker",
    correo: "pedro.hacker20@example.com",
    direccion: "Los Crisantemos, Edificio Norte, Depto 603, Cerrillos",
    total: 28775,
    estado: "Completado",
    fecha: "2026-10-18",
    items: [
      { id: 1, nombre: "Vogue Night", precio: 24990, cantidad: 1, subtotal: 24990 },
      { id: 3, nombre: "Muestra Oasis", precio: 3785, cantidad: 1, subtotal: 3785 }
    ]
  }
];

// Operaciones de Almacenamiento local (localStorage)

const getLocal = (key, fallback) => {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  return JSON.parse(data);
};

const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// CRUD PRODUCTOS
export const getStoredProducts = () => getLocal("products", initialProducts);
export const saveProducts = (products) => setLocal("products", products);

export const addProduct = (product) => {
  const products = getStoredProducts();
  const newProduct = { ...product, id: Date.now() };
  const updated = [newProduct, ...products];
  saveProducts(updated);
  return updated;
};

export const updateProduct = (id, updatedFields) => {
  const products = getStoredProducts();
  const updated = products.map(p => (p.id === Number(id) ? { ...p, ...updatedFields } : p));
  saveProducts(updated);
  return updated;
};

export const deleteProduct = (id) => {
  const products = getStoredProducts();
  const updated = products.filter(p => p.id !== Number(id));
  saveProducts(updated);
  return updated;
};

// CRUD CATEGORÍAS
export const getStoredCategories = () => getLocal("categories", initialCategories);
export const saveCategories = (cats) => setLocal("categories", cats);

export const addCategory = (category) => {
  const cats = getStoredCategories();
  const newCat = { ...category, id: Date.now() };
  const updated = [...cats, newCat];
  saveCategories(updated);
  return updated;
};

export const deleteCategory = (id) => {
  const cats = getStoredCategories();
  const updated = cats.filter(c => c.id !== Number(id));
  saveCategories(updated);
  return updated;
};

// CRUD USUARIOS
export const getStoredUsers = () => getLocal("users", initialUsers);
export const saveUsers = (users) => setLocal("users", users);

export const addUser = (user) => {
  const users = getStoredUsers();
  const newUser = { ...user, id: Date.now(), estado: "Activo" };
  const updated = [...users, newUser];
  saveUsers(updated);
  return updated;
};

export const updateUser = (id, updatedFields) => {
  const users = getStoredUsers();
  const updated = users.map(u => (u.id === Number(id) ? { ...u, ...updatedFields } : u));
  saveUsers(updated);
  return updated;
};

export const deleteUser = (id) => {
  const users = getStoredUsers();
  const updated = users.filter(u => u.id !== Number(id));
  saveUsers(updated);
  return updated;
};

// GESTIoN DE oRDENES
export const getStoredOrders = () => getLocal("orders", initialOrders);
export const saveOrders = (orders) => setLocal("orders", orders);

export const addOrder = (orderData) => {
  const orders = getStoredOrders();
  const newOrder = {
    ...orderData,
    id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
    fecha: new Date().toISOString().split('T')[0]
  };
  const updated = [newOrder, ...orders];
  saveOrders(updated);
  return newOrder;
};

// BLOGS
export const getStoredBlogs = () => getLocal("blogs", initialBlogs);