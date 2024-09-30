'use strict';


const numberInput = document.getElementById('number');

// パスワードで利用する文字
const charset = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + '!$-()./:=?[]@^+{}';

// パスワードを作成：XSS脆弱性の対策 / パスワードの脆弱性の対策のコードを利用
function password() {
  const numberValue = numberInput.value;
  let password = '';
  for (let i = 0; i < numberValue; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
}

// パスワード作成するボタン
function makeBtn() {
  document.getElementById("password").value = password();
}

// 生成したパスワードをコピーするボタン
function copyBtn() {
  const txt = document.getElementById("password").value;
  navigator.clipboard.writeText(txt);
}

// 生成したパスワードと桁数をクリアするボタン
function clearBtn() {
  document.getElementById("password").value = "";
  document.getElementById("number").value = "";
}
