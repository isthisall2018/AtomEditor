function atTime() {

}
atTime.prototype={
  getNowDate:function(parms){
    var myDate = new Date();
    var year = myDate.getFullYear()+'';    //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth()+1+'';       //获取当前月份(1-12)
    var day = myDate.getDate()+'';        //获取当前日(1-31)
    if (month.length<2) {
      month='0'+month;
    }
    if (day.length<2) {
      day='0'+month;
    }
    //获取完整年月日
    var _str='';
    if (typeof parms !='string') {
      throw console.error('getNowDate method input parmas type error!');
    }else {
      if (parms.indexOf('-')>0) {
        _str='-';
      }else if (parms.indexOf('/')>0) {
        _str='/';
      }else {
         _str='';
      }
    }
    var newDay = year + _str + month + _str + day;
    return newDay;
  },
  getBankCard:{
    gitHub:function(){
      console.log('i want having sex with you!')
    },
    setValue:function(){
      console.log('i want make love with you agin, how about you?')
    },
    Care:function(){
      return 'how are you doing lately?</br>not bad. what about yourself?</br>i am fine'
    },
  }
}
