class Basket {

  openModal = () => {
    const modalCart = document.querySelector(".modal-cart");
    modalCart.style.display = "flex";
  }

  closeModal = () => {
    const modalCart = document.querySelector(".modal-cart");
    modalCart.style.display = "none";
  }
}

export default new Basket;