requirejs(["scripts/base.js"], function(base){});
requirejs(["scripts/aboutLoader.js"], function(aboutLoader){});
requirejs(["scripts/projectsLoader.js"], function(projectsLoader){});
requirejs(["scripts/joinUsLoader.js"], function(joinUsLoader){});
requirejs(["scripts/mainPage.js"], function(mainPage){
    main();
});

var mainPage;
var aboutPage;
var projectsPage;
var joinUsPage;

function main() {
  mainPage = new Page('Aleron', buildMainPage, new Element());
  aboutPage = new Page('About Us', buildAboutPage, new Element());
  projectsPage = new Page('Projects', buildProjectsPage, new Element());
  joinUsPage = new Page('Join Us', buildJoinUsPage, new Element());
  mainPage.show();
}

var header = function(parent) {
  var headerElem = new Element('div', '', 'header', parent);
  headerElem.getElement().style.backgroundColor = "#000000";
  var headerLogo = new ImageElement('images/logo.png', 'headerLogo', headerElem);
  headerLogo.getElement().addEventListener("click", mainClick);
  var uList = new Element('ul',null, null, headerElem);
  var aboutItem = new Element('li', '', null, uList);
  var about = new Button('Who We Are', aboutClick,'#333366', null, aboutItem, 'headerButtons');
  var projectsItem = new Element('li', null, null, uList);
  var projects = new Button('What We\'re Doing', projectsClick,'#333366', null, projectsItem, 'headerButtons');
  var helpItem = new Element('li', null, null, uList);
  var help = new Button('How You Can Help', helpClick,'#333366', null, helpItem, 'headerButtons');
}

var underConstruction = function(parent)
{
  var constDiv = new Element('div', '', '', parent);
  var hh = new Element('h2', 'This Site is currently under Construction and will be available soon.','', constDiv);
  hh.getElement();
}

mainClick = function()
{
  mainPage.show();
}

aboutClick = function() {
  aboutPage.show();
}

projectsClick = function() {
  projectsPage.show();
}

helpClick = function() {
  joinUsPage.show();
}
