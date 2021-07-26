const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  console.log('cloud',cloud)
  const wxContext = cloud.getWXContext()
  console.log('wxContext11',wxContext)

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    wxContext,
  }
}