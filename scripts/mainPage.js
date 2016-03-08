buildMainPage = function () {
  //Black background...
  mainPage.mainDiv.style.backgroundColor = "#000000"

  //Fade in the logo...
  var logo = new Element('div', null, 'LogoArea', mainPage.mainDiv);
  logo.getElement().style.position = 'relative';
  logo.getElement().style.height = '100%';
  logo.getElement().style.textAlign = 'center';
  var logoImage = new ImageElement('images/logo.png', 'logo', logo);
  logoImage.center();
  logoImage.getElement().style.opacity = 0;
  fadeIn(logoImage.getElement(), 2000);

  //Build the Links
  var textArea = new Element('div', null, 'TextArea', mainPage.mainDiv);
  // textArea.center();
  textArea.getElement().style.zIndex = logoImage.getElement().style.zIndex + 1;
  textArea.getElement().style.textAlign = 'center';
  textArea.getElement().style.opacity = 0;
  var uList = new Element('ul',null, null, textArea);
  uList.center();
  uList.getElement().style.listStyleType = 'none';
  var aboutItem = new Element('li', '', null, uList);
  var about = new Button('Who We Are', aboutClick,'#333366', 'frontButtons', aboutItem);
  var projectsItem = new Element('li', null, null, uList);
  var projects = new Button('What We\'re Doing', projectsClick,'#333366', 'frontButtons', projectsItem);
  var helpItem = new Element('li', null, null, uList);
  var help = new Button('How You Can Help', helpClick,'#333366', 'frontButtons', helpItem);
  fadeIn(textArea.getElement(), 2000);
}
