let card = document.getElementById("cardshok");
let list = document.querySelector(".card-news");

card.onclick = () => {
  list.innerHTML = "";
  list.insertAdjacentElement(
    ` <article id="cardshok" class="card">
        <img class="shok1" src="./shok1.jpg" alt="" />
        <h6>ЗАГАДГОЧНАЯ ПРОПАЖА МЯВО</h6>
        <p>Омори, не обнаружив мяво у мебя в белом пространстве, наёл это вместо любимого питомца</p>
      </article>`
  );
};
