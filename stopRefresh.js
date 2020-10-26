/*
prevent pull-down-to-refresh of mobile chrome
https://stackoverflow.com/a/55832568
*/
(function() {
  var touchStartHandler,
      touchMoveHandler,
      touchPoint;
  // Only needed for touch events on chrome.
  if ((window.chrome || navigator.userAgent.match("CriOS"))
      && "ontouchstart" in document.documentElement) {
      touchStartHandler = function() {
          // Only need to handle single-touch cases
          touchPoint = event.touches.length === 1 ? event.touches[0].clientY : null;
      };
      touchMoveHandler = function(event) {
          var newTouchPoint;
          // Only need to handle single-touch cases
          if (event.touches.length !== 1) {
              touchPoint = null;
              return;
          }
          // We only need to defaultPrevent when scrolling up
          newTouchPoint = event.touches[0].clientY;
          if (newTouchPoint > touchPoint) {
              event.preventDefault();
          }
          touchPoint = newTouchPoint;
      };
      document.addEventListener("touchstart", touchStartHandler, {
          passive: false
      });
      document.addEventListener("touchmove", touchMoveHandler, {
          passive: false
      });
  }
})();