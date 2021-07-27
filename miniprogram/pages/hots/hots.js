import { searchTags,searchSubjects } from "../../api/hots.js";
import Log  from "../../utils/log/index";
Page({
  data: {
    swiperList: [
      {
        id: 0,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
      },
      {
        id: 1,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg",
      },
      {
        id: 2,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
      },
      {
        id: 3,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      },
      {
        id: 4,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg",
      },
      {
        id: 5,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg",
      },
      {
        id: 6,
        type: "image",
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
      },
    ],
    subjects:[],
  },
  onLoad() {
    this._searchTags()
    this._searchSubjects()
  },
  async _searchTags() {
    const res = await searchTags();
    Log.success(res)
  },
  async _searchSubjects() {
    let params = {
      type:'movie',
      tag:'热门',
      page_limit:50,
      page_start:0
    }
    const {subjects=[]} = await searchSubjects({params});
    this.setData({
      subjects
    })
    Log.success(subjects)

  },
});
