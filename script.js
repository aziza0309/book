// === НАСТРОЙКИ TELEGRAM БОТА ===
const TELEGRAM_BOT_TOKEN = "8824544918:AAFk24lSWI-Od0-yj3ln72qDVwMfzRzkcmE";
const TELEGRAM_CHAT_ID = "7876053445";

// === БАЗА ДАННЫХ НАСТОЯЩИХ КНИГ (с обложками OpenLibrary) ===
const booksData = [
  {
    id: 1,
    title: { ru: "Гарри Поттер и Философский камень", uz: "Garri Potter va Falsafa toshi", en: "Harry Potter and the Sorcerer's Stone" },
    author: { ru: "Дж. К. Роулинг", uz: "J. K. Rouling", en: "J.K. Rowling" },
    price: 120000,
    img: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg"
  },
  {
    id: 2,
    title: { ru: "Маленький принц", uz: "Kichkina shahzoda", en: "The Little Prince" },
    author: { ru: "Антуан де Сент-Экзюпери", uz: "Antuan de Sent-Ekzyuperi", en: "Antoine de Saint-Exupéry" },
    price: 65000,
    img: "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg"
  },
  {
    id: 3,
    title: { ru: "Атомные привычки", uz: "Atom odatlar", en: "Atomic Habits" },
    author: { ru: "Джеймс Клир", uz: "Jeyms Klir", en: "James Clear" },
    price: 110000,
    img: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    id: 4,
    title: { ru: "Шерлок Холмс: Сборник", uz: "Sherlok Xolms", en: "The Adventures of Sherlock Holmes" },
    author: { ru: "Артур Конан Дойл", uz: "Artur Konan Doyl", en: "Arthur Conan Doyle" },
    price: 85000,
    img: "https://covers.openlibrary.org/b/isbn/9780140439076-L.jpg"
  },
  {
    id: 5,
    title: { ru: "Богатый папа, бедный папа", uz: "Boy ota, kambag'al ota", en: "Rich Dad Poor Dad" },
    author: { ru: "Роберт Кийосаки", uz: "Robert Kiyosaki", en: "Robert T. Kiyosaki" },
    price: 95000,
    img: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    id: 6,
    title: { ru: "Хоббит, или Туда и обратно", uz: "Xobbit", en: "The Hobbit" },
    author: { ru: "Дж. Р. Р. Толкин", uz: "J. R. R. Tolkin", en: "J.R.R. Tolkien" },
    price: 130000,
    img: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg"
  },
  {
    id: 7,
    title: { ru: "1984", uz: "1984", en: "1984" },
    author: { ru: "Джордж Оруэлл", uz: "Jorj Oruell", en: "George Orwell" },
    price: 75000,
    img: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
  },
  {
    id: 8,
    title: { ru: "Алхимик", uz: "Alkimyogar", en: "The Alchemist" },
    author: { ru: "Пауло Коэльо", uz: "Paulo Koelo", en: "Paulo Coelho" },
    price: 80000,
    img: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  }
];

// === СЛОВАРЬ ПЕРЕВОДОВ (RU / UZ / EN) ===
const translations = {
  ru: {
    nav_home: "📚 Каталог",
    nav_delivery: "🚚 Доставка",
    nav_location: "📍 Где мы",
    nav_fav: "❤️ Лайки",
    nav_cart: "🛒 Корзина",
    nav_acc: "👤 Аккаунт",
    theme_btn: "🌗 Тема",
    bg_label: "🎨 Фон:",
    reset_bg: "Сброс",
    hero_title: "Добро пожаловать в мир книг BookHaven!",
    hero_sub: "Настоящие бестселлеры с быстрой доставкой на дом",
    search_placeholder: "Поиск книги по названию...",
    add_cart: "🛒 В корзину",
    currency: "сум",
    fav_title: "❤️ Ваши любимые книги (Лайки)",
    fav_empty: "Вы еще не поставили лайк ни одной книге.",
    cart_title: "🛒 Ваша корзина и оформление заказа",
    cart_empty: "Ваша корзина пока пуста.",
    total_label: "Итого к оплате:",
    order_title: "Оформить заказ (Отправка в Telegram Бот)",
    name_label: "Ваше имя:",
    phone_label: "Ваш телефон:",
    address_label: "Адрес доставки:",
    comment_label: "Комментарий к заказу:",
    send_order: "🚀 Заказать через Telegram Бот",
    delivery_title: "🚚 Условия доставки",
    delivery_text1: "• Стандартная доставка по городу: 20 000 сум (1-2 дня).",
    delivery_text2: "• Экспресс-доставка за 2 часа: 40 000 сум.",
    delivery_text3: "• При заказе от 300 000 сум — доставка БЕСПЛАТНАЯ!",
    loc_title: "📍 Где расположен наш магазин",
    loc_address: "Наш адрес: г. Ташкент, проспект Амира Темура, дом 15 (Ориентир: Сквер Амира Темура).",
    loc_hours: "Режим работы: Ежедневно с 09:00 до 21:00 без выходных.",
    acc_title: "👤 Личный кабинет читателя",
    acc_save: "💾 Сохранить профиль"
  },
  uz: {
    nav_home: "📚 Katalog",
    nav_delivery: "🚚 Yetkazib berish",
    nav_location: "📍 Manzilimiz",
    nav_fav: "❤️ Sevimlilar",
    nav_cart: "🛒 Savatcha",
    nav_acc: "👤 Akkaunt",
    theme_btn: "🌗 Mavzu",
    bg_label: "🎨 Fon:",
    reset_bg: "Tiklash",
    hero_title: "BookHaven kitoblar olamiga xush kelibsiz!",
    hero_sub: "Eng sara kitoblar tezкор yetkazib berish bilan",
    search_placeholder: "Kitob nomini qidiring...",
    add_cart: "🛒 Savatchaga",
    currency: "so'm",
    fav_title: "❤️ Siz yoqtirgan kitoblar (Layklar)",
    fav_empty: "Siz hali birorta kitobga layk bosmadingiz.",
    cart_title: "🛒 Savatcha va buyurtma berish",
    cart_empty: "Savatchangiz hozircha bo'sh.",
    total_label: "Jami to'lov:",
    order_title: "Buyurtma berish (Telegram Botga yuborish)",
    name_label: "Ismingiz:",
    phone_label: "Telefon raqamingiz:",
    address_label: "Yetkazib berish manzili:",
    comment_label: "Izoh:",
    send_order: "🚀 Telegram Bot orqali buyurtma berish",
    delivery_title: "🚚 Yetkazib berish shartlari",
    delivery_text1: "• Shahar bo'ylab standart yetkazib berish: 20 000 so'm (1-2 kun).",
    delivery_text2: "• 2 soat ichida tezkor yetkazib berish: 40 000 so'm.",
    delivery_text3: "• 300 000 so'mdan ortiq xaridlar uchun — yetkazib berish BEPUL!",
    loc_title: "📍 Do'konimiz qayerda joylashgan",
    loc_address: "Manzil: Toshkent shahri, Amir Temur shoh ko'chasi, 15-uy.",
    loc_hours: "Ish vaqti: Har kuni soat 09:00 dan 21:00 gacha.",
    acc_title: "👤 Kitobxon shaxsiy kabineti",
    acc_save: "💾 Profilni saqlash"
  },
  en: {
    nav_home: "📚 Catalog",
    nav_delivery: "🚚 Delivery",
    nav_location: "📍 Location",
    nav_fav: "❤️ Likes",
    nav_cart: "🛒 Cart",
    nav_acc: "👤 Account",
    theme_btn: "🌗 Theme",
    bg_label: "🎨 BG:",
    reset_bg: "Reset",
    hero_title: "Welcome to BookHaven Bookstore!",
    hero_sub: "Real bestsellers with fast home delivery",
    search_placeholder: "Search books by title...",
    add_cart: "🛒 Add to Cart",
    currency: "UZS",
    fav_title: "❤️ Your Liked Books",
    fav_empty: "You haven't liked any books yet.",
    cart_title: "🛒 Your Shopping Cart & Checkout",
    cart_empty: "Your cart is currently empty.",
    total_label: "Total Price:",
    order_title: "Checkout (Sends directly to Telegram Bot)",
    name_label: "Your Name:",
    phone_label: "Phone Number:",
    address_label: "Delivery Address:",
    comment_label: "Order Comment:",
    send_order: "🚀 Order via Telegram Bot",
    delivery_title: "🚚 Delivery Information",
    delivery_text1: "• Standard city delivery: 20,000 UZS (1-2 days).",
    delivery_text2: "• Express 2-hour delivery: 40,000 UZS.",
    delivery_text3: "• Orders over 300,000 UZS get FREE delivery!",
    loc_title: "📍 Where We Are Located",
    loc_address: "Address: 15 Amir Temur Avenue, Tashkent.",
    loc_hours: "Working Hours: Daily from 09:00 to 21:00.",
    acc_title: "👤 Reader Account",
    acc_save: "💾 Save Profile"
  }
};

// === СОСТОЯНИЕ В LOCALSTORAGE ===
let currentLang = localStorage.getItem("lang") || "ru";
let isDark = localStorage.getItem("theme") === "dark";
let customBg = localStorage.getItem("customBg") || "";
let likes = JSON.parse(localStorage.getItem("likes")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// === ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ ЛЮБОЙ СТРАНИЦЫ ===
document.addEventListener("DOMContentLoaded", () => {
  applyThemeAndBg();
  setupControls();
  applyTranslations();
  updateBadges();
  renderPageSpecificContent();
});

function applyThemeAndBg() {
  if (isDark) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  if (customBg) {
    document.body.style.backgroundColor = customBg;
  } else {
    document.body.style.backgroundColor = "";
  }
}

function setupControls() {
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("lang", currentLang);
      applyTranslations();
      renderPageSpecificContent();
    });
  }

  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      isDark = !isDark;
      localStorage.setItem("theme", isDark ? "dark" : "light");
      customBg = "";
      localStorage.removeItem("customBg");
      applyThemeAndBg();
    });
  }

  const bgPicker = document.getElementById("bgPicker");
  if (bgPicker) {
    if (customBg) bgPicker.value = customBg;
    bgPicker.addEventListener("input", (e) => {
      customBg = e.target.value;
      localStorage.setItem("customBg", customBg);
      document.body.style.backgroundColor = customBg;
    });
  }

  const resetBgBtn = document.getElementById("resetBgBtn");
  if (resetBgBtn) {
    resetBgBtn.addEventListener("click", () => {
      customBg = "";
      localStorage.removeItem("customBg");
      applyThemeAndBg();
    });
  }
}

function applyTranslations() {
  const dict = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });
}

function updateBadges() {
  const favBadge = document.getElementById("favBadge");
  const cartBadge = document.getElementById("cartBadge");
  if (favBadge) favBadge.textContent = likes.length;
  if (cartBadge) cartBadge.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// === ЛАЙКИ И КОРЗИНА ===
function toggleLike(bookId) {
  if (likes.includes(bookId)) {
    likes = likes.filter(id => id !== bookId);
  } else {
    likes.push(bookId);
  }
  localStorage.setItem("likes", JSON.stringify(likes));
  updateBadges();
  renderPageSpecificContent();
}

function addToCart(bookId) {
  const existing = cart.find(item => item.id === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: bookId, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBadges();
  alert("✅ Книга добавлена в корзину!");
}

function removeFromCart(bookId) {
  cart = cart.filter(item => item.id !== bookId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBadges();
  renderPageSpecificContent();
}

// === ОТРИСОВКА КАРТОЧЕК КНИГ ===
function createBookCardHTML(book) {
  const dict = translations[currentLang];
  const isLiked = likes.includes(book.id);
  return `
    <div class="book-card">
      <div class="book-img-wrapper">
        <img src="${book.img}" alt="${book.title[currentLang]}">
        <button class="like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(${book.id})">
          ${isLiked ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="book-info">
        <div class="book-title">${book.title[currentLang]}</div>
        <div class="book-author">${book.author[currentLang]}</div>
        <div class="book-price">${book.price.toLocaleString()} ${dict.currency}</div>
        <button class="btn" onclick="addToCart(${book.id})">${dict.add_cart}</button>
      </div>
    </div>
  `;
}

function renderPageSpecificContent() {
  const dict = translations[currentLang];

  // 1. Главная страница (Каталог)
  const catalogGrid = document.getElementById("catalogGrid");
  if (catalogGrid) {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput ? searchInput.value.toLowerCase() : "";
    const filtered = booksData.filter(b =>
      b.title[currentLang].toLowerCase().includes(query) ||
      b.author[currentLang].toLowerCase().includes(query)
    );
    catalogGrid.innerHTML = filtered.map(createBookCardHTML).join("");

    if (searchInput && !searchInput.dataset.listener) {
      searchInput.dataset.listener = "true";
      searchInput.addEventListener("input", renderPageSpecificContent);
    }
  }

  // 2. Страница Лайков (Избранное)
  const favGrid = document.getElementById("favGrid");
  if (favGrid) {
    const favBooks = booksData.filter(b => likes.includes(b.id));
    if (favBooks.length === 0) {
      favGrid.innerHTML = `<p>${dict.fav_empty}</p>`;
    } else {
      favGrid.innerHTML = favBooks.map(createBookCardHTML).join("");
    }
  }

  // 3. Страница Корзины
  const cartList = document.getElementById("cartList");
  const cartTotalEl = document.getElementById("cartTotal");
  if (cartList && cartTotalEl) {
    if (cart.length === 0) {
      cartList.innerHTML = `<p>${dict.cart_empty}</p>`;
      cartTotalEl.textContent = `0 ${dict.currency}`;
    } else {
      let total = 0;
      cartList.innerHTML = cart.map(item => {
        const book = booksData.find(b => b.id === item.id);
        if (!book) return "";
        const sum = book.price * item.qty;
        total += sum;
        return `
          <div class="cart-item">
            <div style="display:flex; align-items:center; gap:15px;">
              <img src="${book.img}" alt="">
              <div>
                <h4>${book.title[currentLang]}</h4>
                <p>${book.price.toLocaleString()} ${dict.currency} × ${item.qty}</p>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <strong>${sum.toLocaleString()} ${dict.currency}</strong>
              <button class="btn btn-danger" style="width:auto; padding:8px 12px;" onclick="removeFromCart(${book.id})">✖</button>
            </div>
          </div>
        `;
      }).join("");
      cartTotalEl.textContent = `${total.toLocaleString()} ${dict.currency}`;
    }
  }

  // 4. Страница Аккаунта
  const accForm = document.getElementById("accountForm");
  if (accForm) {
    const savedUser = JSON.parse(localStorage.getItem("userProfile")) || {};
    document.getElementById("accName").value = savedUser.name || "";
    document.getElementById("accPhone").value = savedUser.phone || "";
    document.getElementById("accCity").value = savedUser.city || "Ташкент";
  }
}

// === ОТПРАВКА ЗАКАЗА И УВЕДОМЛЕНИЙ В TELEGRAM БОТ ===
async function submitOrderToTelegram(e) {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Корзина пуста! Добавьте книги перед заказом.");
    return;
  }

  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const address = document.getElementById("orderAddress").value.trim();
  const comment = document.getElementById("orderComment").value.trim();

  let total = 0;
  let itemsText = cart.map((item, idx) => {
    const book = booksData.find(b => b.id === item.id);
    const sum = book.price * item.qty;
    total += sum;
    return `${idx + 1}. 📖 ${book.title.ru} (${item.qty} шт.) — ${sum.toLocaleString()} сум`;
  }).join("\n");

  const message = `📦 *НОВЫЙ ЗАКАЗ В КНИЖНОМ МАГАЗИНЕ!*\n\n` +
                  `👤 *Имя:* ${name}\n` +
                  `📞 *Телефон:* ${phone}\n` +
                  `📍 *Адрес:* ${address}\n` +
                  `💬 *Комментарий:* ${comment || "Нет"}\n\n` +
                  `📚 *Заказанные книги:*\n${itemsText}\n\n` +
                  `💰 *ИТОГО:* ${total.toLocaleString()} сум`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown"
      })
    });

    if (response.ok) {
      alert("🎉 Заказ успешно отправлен в Telegram-бот!");
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      updateBadges();
      renderPageSpecificContent();
      e.target.reset();
    } else {
      alert("Ошибка отправки в бот. Убедитесь, что вы нажали /start в своем боте!");
    }
  } catch (error) {
    alert("Ошибка сети при отправке сообщения в Telegram.");
  }
}

function saveAccountProfile(e) {
  e.preventDefault();
  const profile = {
    name: document.getElementById("accName").value,
    phone: document.getElementById("accPhone").value,
    city: document.getElementById("accCity").value
  };
  localStorage.setItem("userProfile", JSON.stringify(profile));
  alert("✅ Профиль успешно сохранен!");
}