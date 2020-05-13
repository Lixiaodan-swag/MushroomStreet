import { request } from "./request";

export function getCategory() {
  return request({
    url: '/data/category.json'
  })
}

export function getCategoryItem(maitKey) {
  return request({
    url: '/data/category/subcategory/' + maitKey + '.json'
  })
}