export const AddCard = (itemlist, item) => {
  if (itemlist.length>0 ) {
    const found = itemlist.find((elem) => {
      return elem.id == item.id ? true : false;
    });
    return found ? [...itemlist] : [...itemlist, item];
  } else {
    return [item];
  }
};
