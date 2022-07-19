const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$(".tab-item");
const panes = $$(".tab-pane");

const itemActive = $(".tab-item.active");
const line = $(".tabs .line");

items.forEach((item, index) => {
  const pane = panes[index];
  item.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
  };
});

panes.forEach((pane, index) => {});
