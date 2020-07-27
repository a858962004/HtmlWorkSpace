window.onload = function() {
  addListen('blur', bindObj('empCode'), function() {
    validateEmpCode();
  });
  addListen('blur', bindObj('empName'), function() {
    validateEmpName();
  });
  addListen('blur', bindObj('empJob'), function() {
    validateEmpJob();
  });
  addListen('blur', bindObj('empDate'), function() {
    validateEmpDate();
  });
  addListen('blur', bindObj('empPay'), function() {
    validateEmpPay();
  });
  addListen('blur', bindObj('empCom'), function() {
    validateEmpCom();
  });

  addListen('submit', bindObj('empForm'), function(e) {
    if (validateEmpCode() && validateEmpName() && validateEmpJob() &&
      validateEmpDate() && validateEmpPay() && validateEmpCom()) {
      this.submit;
    } else {
      stopForm(e);
    }
  });

  addListen('click', bindObj('resetBtn'), function() {
    initAllInputStyle();
  });

}

function validateEmpCode() {
  return validateRegex('empCode', /^\d{4}$/);
}

function validateEmpName() {
  return validateEmpty('empName');
}

function validateEmpJob() {
  return validateEmpty('empJob');
}

function validateEmpDate() {
  return validateRegexDate('empDate');
}

function validateEmpPay() {
  // [0-9]{1,5}(\.[0-9]{1,2})? 小数1-2位，整数1-5位 非0开头
  return validateRegex('empPay', /^[1-9][0-9]{1,4}(\.[0-9]{1,2})?$/);
}

function validateEmpCom() {
  // [0-9]{1,5}(\.[0-9]{1,2})? 小数1-2位，整数1-5位 非0开头
  return validateRegex('empCom', /^[1-9][0-9]{1,4}(\.[0-9]{1,2})?$/);
}

/**
 * [initAllInputStyle 初始化所有input样式]
 * @return {[type]} [description]
 */
function initAllInputStyle() {
  var inputs = document.getElementsByTagName('INPUT');
  for (var i = 0; i < inputs.length; i++) {
    initForm(inputs[i].id);
  }
}
