function copy() {
  var text = document.getElementById("noidung").value;
  var numble_copy = document.getElementById("solan").value;
  var copytext = "";
  for(var i=0; i<numble_copy; ++i) {
  	copytext = copytext + text+ "\n"
  }
  el = document.getElementById('textae')
  el.value = copytext;
  el.focus()
  el.select()
  document.execCommand('copy');
  return false;
}
