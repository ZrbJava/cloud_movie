/* eslint-disable valid-jsdoc */
/*
 * @Description: 核心请求插件
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-07-26 23:45:19
 * @LastEditTime: 2020-12-10 18:43:47
 * @LastEditors: linjing
 */

import dispatchRequest from './dispatchRequest'
import InterceptorManager from './InterceptorManager'
import mergeConfig from './mergeConfig'
import defaults from './defaults'
import { isPlainObject } from '../utils'

export default class Request {
  /**
   * @param {Object} arg - 全局配置
   * @param {String} arg.baseURL - 全局根路径
   * @param {Object} arg.header - 全局header
   * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
   * @param {String} arg.dataType = [json] - 全局默认的dataType
   * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。App和支付宝小程序不支持
   * @param {Object} arg.custom - 全局默认的自定义参数
   * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认30000。仅微信小程序（2.10.0）、支付宝小程序支持
   * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
   * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
   * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
   * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
   */
  constructor(arg = {}) {
    if (!isPlainObject(arg)) {
      arg = {}
      console.warn('设置全局参数必须接收一个Object')
    }
    this.config = { ...defaults, ...arg }
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    }
  }

  /**
   * @Function
   * @param {Request~setConfigCallback} f - 设置全局默认配置
   */
  setConfig(f) {
    this.config = f(this.config)
  }

  middleware(config) {
    config = mergeConfig(this.config, config)
    let chain = [dispatchRequest, undefined]
    let promise = Promise.resolve(config)

    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected)
    })

    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected)
    })

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift())
    }

    return promise
  }

  /**
   * @Function
   * @param {Object} config - 请求配置项
   * @prop {String} options.url - 请求路径
   * @prop {Object} options.data - 请求参数
   * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
   * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
   * @prop {Object} [options.header = config.header] - 请求header
   * @prop {Object} [options.method = config.method] - 请求方法
   * @returns {Promise<unknown>}
   */
  request(config = {}) {
    return this.middleware(config)
  }

  get(url, options = {}) {
    return this.middleware({
      url,
      method: 'GET',
      ...options
    })
  }

  post(url, data, options = {}) {
    return this.middleware({
      url,
      data,
      method: 'POST',
      ...options
    })
  }

  put(url, data, options = {}) {
    return this.middleware({
      url,
      data,
      method: 'PUT',
      ...options
    })
  }

  delete(url, data, options = {}) {
    return this.middleware({
      url,
      data,
      method: 'DELETE',
      ...options
    })
  }

  connect(url, data, options = {}) {
    return this.middleware({
      url,
      data,
      method: 'CONNECT',
      ...options
    })
  }

  head(url, data, options = {}) {
    return this.middleware({
      url,
      data,
      method: 'HEAD',
      ...options
    })
  }

  options(url, data, options = {}) {
    return this.middleware({
      url,
      data,
      method: 'OPTIONS',
      ...options
    })
  }

  trace(url, data, options = {}) {
    return this.middleware({
      url,
      data,
      method: 'TRACE',
      ...options
    })
  }

  upload(url, config = {}) {
    config.url = url
    config.method = 'UPLOAD'
    return this.middleware(config)
  }

  download(url, config = {}) {
    config.url = url
    config.method = 'DOWNLOAD'
    return this.middleware(config)
  }
}
