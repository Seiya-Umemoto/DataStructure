var n = "";

function notice(msg) { alert(msg); }
function numberBtnHandler(number) { n += number; setText(); }
function setText() { document.getElementById("textBox").value = n; }
function getText() { return n; }
function OpBtnHandler(id) { if(id != "-" && n == "") { notice("WTF"); return; } n += id; setText(); }
function reset() { n = ""; setText(); }
function calculate() { try { n = eval(getText()); setText(n); } catch (e) { notice("연산 식이 잘못되었어요! :/"); } }