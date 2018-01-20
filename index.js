var alldata = '严腾,何泓渊,张亚玮,袁迪,李静月,郑宝峰,张玮康,党丹丹,王嘉豪,王倩,黄燕燕,李岩,寇苗娟,王浩,葛甜,王蕾,廖雪青,贾惠丽,郑文卓,司鑫,张甜,杨婕,傅玮萍'

var alldataarr = alldata.split(',')

var num = alldataarr.length - 1
var timer

function change () {
  document.getElementById('oknum').value = alldataarr[GetRnd(0, num)]
}

function start () {
  clearInterval(timer)
  timer = setInterval('change()', 46) //随机数据变换速度，越小变换的越快
}

function ok () {
  clearInterval(timer)
  //以下代码表示获得奖的，不能再获奖了。  重置刷新页面即可。
  alldata = alldata.replace(document.getElementById('oknum').value, '').replace(',,', ',')

  // 去掉前置，最末尾的,
  if (alldata.substr(0, 1) == ',') {
    alldata = alldata.substr(1, alldata.length)
  }

  if (alldata.substr(alldata.length - 1, 1) == ',') {
    alldata = alldata.substring(0, alldata.length - 1)
  }

  alldataarr = alldata.split(',')
  num = alldataarr.length - 1
}

function GetRnd (min, max) {
  return parseInt(Math.random() * (max - min + 1))
}