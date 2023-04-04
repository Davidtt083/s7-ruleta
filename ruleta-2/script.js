/*$(document).ready(function () {
  var tamanyoRuleta = 360;
  var numeroCasillas = 13;
  var anguloCasillas = 360 / numeroCasillas;
  var grados = (180 - anguloCasillas) / 2;
  var alturaCasilla = Math.tan(grados * Math.PI / 180) * (tamanyoRuleta / 2);

  $(".ruleta").css({
    'width': tamanyoRuleta + 'px',
    'height': tamanyoRuleta + 'px'
  })

  $('head').append('<style id="afterNumero"></style>');

  for (var i = 1; i <= numeroCasillas; i++) {

    $(".ruleta").append('<div class="opcion opcion-' + i + '"></div>');
    var clasS = '.opcion-' + i;

    $(clasS).css({
      'transform': 'rotate(' + anguloCasillas * i + 'deg)',
      'border-bottom-color': getRandomColor()
    });

    $('#afterNumero').append('.opcion-' + i + '::before {content: "' + i + '"}');

    $(".opcion")
      .attr('data-content', i)
      .attr('data-ancho', (tamanyoRuleta / 2) + 'px')
      .attr('data-line', (tamanyoRuleta / 2) + 'px');
  }


  $(".opcion").css({
    'border-bottom-width': alturaCasilla + 'px',
    'border-right-width': (tamanyoRuleta / 2) + 'px',
    'border-left-width': (tamanyoRuleta / 2) + 'px'
  })

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});*/

function rotar(num) {
  var num2 = num + 1;
  var num3 = num - 1;
  var element = document.getElementById('fondo');
  var element2 = document.getElementById('master');
  var element3 = document.getElementById('text' + num);
  var element4 = document.getElementById('text' + num2);

  element.classList.add('rot' + num);
  element2.removeAttribute('onclick');
  element2.setAttribute('onclick', 'rotar(' + num2 + ')')
  if (num === 5) {
    window.location.reload();
   /* element.classList.remove('rot1');
    element.classList.remove('rot2');
    element.classList.remove('rot3');
    element.classList.remove('rot4');
    element.classList.remove('rot5');
    element.classList.remove('rot6');
    element2.setAttribute('onclick', 'rotar(1)');
    element3.classList.remove('text6');
    element3.classList.add('text1');*/
  }
  element3.classList.add('hide');
  element4.classList.remove('hide');

}

function cerrar() {
  document.getElementById("text1").classList.add("hide");
  /*document.getElementById("text2").classList.add("hide");
  document.getElementById("text3").classList.add("hide");
  document.getElementById("text4").classList.add("hide");
  document.getElementById("text5").classList.add("hide");
  document.getElementById("text6").classList.add("hide");
  document.getElementById("text7").classList.add("hide");*/
}