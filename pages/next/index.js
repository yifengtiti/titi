// pages/next/index.js
const check = require('../../moduleJs/check.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    customItem: '全部',
    disabled: false,
    time: "获取验证码",
    currentTime: 60,
    sports:'',//运动项目
    role:'',//角色
    phone:'',//手机号
    sVerification:'',//验证码
    gender:'',//性别
    city:'',//城市
    introduce:'',//自我介绍
    sQqNumber:"",//qq号码
    cityList:['男','女']
  },
  getPhoneNumber(e) {
    console.log(e)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },//运动项目
  sports: function (e) {

    this.setData({
      sports: e.detail.value
    })
  },//角色
  role: function (e) {

    this.setData({
      role: e.detail.value
    })
  },//手机号
  phone: function (e) {;
    this.setData({
      phone: e.detail.value
    })
  },//验证码
  sVerification: function (e) {
    this.setData({
      sVerification: e.detail.value
    })
  },//性别
  gender: function (e) {
    
    let that=this;
    this.setData({
      gender: that.data.cityList[e.detail.value]
    })
  },
//城市
  city: function (e) {
    console.log(e);
    this.setData({
      city: e.detail.value
    })
  },
  //qq号码
  sQqNumber: function (e) {
    this.setData({
      sQqNumber: e.detail.value
    })
  },
  //自我介绍
  introduce: function (e) {
    this.setData({
      introduce: e.detail.value
    })
  },
  
  //获取验证码
  getBtn: function () {
    let that = this;
    if (!(/^1[34578]\d{9}$/.test(that.data.sPhone))) {
      check.Prompting('手机号不正确，请重新输入', false)
      return
    }
    let currentTime = that.data.currentTime;
    that.setData({
      time: currentTime + '秒',
      disabled: true,
      // referenceCode: res.referenceCode
    })
    let interval = setInterval(function () {
      that.setData({
        time: (currentTime - 1) + '秒'
      })
      currentTime--;
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新获取',
          currentTime: 60,
          disabled: false
        })
      }
    }, 1000)

  },
  sbtn:function(){
    wx.navigateTo({
      url: '../archives/index'
    })
    
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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
    wx.login({
      success(res) {
        if (res.code) {

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
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