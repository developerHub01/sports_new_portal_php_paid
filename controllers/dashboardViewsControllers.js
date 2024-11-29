const CategoryControllers = require("./categoryControllers");

class DashboardViewsControllers {
  async dashboard(req, res) {
    res.render("pages/dashboard");
  }

  async createNews(req, res) {
    res.render("pages/create-news");
  }

  async editNews(req, res) {
    res.render("pages/edit-news");
  }

  async news(req, res) {
    const newsList = [
      {
        id: 1,
        title: "Shoes!",
        categoryName: "Football",
        description: "If a dog chews shoes whose shoes does he choose?",
        banner:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        link: "/news/1",
      },
      {
        id: 2,
        title: "Summer Sale",
        categoryName: "Cricket",
        description: "Get ready for the hottest deals of the season.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        link: "/news/2",
      },
      {
        id: 3,
        title: "New Arrivals",
        categoryName: "Basketball",
        description: "Check out the latest arrivals in our store.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        link: "/news/3",
      },
      {
        id: 4,
        title: "Exclusive Offers",
        categoryName: "Tennis",
        description: "Unlock exclusive offers and discounts today.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        link: "/news/4",
      },
      {
        id: 5,
        title: "Holiday Specials",
        categoryName: "Hockey",
        description: "Celebrate the holidays with amazing deals.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
        link: "/news/5",
      },
      {
        id: 6,
        title: "Grand Opening",
        categoryName: "Rugby",
        description:
          "We're excited to announce the grand opening of our new store.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1609600289513-b7e88b7d9e7c.webp",
        link: "/news/6",
      },
      {
        id: 7,
        title: "Winter Collection",
        categoryName: "Athletics",
        description:
          "The winter collection is now available! Get cozy with our latest arrivals.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        link: "/news/7",
      },
      {
        id: 8,
        title: "Black Friday Deals",
        categoryName: "Baseball",
        description: "Huge discounts on Black Friday! Shop now and save big.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1609600289513-b7e88b7d9e7c.webp",
        link: "/news/8",
      },
      {
        id: 9,
        title: "New Features Released",
        categoryName: "Golf",
        description:
          "We’ve just released new features on our platform! Check them out.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        link: "/news/9",
      },
      {
        id: 10,
        title: "Spring Preview",
        categoryName: "Cycling",
        description:
          "Get a sneak peek at the spring collection launching soon.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        link: "/news/10",
      },
      {
        id: 11,
        title: "Flash Sale Today!",
        categoryName: "Swimming",
        description:
          "Don’t miss out on our one-day flash sale. Everything must go!",
        banner:
          "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        link: "/news/11",
      },
      {
        id: 12,
        title: "Free Shipping",
        categoryName: "Boxing",
        description: "Enjoy free shipping on all orders this week only!",
        banner:
          "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        link: "/news/12",
      },
      {
        id: 13,
        title: "New Product Launch",
        categoryName: "Badminton",
        description:
          "We're launching a brand new product! Be the first to try it.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        link: "/news/13",
      },
      {
        id: 14,
        title: "Customer Appreciation Day",
        categoryName: "Wrestling",
        description:
          "Join us for Customer Appreciation Day and enjoy special offers.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
        link: "/news/14",
      },
      {
        id: 15,
        title: "Tech Talk Webinar",
        categoryName: "Table Tennis",
        description: "Sign up for our free webinar on the latest tech trends.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        link: "/news/15",
      },
      {
        id: 16,
        title: "Back to School",
        categoryName: "Skiing",
        description:
          "Get ready for the school season with our back-to-school specials.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        link: "/news/16",
      },
      {
        id: 17,
        title: "Weekend Sale",
        categoryName: "Surfing",
        description:
          "Our weekend sale is live! Save big on your favorite items.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        link: "/news/17",
      },
      {
        id: 18,
        title: "Exclusive Event",
        categoryName: "Skating",
        description:
          "Join us for an exclusive event and get early access to new products.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        link: "/news/18",
      },
      {
        id: 19,
        title: "Join Our Newsletter",
        categoryName: "Volleyball",
        description:
          "Sign up for our newsletter and stay updated with the latest news.",
        banner:
          "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
        link: "/news/19",
      },
      {
        id: 20,
        title: "Autumn Collection",
        categoryName: "Fencing",
        description: "Fall in love with our new autumn collection. Shop now!",
        banner:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        link: "/news/20",
      },
    ];

    const pagination = {
      currentPage: parseInt(req.query.page) || 1,
      perPage: parseInt(req.query.perPage) || 10,
      totalPage: 3,
    };

    const data = {
      newsList,
      pagination,
    };
    res.render("pages/dashboard-news", data);
  }

  async admins(req, res) {
    res.render("pages/admins");
  }

  async categories(req, res) {
    const categories = await CategoryControllers.categoriesWithNumberOfNews();

    res.render("pages/dashboard-categories", { categories });
  }

  async users(req, res) {
    res.render("pages/users");
  }

  async comments(req, res) {
    res.render("pages/dashboard-comments");
  }
}

module.exports = new DashboardViewsControllers();
