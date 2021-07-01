
  window.addEventListener("load", function(event) {
    var list = document.querySelectorAll('script[type="html"]');
    for(var i = 0 ; i < list.length; i++) {
      console.log(list[i].innerHTML);
      var c = document.createElement('pre');
      c.className = "html-code";
      c.innerText = list[i].innerHTML;
      c.style.background = 'gray';
      c.style.color = 'white';
      c.style.padding = '0 10px';
      c.style.display = 'inline-block';
      list[i].parentNode.insertBefore(c,list[i].nextSibling);
    }
  });