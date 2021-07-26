Page({

  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    haveGetOpenId: false,
    envId: '',
    openId: '',
    wxContext:''
  },

  onLoad(options) {
    this.setData({
      envId: options.envId
    })
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    })
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      console.log('resp',resp)
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid,
        wxContext:JSON.stringify(resp.result.wxContext)
      })
     wx.hideLoading()
   }).catch((e) => {
      this.setData({
        showUploadTip: true
      })
     wx.hideLoading()
    })
  },

  clearOpenId() {
    this.setData({
      haveGetOpenId: false,
      openId: ''
    })
  },
  getCloudCallSign(){
    wx.cloud.callFunction(
      {   name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getCloudCallSign'
      }}
    ).then((res)=>{
      console.log('getCloudCallSign',res)
    })
  },
  getUrlLink() {
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'selectRecord'
      }
    }).then((resp) => {
      console.log('resp',resp)
      // const url = wx.createBufferURL(resp.result.buffer)
      // console.log(url)
      // this.setData({
      //   codrUrl:url
      // })
   }).catch((e) => {
   
    })
  },


})
