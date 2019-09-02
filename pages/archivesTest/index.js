// pages/test/index.js
const check = require('../../moduleJs/check.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    satte:false,
    satte1: false,
    satte2: false,
    satte3: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },//清空聊天记录
  record: function (e) {
    console.log(e);
    let that = this;
    check.Prompting('确认要将陈大文从你的人脉圈中删除吗?删除后陈大文会变回你的2度人脉', true).then(function (res) {
      console.log(res);
     
    })


  },//加入黑名单
  switch2Change: function (e) {
    console.log(e);
    let that = this;
    if (e.detail.value) {
      check.Prompting('加入[黑名单],你不会再收到对方的信息,对方也不能对你使用任何[推荐]功能?', true).then(function (res) {
        console.log(res);
        if (res) {
          that.setData({
            satte: true,
            satte1: true,
            satte2: true,
            satte3: true,
          })
        } else {
          that.setData({
            satte: false,
          })
        }
      })
    }else{
      that.setData({
        satte: false,
        satte1: false,
        satte2: false,
        satte3: false,
      })
    }

  }, 
  complaints: function (e) {
    console.log(e);
    wx.navigateTo({
      url: "/pages/complaintsDetails/index"
    });
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