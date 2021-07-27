import Request from '../weeget-min-request/request'
import Log from '../log/index'

const fetch = new Request({
  baseURL:'', // 基准url，会和请求的接口url拼接为一个完整的url
  header: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  method: 'GET', // 设置请求类型
  dataType: 'json',
  responseType: 'text',
  timeout: 60000,
  // 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
  validateStatus: (statusCode) => {
    // statusCode 必存在。此处示例为全局默认配置
    return statusCode >= 200 && statusCode < 300
  }
})
// 添加请求拦截器
fetch.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 性能数据上报
    // monitorUnit.startNetWorkRecord(config.url)
    console.log(`请求接口${config.url},请求参数：`, config)
    const app = getApp()
    let { header, data } = config
    data = data || {}
    // 每个页面请求接口的唯一标识
    if (!data.timeStamp) {
      data.timeStamp = new Date().getTime()
    }
    if (app.globalData.token) {
      header['X-AUTH-TOKEN'] = app.globalData.token
    }
    return config
  },
  (error) => {
    //处理请求错误
    return Promise.reject(error)
  }
)

// 添加响应拦截器
fetch.interceptors.response.use(
  (response) => {
    // 请求成功后做些什么
    Log.success(`响应接口${response.config.url}`, '响应参数：', response)
    let { data = {} } = response
    return Promise.resolve(data)
  },
  (error) => {
    // 处理响应错误
      wx.showToast({
        title: JSON.stringify(error),
        icon: 'none',
        duration: 5000
      })
    return Promise.reject(error)
  }
)

export default fetch
