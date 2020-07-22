/**
 * [setSuccessStyle 设置验证成功时的样式]
 * @param {[type]} obj [对象]
 */
function setSuccessStyle(obj) {
  var spanObj = document.getElementById(obj.id + "Span");
  obj.className = "inputSuccess";
  spanObj.innerHTML = "√"; //设置元素内容
  spanObj.style.color = "green";

}

/**
 * [setFailureStyle 设置验证失败时的样式]
 * @param {[type]} obj [对象]
 */
function setFailureStyle(obj) {
  var spanObj = document.getElementById(obj.id + "Span");
  obj.className = "inputFailure";
  spanObj.innerHTML = "x"; //设置元素内容
  spanObj.style.color = "red";
}

/**
 * [validateEmpty 非空判断]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateEmpty(objId) {
  var obj = document.getElementById(objId);
  if (obj != null) {
    if (obj.value != "") { //数据不为空
      setSuccessStyle(obj);
      return true;
    } else { //数据为空
      setFailureStyle(obj);
      return false;
    }
  }
  setFailureStyle(obj);
  return false;
}
/**
 * [validateRegex 正则判断]
 * @param  {[type]} objId [元素对象id]
 * @param  {[type]} regex [正则表达式 ]
 * @return {[type]}       [description]
 */
function validateRegex(objId, regex) {
  var obj = document.getElementById(objId);
  if (validateEmpty(objId)) {
    if (regex.test(obj.value)) {
      setSuccessStyle(obj);
      return true;
    } else {
      setFailureStyle(obj);
      return false;
    }
  }
  setFailureStyle(obj);
  return false;
}

/**
 * [validateRepeat 重复判断]
 * @param  {[type]} oldObjId [原元素id]
 * @param  {[type]} newObjId [目标元素id]
 * @return {[type]}          [description]
 */
function validateRepeat(oldObjId, newObjId) {
  var oldObj = document.getElementById(oldObjId);
  var newObj = document.getElementById(newObjId);
  if (validateEmpty(newObjId)) {
    if (oldObj.value == newObj.value) {
      setSuccessStyle(newObj);
      return true;
    } else {
      setFailureStyle(newObj);
      return false;
    }
  }
  setFailureStyle(newObj);
  return false
}

/**
 * [validateRegexEmail 匹配邮箱]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexEmail(objId) {
  return validateRegex(objId, /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/);
}

/**
 * [validateRegexURL 匹配网址URL]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexURL(objId) {
  return validateRegex(objId, /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/);
}

/**
 * [validateRegexMobile 匹配手机（国内）]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexMobile(objId) {
  return validateRegex(objId, /^0?(13|14|15|17|18|19)[0-9]{9}$/);
}

/**
 * [validateRegexPhone 匹配电话号码（国内）]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexPhone(objId) {
  return validateRegex(objId, /^[0-9-()（）]{7,18}$/);
}

/**
 * [validateRegexPhone 匹配电话号码（国内）]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexPhone(objId) {
  return validateRegex(objId, /^[0-9-()（）]{7,18}$/);
}

/**
 * [validateRegexInteger 匹配整数]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexInteger(objId) {
  return validateRegex(objId, /^-?[1-9]\d*$/);
}

/**
 * [validateRegexFloat 匹配浮点数]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexFloat(objId) {
  return validateRegex(objId, /^-?([1-9]\d*.\d*|0.\d*[1-9]\d*)$/);
}

/**
 * [validateRegexDate 匹配格式日期]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexDate(objId) {
  return validateRegex(objId, /^\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}$/);
}

/**
 * [validateRegexPostCode 匹配邮政编码]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexPostCode(objId) {
  return validateRegex(objId, /^\d{6}$/);
}
/**
 * [validateRegexIDCard 匹配身份证号]
 * @param  {[type]} objId [元素id]
 * @return {[type]}       [description]
 */
function validateRegexIDCard(objId) {
  return validateRegex(objId, /^\d{17}[\d|x]|\d{15}$/);
}

/**
 * [组织表单提交]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function stopForm(e) {
  if (e && e.preventDefault) { //符合W3C的标准下
    e.preventDefault(); //阻止浏览器的动作
  } else { //专门针对IE浏览器的处理
    window.event.returnValue = false;
  }
}

function initForm(objId) {
  var obj = document.getElementById(objId);
  var spanObj = document.getElementById(objId + "Span");
  obj.className = 'init';
  obj.value="";
  spanObj.innerHTML = '';
}
