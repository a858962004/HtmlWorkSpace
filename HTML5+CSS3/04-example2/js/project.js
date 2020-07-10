var index = 1;

// 隐藏掉所有的slider
function hideAll() {
  var silders = document.getElementsByClassName('silder');
  for (var i = 0; i < silders.length; i++) {
    silders[i].style.display = "none";
  }
}

function changeActivt(n) {
  var allDots = document.getElementsByClassName('dots');
  for (var i = 0; i < allDots.length; i++) {
    allDots[i].className = allDots[i].className.replace(" active", "");
  }
  allDots[n - 1].className = allDots[n - 1].className + " active";
}

function go(n) {
  var silders = document.getElementsByClassName('silder');
  hideAll();
  silders[n - 1].style.display = "block";
  changeActivt(n)
  index = n;
}

function changePage(n) {
  // n==1向前翻页  n==0向后翻页
  if (n == -1) {
    index--;
  }
  if (n == 0) {
    index++;
  }
  if (index < 1) {
    index = 3;
  }
  if (index > 3) {
    index = 1;
  }
  go(index);
}
