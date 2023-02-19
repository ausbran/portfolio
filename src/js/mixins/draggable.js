import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
export default {
  mounted: function () {
    this.$nextTick(function () {
      var instance = $(".draggable");
      $.each( instance, function(key, value) {
        $(instance[key]).draggable({
          axis: "y",
          drag: function(e, ui) {
            var parentHeight = $(instance[key]).parent('.project-image').height(),
                childHeight = $(instance[key]).height(),
                diff = childHeight - parentHeight
                
            if (ui.position.top > 0) {
              ui.position.top = 0;
            }
            if (ui.position.top <= '-' + diff) {
              ui.position.top = '-' + diff;
            }
          },
          scroll: false
        })
      })
    })
  }
};