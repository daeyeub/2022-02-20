const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");


const openModal = () => {
    modalBtn.classList.add("hidden")
    modal.classList.remove("hidden")
}
modalBtn.addEventListener("click", openModal);

const closeBtn = document.querySelector(".button-x")
// const modalOverLay = document.querySelector(".modal__overlay")

const closeModal = () => {
    modalBtn.classList.remove("hidden")
    modal.classList.add("hidden")
}

closeBtn.addEventListener("click", closeModal)
// modalOverLay.addEventListener("click", closeModal)

const modalBox=document.querySelector(".modal-box");

modalBox.addEventListener("mouseleave",closeModal)