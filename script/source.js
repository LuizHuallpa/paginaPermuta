new WOW().init();

new DG.OnOffSwitchAuto({
      cls: '.botaoSwitch',
      height: 30,
      trackColorOn:'#003b5c',
      trackColorOff:'#666',
      trackBorderColor:'#555',
      textColorOff:'#fff',
      textOn:'SIM',
      textOff:'NÂO'
  });
  $(document).ready(function(){

// SmartWizard initialize
$('#smartwizard').smartWizard({
theme: 'arrows',
autoAdjustHeight: true, // Automatically adjust content height
cycleSteps: false, // Allows to cycle the navigation of steps
backButtonSupport: true, // Enable the back button support
lang: { // Language variables for button
next: 'Próximo',
previous: 'Anterior',
finish: 'Enviar'
},
toolbarSettings: {
toolbarPosition: 'bottom', // none, top, bottom, both
toolbarButtonPosition: 'left', // left, right, center
showNextButton: true, // show/hide a Next button
showPreviousButton: true, // show/hide a Previous button
toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
},

});

});

$('#smartwizard1').smartWizard({
  theme: 'arrows',
  autoAdjustHeight: false, // Automatically adjust content height
  cycleSteps: false, // Allows to cycle the navigation of steps
  backButtonSupport: true, // Enable the back button support
  lang: { // Language variables for button
  next: 'Próximo',
  previous: 'Anterior',
  finish: 'Enviar'
  },
  toolbarSettings: {
  toolbarPosition: 'bottom', // none, top, bottom, both
  toolbarButtonPosition: 'left', // left, right, center
  showNextButton: true, // show/hide a Next button
  showPreviousButton: true, // show/hide a Previous button
  toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
  },
  
  });
  

  $('#smartwizard2').smartWizard({
    theme: 'arrows',
    autoAdjustHeight: true, // Automatically adjust content height
    cycleSteps: false, // Allows to cycle the navigation of steps
    backButtonSupport: true, // Enable the back button support
    lang: { // Language variables for button
    next: 'Próximo',
    previous: 'Anterior',
    finish: 'Enviar'
    },
    toolbarSettings: {
    toolbarPosition: 'bottom', // none, top, bottom, both
    toolbarButtonPosition: 'left', // left, right, center
    showNextButton: true, // show/hide a Next button
    showPreviousButton: true, // show/hide a Previous button
    toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
    },
    
    });


$(document).ready(function(){
$('.date').mask('00/00/0000');
$('.time').mask('00:00:00');
$('.date_time').mask('00/00/0000 00:00:00');
$('.cep').mask('00000-000');
$('.phone').mask('0000-0000');
$('.phone_with_ddd').mask('(00) 00000-0000');
$('.phone_us').mask('(000) 000-0000');
$('.mixed').mask('AAA 000-S0S');
$('.cpf').mask('000.000.000-00', {reverse: true});
$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
$('.metragem').mask("#.##0,00", {reverse: true});
$('.money2').mask("#.##0,00", {reverse: true});
$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
translation: {
'Z': {
  pattern: /[0-9]/, optional: true
}
}
});
$('.ip_address').mask('099.099.099.099');
$('.percent').mask('##0,00%', {reverse: true});
$('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
$('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
$('.fallback').mask("00r00r0000", {
translation: {
  'r': {
    pattern: /[\/]/,
    fallback: '/'
  },
  placeholder: "__/__/____"
}
});
$('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});

$('#kt_docs_repeater_basic').repeater({
  initEmpty: false,

  defaultValues: {
      'text-input': 'foo'
  },

  show: function () {
      $(this).slideDown();
  },

  hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
  }
});


$('#kt_docs_repeater_basic1').repeater({
  initEmpty: false,

  defaultValues: {
      'text-input': 'foo'
  },

  show: function () {
      $(this).slideDown();
  },

  hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
  }
});


// The DOM elements you wish to replace with Tagify
var input1 = document.querySelector("#kt_tagify_3");
var input2 = document.querySelector("#kt_tagify_4");
var input2 = document.querySelector("#kt_tagify_5");

// Initialize Tagify components on the above inputs
new Tagify(input1,{
  delimiters       : null,
  callbacks        : {
      add    : console.log,  // callback when adding a tag
      remove : console.log   // callback when removing a tag
  }
});

new Tagify(input2,{
  delimiters       : null,
  callbacks        : {
      add    : console.log,  // callback when adding a tag
      remove : console.log   // callback when removing a tag
  }
});
new Tagify(input3,{
  delimiters       : null,
  callbacks        : {
      add    : console.log,  // callback when adding a tag
      remove : console.log   // callback when removing a tag
  }
});