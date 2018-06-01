//annonce a variable to replace getElementById()
function byId(id){
  return typeof(id) === "string"?document.getElementById(id):id;
}


//gobal variable
var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("span"),
    prev = byId("prev"),
    next = byId("next"),
    len = pics.length,
    menu = byId("menu-content"),
    subMenu = byId("sub-menu"),
    innerBox = subMenu.getElementsByClassName("inner-box"),
    menuItems = menu.getElementsByClassName("menu-item");
    //console.log(len);

function slideImg(){
  var main = byId("main");
  //onmouseover clear timer, onmouseout continue
  main.onmouseover = function(){
    //clear timer
    if(timer) clearInterval(timer);
  }
  main.onmouseout = function(){
    timer = setInterval(function(){
      index++; //len = 3 0 1 2
      if(index >= len){
        index = 0;
      }
      // change image
      changeImg();
    }, 3000);
  }
  // defaut: trigger onmouseout
  main.onmouseout();

  // circle through dots, then annonce event:click dots button change image
  for(var d=0;d<len;d++){
    //annonce a variable as index of span
    dots[d].id = d;
    dots[d].onclick = function(){
      //change index as span[number]
      index = this.id;
      //this.className = "active";
      //call changeImg function
      changeImg();
    }
  }
    // next image
    next.onclick = function(){
      index++;
      if(index >= len) index= 0;
      changeImg();
    }
    // previous image
    prev.onclick = function(){
      index--;
      if(index < 0) index=len-1;
      changeImg();
    }

    // Nav Menu
    // cycle menu-items
    for(var m=0;m<menuItems.length;m++){
        //define a variable for each menu-items, ad index
        menuItems[m].setAttribute("data-index",m);
        menuItems[m].onmouseover = function(){
          subMenu.className = 'sub-menu';
          var idx = this.getAttribute("data-index");
          //cycle through inner-box and hide it
          for(var j=0;j<innerBox.length;j++){
            innerBox[j].style.display = "none";
            menuItems[j].style.background = "none";
          }
          menuItems[idx].style.background = 'rgba(255,255,255,0.1)';
          innerBox[idx].style.display = 'block';
      }
    }
    menu.onmouseout = function(){
      subMenu.className = "hide";
    }
    subMenu.onmouseover = function(){
      this.className = "sub-menu";
    }
    subMenu.onmouseout = function(){
      this.className = "sub-menu hide";
    }
  }


// change image
function changeImg(){
  // circle through div, hide others
  for(var i=0;i<len;i++){
    pics[i].style.display = "none";
    dots[i].className = "";
  }
  // according to number index, display div
  pics[index].style.display = 'block';
  dots[index].className = "active";
}
slideImg();
