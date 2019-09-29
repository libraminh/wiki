# Basic Algorithm Scripting

## Reverse a String

Cho một string, nhiệm vụ của bạn là phải đảo ngược lại string đó. Ví dụ: Hello => olleH.

``` js
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
```

## Factorialize a Number

Tính giai thừa của một số tự nhiên n!. Ví dụ: __5! = 5 * 4 * 3 * 2 * 1.__

```js
function factorialize(num) {
  if(num == 0) return 1;

  for(var i = num - 1; i >= 1; i--)
    num *= i;

  return num;
}

factorialize(5);
```

## Check for Palindromes

Kiểm tra xem một string có phải là __palindrome__ hay không? (Một string được gọi là __palindrome__ khi và chỉ khi đọc ngược và đọc xuôi đều giống nhau, với điều kiện bỏ qua các dấu câu, kí tự đặc biệt, dấu cách). Ví dụ: __boob, eye__,...

``` js
function palindrome(str) {
  var newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var newStrReverse = newStr.split("").reverse().join("");
  return newStr === newStrReverse;
}

palindrome("eye");
```

## Find the Longest Word in a String

Tìm độ dài của từ dài nhất trong câu

``` js
function findLongestWord(str) {
  var longestStr = str.split(' ').reduce((previousWord, currentWord) => {
    return currentWord.length > previousWord.length ? currentWord : previousWord;
  }, '')
  return longestStr; // longestStr.length for return number of length
}

findLongestWord("The quick brown fox jumped over the lazy dog");
```

## Title Case a Sentence

Trả về string với các từ có chữ cái đầu tiên viết hoa. Ví dụ: __I'm a little tea pot => I'm A Little Tea Pot.__

``` js
function titleCase(str) {
  var words = str.split(" ");

  var newWords = words.map(function(word){
    var chars = word.split("");

    chars[0] = chars[0].toUpperCase();
    for(var i = 1; i < chars.length; i++) {
      chars[i] = chars[i].toLowerCase();
    }

    return chars.join("");
  });

  return newWords.join(" ");
}

titleCase("I'm a little tea pot");
```

## Return Largest Numbers in Arrays

Trả về một mảng gồm các số lớn nhất của mỗi sub-array.

``` js
function largestOfFour(arr) {
  var answer = [];
  for(var i = 0; i < arr.length; i++) {
    var max = 0;
    for(var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) max = arr[i][j];
    }
    answer.push(max);
  }
  return answer;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 
```

## Confirm the Ending

Kiểm tra xem một string có được kết thúc bởi một string khác.

``` js
function confirmEnding(str, target) {
  return target === str.substr(-target.length);
}

confirmEnding("Bastian", "n");
```

## Repeat a string repeat a string

Lặp lại string với số lần cho trước.

``` js
function repeatStringNumTimes(str, num) {
  var answer = "";
  for(var i = 0; i < num; i++)
    answer += str;
  return answer;
}

repeatStringNumTimes("abc", 3);
```

## Truncate a string

Rút gọn string nếu nó dài quá n kí tự.

``` js
function truncateString(str, num) {
  if(str.length <= num) return str;
  if(num <= 3) return str.slice(0, num) + "...";
  return str.slice(0, num - 3) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
```

## Chunky Monkey

Chia mảng thành các phần với độ dài n cho trước.

``` js
function chunkArrayInGroups(arr, size) {
  var answer = [];
  for(var i = 0; i < arr.length; i += size) {
    answer.push(arr.slice(i, i + size));
  }
  return answer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

## Slasher Flick

Trả về những phần tử của mảng sau khi đã cắt đi n phần tử đầu tiên.

``` js
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
```

## Mutations

Kiểm tra xem trong 1 string có chứa tất cả các kí tự của string thứ 2 hay không.

``` js
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for(var i = 0; i < arr[1].length; i++) {
    if(arr[0].indexOf(arr[1][i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
```

## Falsy Bouncer

Bỏ đi tất cả các giá trị __falsy__ khỏi một mảng (giá trị __falsy__ là false, null, 0, "", undefined và NaN).

``` js
function bouncer(arr) {
  var answer = arr.filter(function(val) {
    return ((typeof(val) == 'string' && val != "") ||
            (val != false && val != null && val != 0 && val != undefined && !isNaN(val)));
  });
  return answer;
}

bouncer([7, "ate", "", false, 9]);
```

## Seek and Destroy

Bỏ đi tất cả các phần tử của mảng giống với tập cho trước.

``` js
function destroyer(arr) {
  var args = arguments;
  var answer = arr.filter(function(val){
    for(var i = 1; i < args.length; i++) {
      if(val === args[i]) return false;
    }
    return true;
  });
  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

## Where do I belong

Tìm ra vị trí có chỉ số nhỏ nhất phù hợp để chèn một số cho trước vào.

``` js
function getIndexToIns(arr, num) {
  var newArr = arr.sort(function(a, b){
    return a - b;
  });
  var index = 0;
  while(true) {
    if(index == newArr.length || newArr[index] >= num) return index;
    index++;
  }
}

getIndexToIns([40, 60], 50);
```

## Caesars Cipher

Giải mã string cho trước sử dụng __ROT13.__

``` js
function rot13(str) { // LBH QVQ VG!
  var arr = str.split("");
  var code, delta;
  for(var i = 0; i < arr.length; i++) {
    code = arr[i].charCodeAt(0) - 13;

    if (arr[i] >= "A" && arr[i] < "N") {
      delta = "A".charCodeAt(0) - code;
      code = "Z".charCodeAt(0) - delta + 1;
      arr[i] = String.fromCharCode(code);
    } else if (arr[i] >= "N" && arr[i] <= "Z") {
      arr[i] = String.fromCharCode(code);
    }
  }
  return arr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
```

