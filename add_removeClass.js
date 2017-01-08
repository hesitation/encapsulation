/**
 * 判断传入的ele节点是否包含为cls的class属性值
 * @param  {Object}  ele [DOM element]
 * @param  {String}  cls [检查的属性值]
 * @return {Boolean}     [包含返回true;否则false]
 */
function haveClass(ele, cls) {
  //RegExp("(\\s|^)" + cls +"\\s|$")  匹配前后带有空格的cls属性值
  //match()返回一个布尔值，匹配到返回true;否则false
  return ele.className.match(new RegExp("(\\s|^)" + cls +"\\s|$"));
}

/**
 * 为指定节点ele删除指定的属性值cls
 * @param  {Object} ele [节点]
 * @param  {String} cls [要删除的属性]
 * @return {Undefined}     [没有返回值]
 */
function removeClass(ele, cls) {
  if(haveClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls +"\\s|$");
    //将匹配到的class属性值替换为一个空格（如果有多个属性），或者空字符串
    ele.className = ele.className.replace(reg, " ");
  }
}

/**
 * 为指定节点ele添加指定的属性值cls
 * @param  {[object]} ele [节点]
 * @param  {[string]} cls [要添加的属性]
 * @return {[undefined]}     [没有返回值]
 */
function addClass(ele, cls) {
  //如果没有这个属性，便用字符串拼接的方式实现class属性值的添加
  if(!haveClass(ele, cls)) {
    ele.className += " " + cls;
  }
}
