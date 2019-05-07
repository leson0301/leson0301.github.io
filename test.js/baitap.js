// Bài 1: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

function bai1(arr){
  let newArr = [];
  newArr = arr.sort(function(a, b){return b - a});
  return newArr[1];
}
bai1([2, 3, 6, 7, 8]);


// ● Bài 2: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng. 


function bai2(narr){
  let nnewArr = [];
  nnewArr = narr.sort(function(a, b){return b.length - a.length});
  return nnewArr[0];

}

bai2(['trang', 'nam', 'hoangf', '1']);







//● Bài 3: Viết hàm có 2 tham số là 2 chuỗi str và target, dùng để kiểm tra chuỗi str có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false. 
function bai3(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
bai3("Namem","m")




//● Bài 4: Cho 1 mảng bất kỳ. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không. Kết quả trả về true hoặc false. 

function bai4(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i != j){
        if(arr[i] == arr[j]){
          return('true');
        }
      }
    }
  }
  return('false');
}
bai4([1, 4, 5, 6, 7, 1])

//● Bài 5: Viết hàm truyền vào 1 chuỗi là tên thẻ HTML, kiểm tra xem trong file HTML có bao nhiêu thẻ đó. Kết quả trả về là số lượng thẻ (không bao gồm thẻ đóng), nếu không có trả về 0.


function bai5(tagName){
  
	return document.getElementsByTagName(tagName).length;

}