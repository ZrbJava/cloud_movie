/* eslint-disable valid-jsdoc */
/*
 * @Description: 全局promise化
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-07-26 23:45:19
 * @LastEditTime: 2020-07-28 14:29:56
 * @LastEditors: Navi
 */

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
export default function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus
  const status = response.statusCode
  if (status && (!validateStatus || validateStatus(status))) {
    resolve(response)
  } else {
    reject(response)
  }
}
