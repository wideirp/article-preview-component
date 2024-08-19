// const share_
const menu = document.getElementById("share-menu");
const shareBtn = document.querySelector(".author__share");

shareBtn.addEventListener("click", (event) => {
  const currentState = menu.dataset.state;
  if (currentState === "opened") {
    menu.dataset.state = "closed";
    shareBtn.dataset.state = "";
  } else {
    menu.dataset.state = "opened";
    shareBtn.dataset.state = "active";
  }
});
