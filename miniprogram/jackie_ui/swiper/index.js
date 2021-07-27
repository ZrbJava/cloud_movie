// jackie_ui/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  properties: {
    dotStyle:{
      type: Boolean,
      value: true
    },
    curIndex:{
      type: Number,
      value: 0,
      observer(val){
        this.setData({
          _curIndex:val
        })
        console.log('curIndex',val)
      }
    },
    swiperList:{
      type: Array,
      value:  [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }, {
        id: 4,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    _curIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e){
      this.setData({
        _curIndex: e.detail.current
      })
    }
  }
})
