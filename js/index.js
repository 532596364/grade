//判断是几等生
function query(idName) {
	var id = idName.substring(1);
	var val = document.getElementById(id).value;
	if (val == "") {
		alert("请输入分数");
	}else if (isNaN(val)) {
		alert("请输入数字");
	}else if (val > 100) {
		alert("请输入100以下的数字");
	}else if (val >=90) {
		alert("你是一等生");
	}else if (val >= 80) {
		alert("你是二等生");
	}else if (val >= 70) {
		alert("你是三等生");
	}else if (val >= 60) {
		alert("你是四等生");
	}else if (val >= 0) {
		alert("你是差生");
	}else{
		alert("请输入0-100以内的数字");
	}
}