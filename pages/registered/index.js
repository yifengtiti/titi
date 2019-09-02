// pages/registered/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: true,
    stateRadio: false,
    sNeme:"",
    next: false,
    tempFilePaths:[]
  },
  popBtn: function () {
    this.setData({
      state: true,
      stateRadio: true
    })
  },
  stateRadio: function () {
    let that = this;
    let stateRadio = true;
    if (that.data.stateRadio) {
      stateRadio = false
    }
    that.setData({
      stateRadio: stateRadio
    })
  },
  terms: function () {
    this.setData({
      state: false
    })
  },//监听输出框名字
  sNeme:function(e){
    this.setData({
      sNeme: e.detail.value
    })
    console.log(e);
  },//进行注册流程
  next:function(){
    this.setData({
      next:true
    })
  },//选择图片
  upload: function () {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res);
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          tempFilePaths: tempFilePaths
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let data = wx.getStorageSync('userInfo');
    this.setData({
      data: data,
      tempFilePaths: [data.avatarUrl]
    })
  },
  registered:function(){
    wx.navigateTo({
      url: '../next/index'
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})