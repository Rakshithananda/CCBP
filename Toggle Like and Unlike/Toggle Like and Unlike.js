let imageElement = document.getElementById("puppyImage");
let iconElement = document.getElementById("likeIcon");
let likeButton = document.getElementById("likeButton");
let imageLike = false;

function onClickLikeButton() {
    if (imageLike === false) {
        imageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
        iconElement.style.color = "#0967d2"
        likeButton.style.backgroundColor = "#0967d2"
        likeButton.style.color = "#ffffff"
        imageLike = true;
    } else {
        imageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
        iconElement.style.color = "#cbd2d9"
        likeButton.style.backgroundColor = "#cbd2d9"
        likeButton.style.color = "#9aa5b1"
        imageLike = false
    }

}