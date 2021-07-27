/*
 * @Description: 正则判断url是否符合规范
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-07-26 23:45:19
 * @LastEditTime: 2020-07-28 14:25:59
 * @LastEditors: Navi
 */

'use strict'

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
export default function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url)
}
