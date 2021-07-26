const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  const cloudCallSignRes = await cloud.getCloudCallSign({
    parameterList: ['a=1', 'b=2']
  })
  console.log('cloudCallSignRes',cloudCallSignRes)

  return {
    cloudCallSignRes
  }
}