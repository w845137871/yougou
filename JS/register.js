// JavaScript Document

// 获取所有input框
var inputs = document.getElementsByTagName('input');
// 为每个input框添加失去焦点事件
for (var i = 0; i < inputs.length - 1; ++i) {
  inputs[i].onblur = inputBlur;
}
function inputBlur() {
  var name = this.name;           // 获取输入框的name值
  var val = this.value;           // 获取输入框的value值
  var tips = this.placeholder;    // 获取输入框中的提示信息
  var tips_obj = this.parentNode.nextSibling.nextSibling.firstChild;  // 获取提示信息显示的div元素对象
  // 1. 去掉两端的空白字符
  val = val.trim();
  // 2. 文本框内容为空，给出提示信息
  if (!val) {
    error(tips_obj, '输入框不能为空');
    return false;
  }
  // 3. 获取正则匹配规则和提示信息
  var reg_msg = getRegMsg(name, tips);
  // 4. 检测是否否he正则匹配
  if (reg_msg['reg'].test(val)) {
    // 匹配成功，显示成功的提示信息
    success(tips_obj, reg_msg['msg']['success']);
  } else {
    // 匹配失败，显示失败的提示信息
    error(tips_obj, reg_msg['msg']['error']);
  }
}
// 根据input的name值，设置正则规则及提示信息
function getRegMsg(name, tips) {
  var reg = msg = '';
  switch (name) {
    case 'username':
      reg = /^[a-zA-Z]{4,16}$/;
      msg = {'success': '用户名输入正确', 'error': tips};
      break;
    case 'pwd':
      reg = /^\w{4,10}$/;
      msg = {'success': '密码输入正确', 'error': tips};
      break;
    case 'repwd':
      var con = document.getElementsByTagName('input')[1].value;
      reg = RegExp("^" + con + "$");
      msg = {'success': '两次密码输入正确', 'error': '两次输入的密码不一致'};
      break;
    case 'tel':
      reg = /^1[0-9]{10}$/;
	  //  /^1\d{10}$/
/*
 表达式写法是：/^1\d{10}$/
解析：^1 以1开头，\d表示数字，\d{10}表示数字出现10次，加上前面以1开头，正好是11个数字，X$表示以X结尾，这里用$表示后面没有了，11个数字后已经是匹配字符串的结尾。
*/
      msg = {'success': '手机号码输入正确', 'error': tips};
      break;
    case 'email':
      reg = /^(\w+(\_|\-|\.)*)+@(\w+(\-)?)+(\.\w{2,})+$/;
	  /*
	  \w任意大小写英文字母 0-9数字 下划线  +为至少出现1个以上字符
[-+.]\w+   任意包含  - + .  及 \w字符的组合出现0次或多次

@  固定符号

\w+  出现至少1次以上 \w的字符
[-.]\w+  出现零次或多次这种组合的字符

\.   固定符号
	  */
	  
      msg = {'success': '邮箱输入正确', 'error': tips};
      break;
    }
    return {'reg': reg, 'msg': msg};
}
// 成功
function success(obj, msg) {
  obj.className = 'success';
  obj.innerHTML = msg;
}
// 失败
function error(obj, msg) {
  obj.className = 'error';
  obj.innerHTML = msg + '，请重新输入';
}