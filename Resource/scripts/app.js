(function () {

  // store a reference to the application object that will be created
  // later on so that we can use it if need be
  var app;


  // GET CURRENT LANGUAGE
  var RequestedLanguage;

  //set default language to NL
  window.RequestedLanguage = 'NL';

  // create an object to store the models for each view
  window.APP = {
    models: {
      home: {},
      settings: {},
      contacts: {},
      kleding: {
        title: (window.RequestedLanguage = 'NL') ? 'Kleding' : 'Clothing',

      },
      lingerie: {}
    }
  };


  // this function is called by Cordova when the application is loaded by the device
  document.addEventListener('deviceready', function () {

    //// NL | EN
    //try {
    //  RequestedLanguageCode2Chars =  'NL';
    //  RequestedLanguageCode2Chars = RequestedLanguageCode2Chars.toUpperCase();
    //} catch (e) { }


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
      //case 'open_fancybox':
      //  if (function_value.indexOf('.jpg') >= 0 || function_value.indexOf('.png') >= 0) {
      //    open_fancybox_image(function_value);
      //  } else {
      //    open_fancybox_iframe(function_value);
      //  }

      //  break;
  } // end switch
} // end fnc

// LISTENER
window.addEventListener('message', receiveMessage, false);