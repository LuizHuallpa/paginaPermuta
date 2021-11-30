new WOW().init();

$(document).ready(function () {
  // SmartWizard initialize

  var btnFinish = $(
    '<button class="enviarButton" id="botaoEnviar" style="display:none;"></button>'
  )
    .text("Enviar")
    .addClass("btn btn-info")
    .on("click", function () {
      alert("Finish Clicked");
    });

  $("#smartwizard").smartWizard({
    selected: 0,
    enableURLhash: false,
    theme: "arrows",
    autoAdjustHeight: true, // Automatically adjust content height
    cycleSteps: false, // Allows to cycle the navigation of steps
    backButtonSupport: true, // Enable the back button support
    lang: {
      // Language variables for button
      next: "Próximo",
      previous: "Anterior",
    },
    toolbarSettings: {
      toolbarPosition: "bottom", // none, top, bottom, both
      toolbarButtonPosition: "left", // left, right, center
      showNextButton: true, // show/hide a Next button
      showPreviousButton: true, // show/hide a Previous button
      toolbarExtraButtons: [btnFinish], // Extra buttons to show on toolbar, array of jQuery input/buttons elements
    },
    anchorSettings: {
      anchorClickable: false, // Enable/Disable anchor navigation
      enableAllAnchors: false, // Activates all anchors clickable all times
      markDoneStep: true, // Add done state on navigation
      markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
      removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
      enableAnchorOnDoneStep: true, // Enable/Disable the done steps navigation
    },
  });
});

//Mostrar Esconder Botão Enviar
$("#smartwizard").on(
  "showStep",
  function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
    if (stepPosition === "last") {
      $(".enviarButton").show("slow");
    } else {
      $(".enviarButton").hide("slow");
    }
  }
);

function notValidate() {
  Swal.fire({
    icon: "error",
    title: "Erro",
    text: "Responda todas as questões obrigatórias",
  });
}

//Validador do Wizard

$("#smartwizard").on(
  "leaveStep",
  function (e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) {
    var valor = document.getElementById("valor").value;
    var cidade = document.getElementById("cidade").value;
    var metragemConstrucao = document.getElementById("metragemConstrucao").value;
    var metragemTerreno = document.getElementById("metragemTerreno").value;
    var endereco = document.getElementById("endereco").value;
    var nome = document.getElementById("nome").value;
    var celular = document.getElementById("celular").value;
    var vazio = 0
    if (stepDirection == "forward") {
      switch (nextStepIndex) {
        case 1:
          if (
            (document.getElementById("inlineRadioReformas1").checked ||
              document.getElementById("inlineRadioReformas2").checked) &&
            (document.getElementById("inlineRadioDividas1").checked ||
              document.getElementById("inlineRadioDividas2").checked) &&
            (document.getElementById("inlineRadioMatricula1").checked ||
              document.getElementById("inlineRadioMatricula2").checked) &&
            (document.getElementById("inlineRadioPermuta1").checked ||
              document.getElementById("inlineRadioPermuta2").checked)
          ) {
          } else {
            notValidate();
            return false;
          }
          break;
        case 2:


          if (valor == null || valor == "") {
            document.getElementById("valor").classList.add("is-invalid");
            notValidate();
            vazio = 1
          }else{
            vazio = 0
            document.getElementById("valor").classList.remove("is-invalid");
          }

          if (cidade == null || cidade == "") {
            document.getElementById("cidade").classList.add("is-invalid");
            notValidate();
            vazio = 1
          }else{
            vazio = 0
            document.getElementById("cidade").classList.remove("is-invalid");
          }
          if (metragemConstrucao == null || metragemConstrucao == "") {
            document.getElementById("metragemConstrucao").classList.add("is-invalid");
            notValidate();
            vazio = 1
          }else{
            vazio = 0
            document.getElementById("metragemConstrucao").classList.remove("is-invalid");
          }
          if (metragemTerreno == null || metragemTerreno == "") {
            document.getElementById("metragemTerreno").classList.add("is-invalid");
            notValidate();
            vazio = 1
          }else{
            vazio = 0
            document.getElementById("metragemTerreno").classList.remove("is-invalid");
          }
          if (endereco == null || endereco == "") {
            document.getElementById("endereco").classList.add("is-invalid");
            notValidate();
            vazio = 1
          }else{
            vazio = 0
            document.getElementById("endereco").classList.remove("is-invalid");
          }

          if(vazio == 1) {
            return false;
          }

          break;

        case 3:
          if (nome == null || nome == "") {
            document.getElementById("nome").classList.add("is-invalid");
            notValidate();
            vazio = 1
          }else{
            vazio = 0
            document.getElementById("nome").classList.remove("is-invalid");
          }

          if (celular == null || celular == "") {
            document.getElementById("celular").classList.add("is-invalid");
            notValidate();
            vazio = 1
          }else{
            vazio = 0
            document.getElementById("celular").classList.remove("is-invalid");
          }

          if(vazio == 1) {
            return false;
          }

          break;
      }
    }
  }
);

//Mascaras
$(document).ready(function () {
  $(".date").mask("00/00/0000");
  $(".time").mask("00:00:00");
  $(".date_time").mask("00/00/0000 00:00:00");
  $(".cep").mask("00000-000");
  $(".phone").mask("0000-0000");
  $(".phone_with_ddd").mask("(00) 00000-0000");
  $(".phone_us").mask("(000) 000-0000");
  $(".mixed").mask("AAA 000-S0S");
  $(".cpf").mask("000.000.000-00", { reverse: true });
  $(".cnpj").mask("00.000.000/0000-00", { reverse: true });
  $(".metragem").mask("#.##0,00", { reverse: true });
  $(".money2").mask("#.##0,00", { reverse: true });
  $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
    translation: {
      Z: {
        pattern: /[0-9]/,
        optional: true,
      },
    },
  });
  $(".ip_address").mask("099.099.099.099");
  $(".percent").mask("##0,00%", { reverse: true });
  $(".clear-if-not-match").mask("00/00/0000", { clearIfNotMatch: true });
  $(".placeholder").mask("00/00/0000", { placeholder: "__/__/____" });
  $(".fallback").mask("00r00r0000", {
    translation: {
      r: {
        pattern: /[\/]/,
        fallback: "/",
      },
      placeholder: "__/__/____",
    },
  });
  $(".selectonfocus").mask("00/00/0000", { selectOnFocus: true });
});

var objVideos = {},
  videos = [];
objVideos.descricao = "oi";
objVideos.url = "www";
// videos = objVideos;
console.log(objVideos);

var countLiVideos = 0;
var countLiFotos = 0;
var contadorListaFotos = 0;
var spanFotos = document.getElementById("contagemFotos");
var countLiVideos = 0;
var spanVideos = document.getElementById("contagemVideos");

const adicionar = () => {
  let anchor = document.createElement("a");
  anchor.setAttribute("target", "_blank");
  anchor.id = "linkFoto_" + contadorListaFotos;
  anchor.setAttribute("name", "linkFoto_" + contadorListaFotos);
  let list = document.getElementById("linksListFotos");
  let li = document.createElement("li");
  li.id = "li_" + contadorListaFotos;
  let btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.setAttribute("class", "btn btn-danger ms-2 p-1");
  btn.id = "btn_" + contadorListaFotos;
  btn.setAttribute("onclick", "removeListFotos(this.id)");
  let urlFoto = document.querySelector("#fotos").value;
  let descricao = document.querySelector("#descricaoFotos").value;
  if (urlFoto != "" && descricao != "") {
    anchor.href = urlFoto;
    anchor.innerText = descricao;
    li.append(anchor, btn);
    list.appendChild(li);
    document.querySelector("#fotos").value = "";
    document.querySelector("#descricaoFotos").value = "";
  }
  contadorListaFotos++;
  var liFotos = document
    .getElementById("linksListFotos")
    .getElementsByTagName("li");
  countLiFotos = liFotos.length;

  spanFotos.innerHTML = countLiFotos;
};

function removeListFotos(id) {
  var id = id.split("_")[1];
  let el = document.getElementById("li_" + id);
  el.remove();
  countLiFotos--;
  spanFotos.innerHTML = countLiFotos;
}

var contadorListaVideos = 0;
const adicionarVideos = () => {
  let anchor = document.createElement("a");
  anchor.setAttribute("target", "_blank");
  anchor.id = "linkFoto_" + contadorListaVideos;
  anchor.setAttribute("name", "linkFoto_" + contadorListaVideos);
  let list = document.getElementById("linksListVideos");
  let li = document.createElement("li");
  li.id = "li_" + contadorListaVideos;
  let btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.setAttribute("class", "btn btn-danger ms-2 p-1");
  btn.id = "btn_" + contadorListaVideos;
  btn.setAttribute("onclick", "removeListVideos(this.id)");
  let urlFoto = document.querySelector("#Videos").value;
  let descricao = document.querySelector("#descricaoVideos").value;
  if (urlFoto != "" && descricao != "") {
    anchor.href = urlFoto;
    anchor.innerText = descricao;
    li.append(anchor, btn);
    list.appendChild(li);
    document.querySelector("#Videos").value = "";
    document.querySelector("#descricaoVideos").value = "";
  }
  contadorListaVideos++;
  var liVideos = document
    .getElementById("linksListVideos")
    .getElementsByTagName("li");
  countLiVideos = liVideos.length;

  spanVideos.innerHTML = countLiVideos;
};

function removeListVideos(id) {
  var id = id.split("_")[1];
  let el = document.getElementById("li_" + id);
  el.remove();
  countLiVideos--;
  spanVideos.innerHTML = countLiVideos;
}

$("form").submit(function (e) {
  var data;

  data = new FormData();

  $.ajax({
    url: "",
    data: data,
    processData: false,
    type: "POST",

    contentType: "multipart/form-data",

    // Now you should be able to do this:
    mimeType: "multipart/form-data", //Property added in 1.5.1

    success: function (data) {
      alert(data);
    },
  });
  e.preventDefault();
});
