const setBlock = document.querySelectorAll(".animated");

function check(block) {
  if (block.getBoundingClientRect().top < 500) {
    block.classList.add("none");
  }
}

function onScroll() {
  setBlock.forEach(function (item) {
    check(item);
  });
}

document.addEventListener("scroll", onScroll);

function createLi(subtitle, title, text, imageURL) {
  const li = document.createElement("li");
  li.innerHTML = `
             <button>
              <svg
                class="red"
                width="14"
                height="18"
                viewBox="0 0 14 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0L12 0C13.1046 0 14 0.89543 14 2L14 18L7.09495 13L0 18L0 2C0 0.89543 0.895431 0 2 0Z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <div>
              <img src="${imageURL}" alt="" />
            </div>
            <div class="text">
              <p>${subtitle}</p>
              <h3>
                ${title}
              </h3>
              <p>
                ${text}
              </p>
              <div class="info">
                <p>Aug 6</p>
                <div class="count">
                  <img src="./images/Comment.svg" alt="" />

                  <p>342</p>
                </div>
                <div class="count">
                  <img src="./images/Heart.svg" alt="" />

                  <p>830</p>
                </div>
              </div>
            </div>`;
  const ul = document.querySelector(".news .left");
  ul.append(li);
}

createLi(
  "Food",
  "Three Courses, 20 Euros: The Affordable Dining Renaissance in Paris",
  "The Los Angeles area, for all of its culinary diversity, has not historically been thought of as a haven for bread lovers. The area has a reputation as a place where gluten fears to tread."
);
createLi(
  "Science",
  "Watch the High-Flying Physics of a Plant’s Exploding Fruits",
  "Three undergradute physics majors and their professor worked out how the hairyflower wild petunia shoots tiny seeds more than 20 feet through the air"
);
