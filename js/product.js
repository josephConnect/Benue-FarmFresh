// Product detail Work
document
  .querySelector("#product-detail-button")
  .addEventListener("click", function () {
    document.querySelector(".more-description").classList.toggle("hidden");
    console.log("Info button was clicked!");
  });

// Product Category List Working
document
  .querySelector(".product-btn-tubers")
  .addEventListener("click", function () {
    document.querySelector(".tubers-menu").classList.toggle("hidden");
    document.querySelector(".legumes-menu").classList.add("hidden");
    document.querySelector(".fruits-menu").classList.add("hidden");
    document.querySelector(".vegetables-menu").classList.add("hidden");
  });
document
  .querySelector(".product-btn-legumes")
  .addEventListener("click", function () {
    document.querySelector(".tubers-menu").classList.add("hidden");
    document.querySelector(".legumes-menu").classList.toggle("hidden");
    document.querySelector(".fruits-menu").classList.add("hidden");
    document.querySelector(".vegetables-menu").classList.add("hidden");
  });
document
  .querySelector(".product-btn-vegetables")
  .addEventListener("click", function () {
    document.querySelector(".tubers-menu").classList.add("hidden");
    document.querySelector(".legumes-menu").classList.add("hidden");
    document.querySelector(".fruits-menu").classList.add("hidden");
    document.querySelector(".vegetables-menu").classList.toggle("hidden");
  });
document
  .querySelector(".product-btn-fruits")
  .addEventListener("click", function () {
    document.querySelector(".tubers-menu").classList.add("hidden");
    document.querySelector(".legumes-menu").classList.add("hidden");
    document.querySelector(".fruits-menu").classList.toggle("hidden");
    document.querySelector(".vegetables-menu").classList.add("hidden");
  });

// PRODUCT WORKING
// CASSAVA
document.querySelector(".cassava-menu").addEventListener("click", function () {
  document.querySelector(".product").innerHTML = "";
  const addToProduct = `<div class="product-common cassava-product">
  <div class="img-container">
    <img class="product-img" src="/img/Yam-Big.png" alt="yam" />
  </div>
  <div class="product-content">
    <p class="product-name">Cassava</p>
    <div class="description-container">
      <p class="product-description">Description</p>
      <button
        id="product-detail-button-cassava"
        class="product-detail-button"
      >
        More Info.
      </button>
    </div>
 
  </div>
</div>`;
  document
    .querySelector(".product")
    .insertAdjacentHTML("afterbegin", addToProduct);
});

//Yam Static Display
document.querySelector(".product").innerHTML = "";
const addToProduct = `<div class="product-common cassava-product">
  <div class="img-container">
    <img class="product-img" src="/img/Yam-Big.png" alt="yam" />
  </div>
  <div class="product-content">
    <p class="product-name">Yam</p>
    <div class="description-container">
      <p class="product-description">Description</p>
      <button
        id="product-detail-button-yam"
        class="product-detail-button yam-info"
      >
        More Info.
      </button>
    </div>
    <p class="description">
      Yam is a staple crop in Nigeria and holds cultural
      significance in many communities. In Benue State, yam
      cultivation is widespread, with farmers employing traditional
      methods such as mounding and staking to grow this tuberous
      root crop. Yam farms can be found across the state,
      particularly in areas with fertile soils and adequate
      rainfall. The markets in Benue State are well-supplied with
      fresh yams, and the crop is also transported to other parts of
      Nigeria for sale.
    </p>
  </div>
</div>`;
document
  .querySelector(".product")
  .insertAdjacentHTML("afterbegin", addToProduct);

// YAM
document.querySelector(".yam-menu").addEventListener("click", function () {
  document.querySelector(".more-description-js").innerHTML = "";

  document.querySelector(".product").innerHTML = "";

  const yamDetail = `Yam more description loading`;

  const addToProduct = `<div class="product-common cassava-product">
  <div class="img-container">
    <img class="product-img" src="/img/Yam-Big.png" alt="yam" />
  </div>
  <div class="product-content">
    <p class="product-name">Yam</p>
    <div class="description-container">
      <p class="product-description">Description</p>
      <button
        id="product-detail-button-yam"
        class="product-detail-button yam-info"
      >
        More Info.
      </button>
    </div>
    <p class="description">
      Yam is a staple crop in Nigeria and holds cultural
      significance in many communities. In Benue State, yam
      cultivation is widespread, with farmers employing traditional
      methods such as mounding and staking to grow this tuberous
      root crop. Yam farms can be found across the state,
      particularly in areas with fertile soils and adequate
      rainfall. The markets in Benue State are well-supplied with
      fresh yams, and the crop is also transported to other parts of
      Nigeria for sale.
    </p>
  </div>
</div>`;
  document
    .querySelector(".product")
    .insertAdjacentHTML("afterbegin", addToProduct);

  document
    .querySelector(".more-description-js")
    .insertAdjacentHTML("afterbegin", yamDetail);
});

// Yam More INformation
// document.querySelector(".yam-info").addEventListener("click", function () {
//   console.log(`Yam more info button has been clicked`);
//   document.querySelector("#more-description-js").classList.remove("hidden");
// });
