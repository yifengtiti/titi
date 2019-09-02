let chart = null;
import F2 from '../../../f2-canvas/lib/f2';

function initChart(canvas, width, height, F2) {
  console.log(1)
  const data = [{ "year": 1997, "type": "United States", "value": 4.9 }, { "year": 1997, "type": "Florida", "value": 4.8 }, { "year": 1998, "type": "United States", "value": 4.5 }, { "year": 1998, "type": "Florida", "value": 4.3 }, { "year": 1999, "type": "United States", "value": 4.2 }, { "year": 1999, "type": "Florida", "value": 3.9 }, { "year": 2000, "type": "United States", "value": 4 }, { "year": 2000, "type": "Florida", "value": 3.7 }, { "year": 2001, "type": "United States", "value": 4.7 }, { "year": 2001, "type": "Florida", "value": 4.7 }, { "year": 2002, "type": "United States", "value": 5.8 }, { "year": 2002, "type": "Florida", "value": 5.6 }, { "year": 2003, "type": "United States", "value": 6 }, { "year": 2003, "type": "Florida", "value": 5.2 }, { "year": 2004, "type": "United States", "value": 5.5 }, { "year": 2004, "type": "Florida", "value": 4.6 }, { "year": 2005, "type": "United States", "value": 5.1 }, { "year": 2005, "type": "Florida", "value": 3.7 }, { "year": 2006, "type": "United States", "value": 4.6 }, { "year": 2006, "type": "Florida", "value": 3.2 }, { "year": 2007, "type": "United States", "value": 4.6 }, { "year": 2007, "type": "Florida", "value": 4 }, { "year": 2008, "type": "United States", "value": 5.8 }, { "year": 2008, "type": "Florida", "value": 6.3 }, { "year": 2009, "type": "United States", "value": 9.3 }, { "year": 2009, "type": "Florida", "value": 10.4 }, { "year": 2010, "type": "United States", "value": 9.6 }, { "year": 2010, "type": "Florida", "value": 11.1 }, { "year": 2011, "type": "United States", "value": 8.9 }, { "year": 2011, "type": "Florida", "value": 10 }, { "year": 2012, "type": "United States", "value": 8.1 }, { "year": 2012, "type": "Florida", "value": 8.5 }, { "year": 2013, "type": "United States", "value": 7.4 }, { "year": 2013, "type": "Florida", "value": 7.2 }, { "year": 2014, "type": "United States", "value": 6.2 }, { "year": 2014, "type": "Florida", "value": 6.3 }, { "year": 2015, "type": "United States", "value": 5.3 }, { "year": 2015, "type": "Florida", "value": 5.4 }, { "year": 2016, "type": "United States", "value": 4.9 }, { "year": 2016, "type": "Florida", "value": 4.9 }, { "year": 2017, "type": "United States", "value": 4.4 }, { "year": 2017, "type": "Florida", "value": 4.3 }];
  console.log(5)
  console.log(5)
  chart.source(data, {
    year: {
      range: [0, 1],
      ticks: [1997, 1999]
    },
    value: {
      tickCount: 10,
      formatter(val) {
        return val.toFixed(1);
      }
    }
  });

  chart.guide().rect({
    start: [2011, 'max'],
    end: ['max', 'min'],
    style: {
      fill: '#CCD6EC',
      opacity: 0.3
    }
  });
  // chart.guide().text({
  //   position: [2014, 'max'],
  //   content: 'Scott administratio\n(2011 to present)',
  //   style: {
  //     fontSize: 10,
  //     textBaseline: 'top'
  //   }
  // });

  chart.line().position('year*value').color('type', val => {
    if (val === 'United States') {
      return '#ccc';
    }
  });
  chart.render();
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'F2 微信小程序图表组件，你值得拥有~',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    // opts: {
    //   onInit: initChart
    // }
  },
  onLoad(){
    let that=this;
    that.chartComponent = that.selectComponent('#kChart');
    that.chartComponent.init((canvas, width, height) => {
      chart = new F2.Chart({
        el: canvas,
        width,
        height: 300
      });
      that.setData({
        canvas: canvas,
        width: width,
        height: height,
      }, function () {
        initChart(canvas, width, height)
      })
    })
    let data = wx.getStorageSync('userInfo');
    this.setData({
      data: data,
      tempFilePaths: [data.avatarUrl]
    })
  },

  onReady() {
  }
});
