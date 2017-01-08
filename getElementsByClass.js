/**
 * 检查节点是否包含cls属性（应为一个节点可能会有多个class属性值，以空格分隔，其className值是一个长字符串）
 * @param  {[节点]}  ele [检查的节点]
 * @param  {[属性值]}  cls [要查找的class属性值]
 * @return {Boolean}     [找到返回true;否则false]
 */
function hasClass(ele, cls) {
  var clsArray = ele.className.split(/\s+/);     //将属性值的字符串以空格分隔为字符串数组，\s+匹配一个或多个空格
  for(var j=0; j<clsArray.length; j++) {
    if(clsArray[j] === cls) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * 为IE6、7、8封装getElementsByClassName()函数
 * @param  {[节点]} obj [需要查找的节点]
 * @param  {[属性值]} cls [class属性值]
 * @return {[type]} array [返回匹配的DOM元素数组]
 */
function getByClassName(ele, cls) {
  var elements = obj.getElementsByTagName("*"); //获取obj节点内所有后代节点
  var resluts = [];                             //保存获取到的节点数组

  for(var i=0; i<elements.length; i++) {
    if(hasClass(elements[i], cls)) {
      resluts.push(elements[i]);
    }
  }
  return resluts;
}
