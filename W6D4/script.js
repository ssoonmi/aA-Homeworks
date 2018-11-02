document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    if (e.target.tagName === 'LI' ) {
      const li = e.target;
      if (li.className === "visited") {
        li.className = "";
      } else {
        li.className = "visited";
      }
    }
  };

  document.querySelector("ul#restaurants").addEventListener('click', toggleLi);


  // adding SF places as list items

  // --- your code here!
  const form = document.querySelector("form");
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type=text]");
    const ul = document.querySelector("ul#sf-places");
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.append(li);
    input.value = "";
  });


  // adding new photos

  // --- your code here!
  const photoForm = document.querySelector(".photo-form-container");
  const photoButton = document.querySelector(".photo-show-button");
  const showForm = (e) => {
    photoForm.classList.remove("hidden");
    photoButton.removeEventListener("click", showForm);
    photoSubmit.addEventListener("click", submitForm);
  };

  photoButton.addEventListener("click", showForm);

  const photoSubmit = document.querySelector(".photo-url-submit");
  const submitForm = (e) => {
    e.preventDefault();
    const photoUrl = document.querySelector(".photo-url-input");
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute("src", photoUrl.value);
    photoUrl.value = "";
    li.appendChild(img);
    const ul = document.querySelector(".dog-photos");
    ul.append(li);
    photoForm.classList.add("hidden");
    photoSubmit.removeEventListener("click", submitForm);
    photoButton.addEventListener("click", showForm);
  };





});
