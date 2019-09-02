// pages/archives/index.js
const check = require('../../moduleJs/check.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    important:"important1"
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
  },//重要人脉
  important:function(e){
    console.log(e.currentTarget.dataset.img);
    // return;
    let img = "important1"
    if (e.currentTarget.dataset.img == "important1"){
      img = "important2"
      check.Prompting('已标签对方为 [重要人脉]', false,"#4473C5")
    }else{
      check.Prompting('已取消对方为 [重要人脉]', false,"#4473C5")
    }
    this.setData({
      important: img
    })
  },
  common:function(){
    wx.navigateTo({
      url: "/pages/common/index"
    });
  },
  recommended:function(){
    wx.navigateTo({
      url: "/pages/recommended/index"
    });
  },
  test:function(){
    wx.navigateTo({
      url: "/pages/archivesTest/index"
    });
  },
  chat:function(){
    wx.navigateTo({
      url: "/pages/chat/index"
    });
  },
  return:function(){

    wx.switchTab({
      url: '/pages/index/index',
      success: function (res) {
      },
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