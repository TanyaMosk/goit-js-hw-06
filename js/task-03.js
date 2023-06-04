const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageEl = document.querySelector(".gallery");

const markup = images
  .map(
    ({ url, alt }) => `<li class = "gallery-item">
  <img class = "gallery-img" src="${url}" alt="${alt}" >
</li>`
  )
  .join("");
imageEl.insertAdjacentHTML("beforeend", markup);
imageEl.style.listStyle = "none";
imageEl.style.display = "flex";
imageEl.style.flexWrap = "wrap";
imageEl.style.justifyContent = "center";
imageEl.style.gap = "30px";

const galleryImages = document.querySelectorAll(".gallery-img");
galleryImages.forEach((image) => {
  image.style.width = "360px";
  image.style.height = "220px";
  image.style.borderRadius = "5px";
});
