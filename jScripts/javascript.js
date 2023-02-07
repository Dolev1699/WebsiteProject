//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
  // פונקציית חיפוש

  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", searchFunc);
  }

  
});


window.onscroll = function() {
    changeNavbarColor();
  };

  function changeNavbarColor() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("navbar-dark");
      navbar.classList.remove("bg-light");
    } else {
      navbar.classList.add("bg-light");
      navbar.classList.remove("navbar-dark");
    }
  }

  //פונקציית חיפוש
  function searchFunc() {
    const searchTerm = document.getElementById("search-box");
    // נמצא את כל הכותרות
    //const cardTitles = document.querySelectorAll(".card-wrapper h5");
    //עמודים
    const dropdown = document.querySelectorAll(".dropdown-item");

    for (var i = 0; i < dropdown.length; i++) {
      if (dropdown[i].innerHTML.includes(searchTerm.value)) {
        console.log(dropdown[i].href); //הלינק הרלוונטי על פי הנושא

       const toast = document.getElementById('toastSearch');
        toast.show();
    }
  }
}
  


 /*
  function searchFunc() {
    // נמצא את תיבת הטקסט
    const searchWord = document.getElementById("search-box");
    // נמצא את כל הכותרות
    const titles = document.querySelectorAll(".card-wrapper h5");
  
    // לכל כותרת נבדוק האם היא מכילה את הערך שנמצא בתיבת הטקסט
    for (i = 0; i < titles.length; i++) {
      if (titles[i].innerHTML.includes(searchWord.value)) {
        // אם כן 
       alert("קיים");
      } else {
        //אם לא
        alert("לא קיים");
      }
    }
  }
  */