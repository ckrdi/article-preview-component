const getShareIcon = document.getElementsByClassName("share-icon"); // HTML Collection
const shareIconArr = [...getShareIcon]; // put it in array

const authorSection = document.getElementsByClassName("author");
const author = [...authorSection][0];

shareIconArr.forEach((icon) => {
  icon.addEventListener("click", function () {
    document.getElementById("share").classList.toggle("active");
    if (window.innerWidth < 1024) {
      author.classList.toggle("active");
    }
  });
});
