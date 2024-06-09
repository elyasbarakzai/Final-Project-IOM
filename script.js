function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  };

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  };

  // menu part
document.getElementById('openMenuBtn').onclick = function() {
  document.getElementById('menuModal').style.display = 'block';
};

document.querySelector('.close-btn').onclick = function() {
  document.getElementById('menuModal').style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == document.getElementById('menuModal')) {
      document.getElementById('menuModal').style.display = 'none';
  }
};

// for read more model js

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});


// Maybe also close with "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") {
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; 
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden";
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}