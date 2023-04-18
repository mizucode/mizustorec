const wrapper = document.querySelector(".wrapper"),
	carousel = document.querySelector(".carousel"),
	images = document.querySelectorAll(".carousel-img"),
	buttons = document.querySelectorAll(".button");

let imageIndex = 1,
	intervalid;

const autoslide = () => {
	intervalid = setInterval(() => slideImage(++imageIndex), 5000);
};
autoslide();

const slideImage = () => {
	imageIndex =
		imageIndex === images.length
			? 0
			: imageIndex < 0
			? images.length - 1
			: imageIndex;
	carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
	clearInterval(intervalid);
	imageIndex += e.target.id === "next" ? 1 : -1;
	slideImage(imageIndex);
	autoslide();
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalid));
wrapper.addEventListener("mouseleave", autoslide);
