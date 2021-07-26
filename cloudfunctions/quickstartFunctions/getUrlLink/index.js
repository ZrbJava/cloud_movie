const cloud = require('wx-server-sdk')
const fs = require('fs')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.get({
        "path": 'page/index/index',
        "width": 430
      })
    return result
  } catch (err) {
    console.log('err',err)
    return err
  }
}