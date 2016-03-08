var activePage;

// Generic Element
var Element = function(tag, innerhtml, id, parent, cssClass) {
  this.id = id == undefined ? null : id;
  this.cssClass = cssClass;
  this.tag = tag == undefined ? 'div' : tag;
  this.innerhtml = innerhtml == undefined ? '' :innerhtml;
  if(parent == undefined) {
    this.parent = document.body;
  } else {
    if(typeof parent === 'string') {
      this.parent = document.getElementById(parent);
    } else if(parent instanceof Element) {
      this.parent = parent.getElement();
    } else {
      this.parent = parent;
    }
  }
  this.build = function() {
    var elem = document.createElement(this.tag);
    if(this.id != null) {
      elem.id = this.id;
    }
    if(this.cssClass != undefined) {
      elem.className = this.cssClass;
    }
    elem.innerHTML = this.innerhtml;
    if(this.parent != null) {
      this.parent.appendChild(elem);
    }
    this.element = elem;
  };

  this.getElement = function() {
    if(this.element == undefined) {
      this.build();
      return this.element;
    } else {
      return this.element;
    }
  }
};

//Image
function ImageElement(src, id, parent, cssClass) {
  Element.call(this, "img","", id, parent, cssClass);
  this.getElement().src = src;
  this.width = this.getElement().width;
  this.height = this.getElement().height;

}
ImageElement.prototype = Object.create(Element.prototype);
ImageElement.prototype.constructor = ImageElement;

//Link
function Link(src, title, text, id, parent, cssClass) {
  Element.call(this, "a", text, id, parent, cssClass);
  this.getElement().href = src;
  this.getElement().title = title;
}
Link.prototype = Object.create(Element.prototype);
Link.prototype.constructor = Link;

function Button(text, onClick, color, id, parent, cssClass) {
  Element.call(this, "div", text, id, parent, cssClass);
  element = this.getElement();
  element.style.borderRadius = '15px';
  element.style.height = 'auto';
  element.style.width = 'auto';
  element.style.backgroundColor = color;
  element.style.textAlign = 'center';
  element.style.padding = '3px';
  element.style.position = 'relative';

  element.style.width = 'auto';

  element.addEventListener("click", onClick);
}
Button.prototype = Object.create(Element.prototype);
Button.prototype.constructor = Button;


//Methods
Element.prototype.center = function (){
  element = this.getElement();
  element.style.position = 'absolute';
  element.style.top = 0;
  element.style.bottom = 0;
  element.style.left = 0;
  element.style.right = 0;
  element.style.margin = 'auto';
}

var Page = function(title, buildPage, mainDiv)
{
  this.title = title;
  if(mainDiv == undefined) {
    this.mainDiv = new Element();
  } else if (mainDiv instanceof Element){
    this.mainDiv = mainDiv.getElement();
  } else {
    this.mainDiv = mainDiv;
  }
  this.isBuilt = false;
  this.isVisible = true;
  this.hide = function() {
    if(this.isBuilt) {
      this.mainDiv.style.display = 'none';
      this.isVisible = false;
    }
  }
  this.show = function() {
    if(activePage != undefined){
      activePage.hide();
    }
     if(!this.isBuilt) {
       buildPage();
       this.isBuilt = true;
     }
     this.mainDiv.style.display = 'block';
     this.isVisible = true;
     activePage = this;
     document.title = this.title;
  }
}

function fadeIn(el, time) {
  el = (el instanceof Element) ? el.getElement() : el;
  var last = new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = new Date();

    if (el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

function fadeOut(el, time) {
  el = (el instanceof Element) ? el.getElement() : el;
  var last = new Date();
  var tick = function() {
    el.style.opacity = + el.style.opacity - (new Date() - last) / time;
    last = new Date();

    if (el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}
