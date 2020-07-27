window.onload = function() {
  addListen('blur', bindObj('unitPrice'), function() {
    validateUnitPrice();
  });
  addListen('blur', bindObj('rent'), function() {
    validateRent();
  });
  addListen('blur', bindObj('proPrice'), function() {
    validateProPrice();
  });
  addListen('blur', bindObj('area'), function() {
    validateArea();
  });
  addListen('blur', bindObj('interest'), function() {
    validateInterest();
  });

  //重置
  addListen('click', bindObj('resetBtn'), function() {
    initCalForm();
    initSelect();
    initResultForm();
  });

  //计算
  addListen('click', bindObj('calBtn'), function() {
    var unitPrice = parseFloat(bindObj('unitPrice').value);
    var rent = parseFloat(bindObj('rent').value);
    var proPrice = parseFloat(bindObj('proPrice').value);
    var area = parseFloat(bindObj('area').value);
    var interest = parseFloat(bindObj('interest').value);
    var selectIndex = bindObj('firstPayScale').selectedIndex;
    var firstPayScale = parseInt(bindObj('firstPayScale').options[selectIndex].value);
    //首付金额=平米单价*面积*首付比例
    var fistPay = unitPrice * area * firstPayScale / 100;
    bindObj('firstPay').value = fistPay.toFixed(2);//把数字转换为字符串，结果的小数点后有指定位数的数字：
    //贷款总额=平米单价*面积*（100%-首付比例
    var allPay = unitPrice * area * (100 - firstPayScale) / 100;
    bindObj('allPay').value = allPay.toFixed(2);
    //每月支付利息=贷款总额*房贷利息/12
    var monthInterest = allPay * interest / 12;
    bindObj('monthInterest').value = monthInterest.toFixed(2);
    //每月租金=租金*面积
    var monthRent = rent * area;
    bindObj('monthRent').value = monthRent.toFixed(2);
    //每月物业费=物业费*面积
    var monthPro = proPrice * area;
    bindObj('monthPro').value = monthPro.toFixed(2);
  })


}


function validateUnitPrice() {
  //非0开头，最多两位小数
  return validateRegex('unitPrice', /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/);
}

function validateRent() {
  return validateRegex('rent', /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/);
}

function validateProPrice() {
  return validateRegex('proPrice', /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/);
}

function validateArea() {
  return validateRegex('area', /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/);
}

function validateInterest() {
  return validateRegex('interest', /^[0](\.\d+)?$/);
}

/**
 * [initCalForm 重置calForm样式]
 * @return {[type]} [description]
 */
function initCalForm() {
  var calForm = bindObj('calForm');
  var calInputs = calForm.getElementsByTagName('INPUT');
  for (var i = 0; i < calInputs.length; i++) {
    initForm(calInputs[i].id);
  }
}

/**
 * [initSelect 重置下拉选择,默认选择第四个选项]
 * @return {[type]} [description]
 */
function initSelect() {
  var select = bindObj('firstPayScale');
  var options = select.getElementsByTagName('OPTION');
  for (var i = 0; i < options.length; i++) {
    options[i].selected = false;
  }
  options[3].selected = true;
}

/**
 * [initResultForm 重置resultForm样式]
 * @return {[type]} [description]
 */
function initResultForm() {
  var resultForm = bindObj('resultForm');
  var resultInputs = resultForm.getElementsByTagName('INPUT');
  for (var i = 0; i < resultInputs.length; i++) {
    resultInputs[i].value = '0';
  }
}
