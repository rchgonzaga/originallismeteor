export default (function(doc, win, add, remove, loaded, load) {
  doc.ready = new Promise(function(resolve) {
    if (doc.readyState === "complete") {
      resolve();
    } else {
      function onReady() {
        resolve();
        doc[remove](loaded, onReady, true);
        win[remove](load, onReady, true);
      }
      doc[add](loaded, onReady, true);
      win[add](load, onReady, true);
    }
  });
})(
  document,
  window,
  "addEventListener",
  "removeEventListener",
  "DOMContentLoaded",
  "load"
);
