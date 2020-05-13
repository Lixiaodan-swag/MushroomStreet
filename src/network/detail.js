import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: '/data/detail/' + iid + '.json'
  })
}
export class GoodsInfo {
  constructor(columns, itemInfo, shopInfo) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
    this.desc = itemInfo.desc;
    this.Price = itemInfo.highNowPrice;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cFans = shopInfo.cFans;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.cGoods = shopInfo.cGoods;

  }
}
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.image ? info.images[0] : '';
    this.infos = info.set;
    this.size = rule.tables;
  }
}
export function getRecommendData() {
  return request({
    url: '/data/recommend.json'
  })
}