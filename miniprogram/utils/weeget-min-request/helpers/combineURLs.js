/*
 * @Description: 格式化baseurl
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-07-26 23:45:19
 * @LastEditTime: 2020-07-28 14:31:18
 * @LastEditors: Navi
 */

'use strict'

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
export default function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}
