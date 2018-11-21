$(document).ready(function() {
  $.magnificPopup.open({
    items: {
      src: '#dummyPDF',
    },
    type: 'iframe',
    alignTop: 'true',
    fixedBgPos: 'true',
    titleSrc: 'Random',
  },0);
});