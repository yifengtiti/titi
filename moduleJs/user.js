/**
 * 用户相关服务
 */
const util = require('util.js');
//const api = require('../config/api.js');
var app = getApp();
// var QQMapWX = require('../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
//封装获取用户最近地址
function RecentlyDddsite(){
  qqmapsdk = new QQMapWX({
    key: 'WWSBZ-UDMK4-LMCUA-DYNJU-LULQQ-B7BWD' //自己的key秘钥 http://lbs.qq.com/console/mykey.html 在这个网址申请
  });
  return new Promise(function (resolve, reject) {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (data) {
            var s = data.result.address_component;
            var oData = [];
            oData[0] = s.province;
            oData[1] = s.city;
            oData[2] = s.district;
            resolve(oData);
          }
        });
      },fail:function(){
        resolve(['广东省', '广州市', '海珠区'])//用户点击拒绝授权
      }
    })
  })

}
/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function (resolve, reject) {
    wx.checkSession({
      success: function () {
        resolve(true);
      },
      fail: function () {
        reject(false);
      }
    })
  });
}

/**
 * Promise封装wx.login
 */
function login() {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}
//授权登录

/**
 * 调用微信登录
 */
function loginByWeixin(userInfo,scene) {
  console.log(scene +"scene")
  return new Promise(function (resolve, reject) {
    return login().then((res) => {
      //登录远程服务器
      util.request(api.AuthLoginByWeixin, { code: res.code, userInfo: userInfo, scene: scene}, 'POST').then(res => {
        if (res.errno === 0) {
          //存储用户信息
          //res.data.userInfo.no="5860958";
          wx.setStorageSync('userInfo', res.data.userInfo);
          wx.setStorageSync('token', res.data.token);
          wx.setStorageSync('shopId', res.data.shopId);
          wx.setStorageSync('shiyuanGoodsId', res.data.shiyuanGoodsId);
          wx.setStorageSync('inviteId', res.data.inviteId);
          console.log(res);
          resolve(res);
        } else {
          reject(res);
        }
      }).catch((err) => {
        reject(err);
      });
    }).catch((err) => {
      reject(err);
    })
  });
}

/**
 * 判断用户是否登录
 */
function checkLogin() {
  return new Promise(function (resolve, reject) {
    if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')) {
      checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });
    } else {
      reject(false);
    }
  });
}

/**
 * 重新登录
 */
function toLogin() {
  // 查看是否授权
  wx.getSetting({
    success: function (res) {
      console.log(res);
      console.log("进入222");
      if (res.authSetting['scope.userInfo']) {
        wx.getUserInfo({
          success: function (res) {
            //从数据库获取用户信息
            // that.queryUsreInfo();
            //用户已经授权过
            // wx.navigateTo({
            //   url: "/pages/index/index"
            // });
            console.log(res);
            console.log("进入333");
            user.checkLogin().catch(() => {
              user.loginByWeixin(res, '').then(res => {
                app.globalData.hasLogin = true;
                wx.navigateBack({
                  delta: 1,
                })
              }).catch((err) => {
                app.globalData.hasLogin = false;
                util.showErrorToast('微信登录失败');
              });
            });
          }
        });
      }else{
        wx.navigateTo({
          url: '/pages/preIndex/preIndex'
        });
      }
    }
  })
}


module.exports = {
  loginByWeixin,
  checkLogin,
  RecentlyDddsite,
  toLogin
};