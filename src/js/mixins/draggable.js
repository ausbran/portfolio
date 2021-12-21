import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
export default {
  mounted: function () {
    this.$nextTick(function () {
      var drag = $('.draggable')
      drag.draggable({
        axis: "y",
        drag: function(e, ui) {
          var parentHeight = $('.project-image').height(),
              childHeight = drag.height(),
              diff = childHeight - parentHeight - 75
              
          if (ui.position.top > 0) {
            ui.position.top = 0;
          }
          if (ui.position.top <= '-' + diff) {
            ui.position.top = '-' + diff;
          }
        },
        scroll: false
      });
    })
  }
};