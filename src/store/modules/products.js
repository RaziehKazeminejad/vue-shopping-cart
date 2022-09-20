const productModules = {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 100,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Camping_Tent_at_Doi_Angkhang_Mountain%2C_Chiangmai%2C_Thailand.jpg/640px-Camping_Tent_at_Doi_Angkhang_Mountain%2C_Chiangmai%2C_Thailand.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 130,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 7,
        },
        {
          id: 'p4',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61Rri6BvBBL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
          title: 'Remarkable Books',
          description:
            `The World's Most Historic and Significant Works!`,
          price: 250,
        },
        {
          id: 'p5',
          image:
            'https://m.media-amazon.com/images/I/A1IogNCrBBL._AC_SX679_.jpg',
          title: ' Family camping tent',
          description: 'Relax in Comfort with the Moon Lence Camping Tent.',
          price: 186,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};

export default productModules;
