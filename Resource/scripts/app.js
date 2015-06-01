
(function () {

  // store a reference to the application object that will be created
  // later on so that we can use it if need be
  var app;

  var language = localStorage.getItem('language');
  if (language == null) {
    //set default language to NL

    localStorage.setItem('language', '1')
  }
  else {

  }
  loadLanguageSelection(localStorage.getItem('language'));
  // create an object to store the models for each view
  window.APP = {
    models: {
      home: {},
      settings: {},
      contacts: {},
      kleding: {},
      lingerie: {}
    }
  };


  // this function is called by Cordova when the application is loaded by the device
  document.addEventListener('deviceready', function () {

    //sensitivity touch events and ratio
    kendo.UserEvents.defaultThreshold(20);
    app = new kendo.mobile.Application(document.body, {
      // the application needs to know which view to load first
      initial: 'views/home.html',
      skin: "default"
    });
  }, false);
}());



// FUNCTION TO LISTEN
function receiveMessage(evt) {
  // alert(evt.data);
  // alert(evt.origin);

  var message = String(evt.data);
  var function_name = message.split('|')[0];
  var function_value = message.split('|')[1];
  //alert(function_value);
  switch (function_name) {
    case 'iframe_height':
      try {
        $('.contentIframe').height = function_value + "px";
      } catch (e) { }
      break;
    case 'RequestedLanguageCode2Chars':
      // check eerst welk languageID het is
      var websiteLanguage;
      if (function_value == 'NL') {
        websiteLanguage = 1;
      }

      if (function_value == 'EN') {
        websiteLanguage = 2;
      }

      var appLanguage = localStorage.getItem('language');

      if (websiteLanguage != null && appLanguage != websiteLanguage) {
        localStorage.setItem('language', websiteLanguage);

        window.location = 'index.html?view=' + top.window.location.hash;
        location.reload();
      }
      break;
    case 'returnUrl':
      try {
        window.location = 'index.html?view=' + top.window.location.hash + '?returnUrl=' + function_value;
      } catch (e) { }
      break;

    case 'metaTitel':
      window.navTitle = function_value;
      break;

  } // end switch
} // end fnc

// LISTENER
window.addEventListener('message', receiveMessage, false);
var RequestedLanguage;

function loadLanguageSelection(languageSelection) {
  localStorage.setItem('language', languageSelection.toString());
  window.RequestedLanguage = localStorage.getItem('language');
  //Alle urls voor de iframes
  var accessoiresUrl;
  var accountUrl;
  var beautyUrl;
  var designersUrl;
  var inspiratieUrl;
  var kledingUrl;
  var lingerieUrl;
  var newUrl;
  var saleUrl;
  var schoenenUrl;

  window.accessoiresUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/accessoires.aspx?language=1' : 'https://m.perfectlybasics.nl/accessories.aspx?language=2';
  window.accountUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/account_nl.aspx?language=1' : 'https://m.perfectlybasics.nl/account_en.aspx?language=2';
  window.beautyUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/beauty.aspx?language=1' : 'https://m.perfectlybasics.nl/beauty.aspx?language=2';
  window.designersUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/designers.aspx?language=1' : 'https://m.perfectlybasics.nl/designers.aspx?language=2';
  window.inspiratieUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/inspiratie.aspx?language=1' : 'https://m.perfectlybasics.nl/inspiration.aspx?language=2';
  window.kledingUrl = (window.RequestedLanguage == 1) ?
  //  'https://m.perfectlybasics.nl/kleding.aspx?language=1' : 'https://m.perfectlybasics.nl/clothing.aspx?language=2';
    'http://localhost/PerfectlyBasics/Website_Mobile/kleding.aspx' :
    'http://localhost/PerfectlyBasics/Website_Mobile/clothing.aspx';
  window.lingerieUrl = (window.RequestedLanguage == 1) ?
     'https://m.perfectlybasics.nl/lingerie.aspx?language=1' : 'https://m.perfectlybasics.nl/clothing.aspx?language=2';
  window.newUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/dames-nieuw.aspx?language=1' : 'https://m.perfectlybasics.nl/product_list.aspx?language=2&sort=1';
  window.saleUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/sale.aspx?language=1' : 'https://m.perfectlybasics.nl/sale.aspx?language=2';
  window.schoenenUrl = (window.RequestedLanguage == 1) ?
    'https://m.perfectlybasics.nl/tassen-schoenen.aspx?language=1' : 'https://m.perfectlybasics.nl/bags-shoes.aspx?language=2';

  //Alle menu titels
  var accessoiresMenuTitle;
  var accountMenuTitle;
  var beautyMenuTitle;
  var designersMenuTitle;
  var inspiratieMenuTitle;
  var kledingMenuTitle;
  var lingerieMenuTitle;
  var newMenuTitle;
  var saleMenuTitle;
  var schoenenMenuTitle;

  window.accessoiresMenuTitle = (window.RequestedLanguage == 1) ? 'Accessoires' : 'Accessories';
  window.accountMenuTitle = (window.RequestedLanguage == 1) ? 'Account' : 'Account';
  window.beautyMenuTitle = (window.RequestedLanguage == 1) ? 'Beauty' : 'Beauty';
  window.designersMenuTitle = (window.RequestedLanguage == 1) ? 'Designers' : 'Designers';
  window.inspiratieMenuTitle = (window.RequestedLanguage == 1) ? 'Inspiratie' : 'Inspiration';
  window.kledingMenuTitle = (window.RequestedLanguage == 1) ? 'Kleding' : 'Clothing';
  window.lingerieMenuTitle = (window.RequestedLanguage == 1) ? 'Lingerie' : 'Lingerie';
  window.newMenuTitle = (window.RequestedLanguage == 1) ? 'Nieuw in de shop' : 'New in the shop';
  window.saleMenuTitle = (window.RequestedLanguage == 1) ? 'Sale' : 'Sale';
  window.schoenenMenuTitle = (window.RequestedLanguage == 1) ? 'Tassen & Schoenen' : 'Bags & Shoes';

  //navbar title
  var navTitle;

  //img variable
  var imgNew;
  var imgDesigners;
  var imgKleding;
  var imgSchoenen;
  var imgTassen;
  var imgAccessoires;
  var imgLingerie;
  var imgBeauty;
  var imgInspiratie;
  var imgSale;

  window.imgNew = (window.RequestedLanguage == 1) ?
    "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-nieuw-nl.jpg' style='width:" + screen.width * 0.5 + "px;' />" :
    "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-nieuw-en.jpg' style='width:" + screen.width * 0.5 + "px;' />";

  window.imgDesigners = (window.RequestedLanguage == 1) ?
     "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-merken-nl.jpg' style='width:" + screen.width * 0.5 + "px; height: 67px;' />" :
     "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-merken-EN.jpg' style='width:" + screen.width * 0.5 + "px; height: 67px;' />";

  window.imgKleding = (window.RequestedLanguage == 1) ?
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-kleding-nl.jpg' style='width:" + screen.width + "px;' />" :
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-kleding-en.jpg' style='width:" + screen.width + "px;' />";

  window.imgSchoenen = (window.RequestedLanguage == 1) ?
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-schoenen-nl.jpg' style='width:" + screen.width + "px;' />" :
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-schoenen-en.jpg' style='width:" + screen.width + "px;' />";

  window.imgTassen = (window.RequestedLanguage == 1) ?
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-tassen-nl.jpg' style='width:" + screen.width + "px;' />" :
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-tassen-en.jpg' style='width:" + screen.width + "px;' />";

  window.imgAccessoires = (window.RequestedLanguage == 1) ?
 "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-accessoires-nl.jpg' style='width:" + screen.width + "px;' />" :
 "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-accessoires-en.jpg' style='width:" + screen.width + "px;' />";

  window.imgLingerie =
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-lingerie.jpg' style='width:" + screen.width + "px;' />";

  window.imgBeauty =
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-beauty.jpg' style='width:" + screen.width + "px;' />";

  window.imgInspiratie = (window.RequestedLanguage == 1) ?
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-inspiratie-nl.jpg' style='width:" + screen.width + "px;' />" :
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-inspiratie-en.jpg' style='width:" + screen.width + "px;' />";

  window.imgSale =
  "<img src='https://perfectlybasics.nl/uploads/menu/mobile/app-sale.jpg' style='width:" + screen.width + "px;' />";
}
