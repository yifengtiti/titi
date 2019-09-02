// pages/notice/index.js
const check = require('../../moduleJs/check.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sRefusedState:false,
    acceptState:false,
    noticeState:1,//人脉通知状态
    noticeSecondaryState:1,
    recommendedState:3,//推荐通知状态
    array: ['等待接受的邀请', '已接受的邀请'],
    pickerText: '等待接受的邀请'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = wx.getStorageSync('userInfo');
    this.setData({
      data: data,
      tempFilePaths: [data.avatarUrl]
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      pickerText: this.data.array[e.detail.value]
    })
  }
  ,//拒绝邀请
  sRefused:function(){
    let that=this;
    check.Prompting('确认要拒绝该邀请吗？', true).then(function(e){
      if(e){
        that.setData({
          sRefusedState:true
        })
      }
        console.log(e);
    })
  },//接受邀请
  take:function(e){
    console.log(e);
    let that = this;
    if(e.currentTarget.dataset.id==1){
      check.Prompting('确认要拒绝该礼物吗？', true).then(function (e) {
        if (e) {
          that.setData({
            acceptState: true
          })
        }
      })
    }else{
      that.setData({
        acceptState: true

      })
    }
    
    
  },//通知切换导航
  selected:function(e){
    this.setData({
      noticeState: e.currentTarget.dataset.state
    })
  },
  noticeSecondary:function(e){
    this.setData({
      noticeSecondaryState: e.currentTarget.dataset.state
    })
  },
  recommended: function (e) {
    this.setData({
      recommendedState: e.currentTarget.dataset.state
    })
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