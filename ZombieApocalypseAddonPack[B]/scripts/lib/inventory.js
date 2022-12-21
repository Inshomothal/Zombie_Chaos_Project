export function getItems(inventory) {
  let items = [];
  if (inventory.size) {
    for (let i = 0; i < inventory.size; i++) {
      items.push(inventory.getItem(i));
    }
  } else if (!inventory.size && inventory.container) {
    for (let i = 0; i < inventory.container.size; i++) {
      items.push(inventory.container.getItem(i));
    }
  }
  return items;
}

export function findItem(items, item) {
  try {
    let res;
    let itemData = item.data ? item.data : 0;
    let itemAmount = item.amount != '*' ? item.amount : '*';
    
    res = itemAmount != '*' ? items.filter(it => it && it.id == item.id && it.data == itemData && it.amount == itemAmount) : items.filter(it => it && it.id == item.id && it.data == itemData);
    
    return res.length > 0 ? items.indexOf(res[0]) : -1;
    
  } catch (e) {}
}