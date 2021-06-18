const getShareIcon = document.getElementsByClassName("share-icon"); // HTML Collection
const shareIconArr = [...getShareIcon]; // put it in array

shareIconArr.forEach((icon) => {
  icon.addEventListener("click", function () {
    document.getElementById("share").classList.toggle("active");
  });
});
