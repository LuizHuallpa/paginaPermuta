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


var countLiVideos = 0
var countLiFotos = 0
var contadorListaFotos = 0
var spanFotos = document.getElementById("contagemFotos")

var countLiVideos = 0
var spanVideos = document.getElementById("contagemVideos")

const adicionar = () => {
  let anchor = document.createElement('a');
  anchor.setAttribute('target', '_blank');
  anchor.id = 'linkFoto_'+contadorListaFotos
  let list = document.getElementById('linksListFotos');
  let li = document.createElement('li');
  li.id = 'li_'+contadorListaFotos
  let btn = document.createElement("button");  
  btn.innerHTML = "x";  
  btn.setAttribute('class', 'btn btn-danger ms-2 p-1');
  btn.id = 'btn_'+contadorListaFotos
  btn.setAttribute('onclick', 'removeListFotos(this.id)');
  let urlFoto = document.querySelector("#fotos").value
  let descricao = document.querySelector("#descricaoFotos").value
  if(urlFoto != '' && descricao != ''){
    anchor.href = urlFoto;
    anchor.innerText = descricao;
    li.append(anchor,btn);
    list.appendChild(li);
    document.querySelector("#fotos").value = ''
    document.querySelector("#descricaoFotos").value = ''
}
  contadorListaFotos ++
  var liFotos = document.getElementById("linksListFotos").getElementsByTagName("li");
  countLiFotos = liFotos.length
  
  spanFotos.innerHTML = countLiFotos 
};

function removeListFotos(id){
  var id = id.split('_')[1]
  let el = document.getElementById('li_'+id)
  el.remove()
  countLiFotos--
  spanFotos.innerHTML = countLiFotos 

}


var contadorListaVideos = 0
const adicionarVideos = () => {
  let anchor = document.createElement('a');
  anchor.setAttribute('target', '_blank');
  anchor.id = 'linkFoto_'+contadorListaVideos
  let list = document.getElementById('linksListVideos');
  let li = document.createElement('li');
  li.id = 'li_'+contadorListaVideos
  let btn = document.createElement("button");  
  btn.innerHTML = "x";  
  btn.setAttribute('class', 'btn btn-danger ms-2 p-1');
  btn.id = 'btn_'+contadorListaVideos
  btn.setAttribute('onclick', 'removeListVideos(this.id)');
  let urlFoto = document.querySelector("#Videos").value
  let descricao = document.querySelector("#descricaoVideos").value
  if(urlFoto != '' && descricao != ''){
    anchor.href = urlFoto;
    anchor.innerText = descricao;
    li.append(anchor,btn);
    list.appendChild(li);
    document.querySelector("#Videos").value = ''
    document.querySelector("#descricaoVideos").value = ''
}
  contadorListaVideos ++
  var liVideos = document.getElementById("linksListVideos").getElementsByTagName("li");
   countLiVideos = liVideos.length
  
  spanVideos.innerHTML = countLiVideos ; 
  
};

function removeListVideos(id){
  var id = id.split('_')[1]
  let el = document.getElementById('li_'+id)
  el.remove()
  countLiVideos--
  spanVideos.innerHTML = countLiVideos ;

}


