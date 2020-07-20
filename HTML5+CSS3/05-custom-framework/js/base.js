function openModal() {
  var modalNode = document.getElementById('modal');
  modalNode.style.display = "block";
  var modalContentNode = document.getElementById('modalContent');
  modalContentNode.className = modalContentNode.className.replace("close-modal-animate", "");
}

function closeModal() {
  var modalNode = document.getElementById('modal');
  var modalContentNode = document.getElementById('modalContent');
  modalContentNode.className = modalContentNode.className + " close-modal-animate";
  setTimeout(function() {
    modalNode.style.display = "none";
  }, 400);
}
// form
var es = document.getElementsByClassName('form-control');
for (var i = 0; i < es.length; i++) {
  es[i].onfocus = function() {
    this.parentNode.className += " control-focus";
  }
  es[i].onblur = function() {
    var val;
    if (this.tagName == "SELECT") {
      val = this.options[this.selectedIndex].text;
    } else {
      val = this.value;
    }
    if (val != '') {
      this.parentNode.className = this.parentNode.className.replace(" control-focus", " control-heiglight");
    } else {
      this.parentNode.className = this.parentNode.className.replace(" control-focus", "");
      this.parentNode.className = this.parentNode.className.replace(" control-heiglight", "");
    }
  }
}

// nav
// 根据自定义属性名称和自定义属性的值获取控件
function selector(attribute, value) {
  // 获取所有包含自定义属性的控件
  var all = document.getElementsByTagName('*');
  // 当属性值等于value时返回控件
  for (var i = 0; i < all.length; i++) {
    var v=all[i].getAttribute(attribute);
    if (v == value) {
      return all[i];
    }
  }
}

var navMenu = selector('data-toggle', 'menu');
var target0 = selector('data-target', 'menu');
navMenu.onclick = function() {
  console.log(target0.style.display);

  if(target0.style.display == 'none'){
    target0.style.display = 'block';
  }else if (target0.style.display == 'block') {
    target0.style.display = 'none';
  }
}
