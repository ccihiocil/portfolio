$(document).ready(() => {

  var $grid = $('.gallery-items').isotope({
    // options
    itemSelector: '.gallery-item',
    layoutMode: 'masonry',
    masonry: {
      rowWidth: 200,
      columnWidth: 200
    }
  });

  $('#all-button').click(() => {
    $grid.isotope({
      filter: '*'
    });
  });

  $('#landscape-button').click(() => {
    $grid.isotope({
      filter: '.landscape'
    });
  });

  $('#wildlife-button').click(() => {
    $grid.isotope({
      filter: '.wildlife'
    });
  });

  $('#sunset-button').click(() => {
    $grid.isotope({
      filter: '.sunset'
    });
  });

});