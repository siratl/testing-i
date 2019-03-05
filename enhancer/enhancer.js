const enhancer = {
  success: item => {
    switch (item.enhancement) {
      case item.enhancement <= 16:
        return { ...item, enhancement: item.enhancement + 1 };
      case 16:
        return {
          ...item,
          enhancement: item.enhancement + 1,
          displayName: 'PRI',
        };
      case 17:
        return {
          ...item,
          displayName: 'DUO',
          enhancement: item.enhancement + 1,
        };
      case 18:
        return {
          ...item,
          displayName: 'TRI',
          enhancement: item.enhancement + 1,
        };
      case 19:
        return {
          ...item,
          displayName: 'TET',
          enhancement: item.enhancement + 1,
        };
      case 20:
        return {
          ...item,
          displayName: 'PEN',
        };
      default:
        return item;
    }
  },
  fail: item => {
    if (item.durability > 25) {
      throw new Error('ITEM CANNOT BE ENHANCED');
    } else if (item.enhancement < 15 && item.enhancement > 0) {
      return { ...item, durability: item.durability - 5 };
    } else if (item.durability > 14) {
      if (item.durability < 10) {
        throw new Error('ITEM CANNOT BE ENHANCED');
      } else {
        return { ...item, durability: item.durability - 10 };
      }
    } else if (item.enhancement > 16) {
      switch (item.enhancement) {
        case 16:
          return {
            ...item,
            displayName: 'PRI',
            enhancement: item.enhancement - 1,
          };
        case 17:
          return {
            ...item,
            displayName: 'DUO',
            enhancement: item.enhancement - 1,
          };
        case 18:
          return {
            ...item,
            displayName: 'TRI',
            enhancement: item.enhancement - 1,
          };
        case 19:
          return {
            ...item,
            displayName: 'TET',
            enhancement: item.enhancement - 1,
          };
        case 20:
          return {
            ...item,
            displayName: 'PEN',
            enhancement: item.enhancement - 1,
          };
        default:
          return item;
      }
    } else if (item.enhancement <= 16) {
      return { ...item, enhancement: item.enhancement - 1 };
    }
  },
  repair: item => ({ ...item, durability: 100 }),
};

module.exports = {
  enhancer,
};
