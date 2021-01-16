const tabItems = document.querySelectorAll(".tab");
const tabContentItems = document.querySelectorAll(".detail");

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("selected");
  });
}
function removerShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}
function selectItem(e) {
  removeBorder();
  removerShow();
  this.classList.add("selected");
  let tabContentItem = document.querySelector(`#${this.id}Cont`);
  tabContentItem.classList.add("show");
}

tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});
