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

var btnFinish = $('<button class="enviarButton" id="botaoEnviar" style="display:none;"></button>').text('Enviar')
.addClass('btn btn-info')
.on('click', function(){ alert('Finish Clicked'); });
var btnCancel = $('<button></button>').text('Início')
.addClass('btn btn-danger')
.on('click', function(){ $('#smartwizard').smartWizard("reset"); });

$('#smartwizard').smartWizard({
theme: 'arrows',
autoAdjustHeight: true, // Automatically adjust content height
cycleSteps: false, // Allows to cycle the navigation of steps
backButtonSupport: true, // Enable the back button support
lang: { // Language variables for button
next: 'Próximo',
previous: 'Anterior'
},
toolbarSettings: {
toolbarPosition: 'bottom', // none, top, bottom, both
toolbarButtonPosition: 'left', // left, right, center
showNextButton: true, // show/hide a Next button
showPreviousButton: true, // show/hide a Previous button
toolbarExtraButtons: [btnFinish] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
},
anchorSettings: {
  anchorClickable: true, // Enable/Disable anchor navigation
  enableAllAnchors: false, // Activates all anchors clickable all times
  markDoneStep: true, // Add done state on navigation
  markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
  removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
  enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
}

});

});

  $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
    // console.log(stepPosition)
    // console.log(stepNumber)
     if(stepPosition === 'last') {
        $(".enviarButton").show('slow');
     } else {
      $(".enviarButton").hide('slow');
    }


});

function notValidate() {
  Swal.fire('Responda todas as questões')
}

$("#smartwizard").on("leaveStep", function(e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) {
  if(stepDirection == 'forward') {
      switch (nextStepIndex) {
          case 1:
              console.log('1');
              if(document.getElementById('inlineRadioReformas1').checked || document.getElementById('inlineRadioReformas2').checked){
                      
              }else{              
                notValidate()
                return false;
              }
              if(document.getElementById('inlineRadioDividas1').checked || document.getElementById('inlineRadioDividas2').checked){
                      
              }else{
                notValidate()
                return false;
              }
              if(document.getElementById('inlineRadioMatricula1').checked || document.getElementById('inlineRadioMatricula2').checked){
                      
              }else{
                notValidate()
                return false;
              }
              if(document.getElementById('inlineRadioPermuta1').checked || document.getElementById('inlineRadioPermuta2').checked){
                      
              }else{
                notValidate()
                return false;
              }
              
             
          case 2:
              console.log('2');
              // return false;
              break;   
          case 3:
              console.log('3');
              break;
      }  
  } 
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

var objVideos = {}, videos = [];
objVideos.descricao = 'oi';
objVideos.url = 'www';
// videos = objVideos;
console.log(objVideos)




var countLiVideos = 0
var countLiFotos = 0
var contadorListaFotos = 0
var spanFotos = document.getElementById("contagemFotos")
var countLiVideos = 0
var spanVideos = document.getElementById("contagemVideos")

const adicionar = () => {
  let anchor = document.createElement('a');
  anchor.setAttribute('target', '_blank');
  anchor.id = 'linkFoto_'+contadorListaFotos;
  anchor.setAttribute('name', 'linkFoto_'+contadorListaFotos);
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
  anchor.id = 'linkFoto_'+contadorListaVideos;
  anchor.setAttribute('name', 'linkFoto_'+contadorListaVideos);
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


$('form').submit(function (e) {
  var data;

  data = new FormData();

  $.ajax({
      url: '',
      data: data,
      processData: false,
      type: 'POST',


      contentType: 'multipart/form-data', 


      // Now you should be able to do this:
      mimeType: 'multipart/form-data',    //Property added in 1.5.1

      success: function (data) {
          alert(data);
      }
  });
  e.preventDefault();
});