// https://movie.douban.com/j/search_tags?type=movie&source=index

import Fetch from '../utils/fetch/index'

export const searchTags = ()=>{
  return Fetch.get('https://movie.douban.com/j/search_tags?type=movie&source=index')
}
// 获取热门
export const searchSubjects = (params)=>{
  return Fetch.get('https://movie.douban.com/j/search_subjects',params)
}
// https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0
