//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
  // פונקציית חיפוש מאזין

  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", searchFunc);
  }

  //כרטיסיות קישורים

  const card = document.getElementById("toEnglishSearchRise");
  card.addEventListener("click", function() { window.location.href = "englishRisePage.html";});

  const card2 = document.getElementById("tobooleanRise");
    card2.addEventListener("click", function() { window.location.href = "booleanpage.html";});

    const card3 = document.getElementById("toAdvancedSearchPage");
    card3.addEventListener("click", function() { window.location.href = "advancedSearchVideoPage.html";});


   

      //פונקצצייה לתפריט ניווט דרגה 2

      if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
          everydropdown.addEventListener('hidden.bs.dropdown', function () {
            // after dropdown is hidden, then find all submenus
              this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                // hide every submenu as well
                everysubmenu.style.display = 'none';
              });
          })
        });
      
        document.querySelectorAll('.dropdown-menu a').forEach(function(element){
          element.addEventListener('click', function (e) {
              let nextEl = this.nextElementSibling;
              if(nextEl && nextEl.classList.contains('submenu')) {	
                // prevent opening link if link needs to open dropdown
                e.preventDefault();
                if(nextEl.style.display == 'block'){
                  nextEl.style.display = 'none';
                } else {
                  nextEl.style.display = 'block';
                }
      
              }
          });
        })
      }


});

//פונקצית
function searchFunc(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("search-box").value;
  if (!searchTerm) {
    return;
  }

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const relevantLinks = [];

  for (var i = 0; i < dropdownItems.length; i++) {
    // Skip submenu items
    if (dropdownItems[i].closest('.submenu')) {
      continue;
    }
    if (dropdownItems[i].innerHTML.includes(searchTerm)) {
      relevantLinks.push(dropdownItems[i].href);
    }
  }

  const badgeCards = document.querySelectorAll(".card-wrapper");
  const badgeLinks = [];

  for (var j = 0; j < badgeCards.length; j++) {
    const badges = badgeCards[j].querySelectorAll(".badge");
    const cardLink = badgeCards[j].querySelector("a");
    const cardHref = cardLink.href;
    for (var k = 0; k < badges.length; k++) {
      if (badges[k].innerHTML.includes(searchTerm)) {
        badgeLinks.push({
          text: badges[k].innerHTML,
          link: cardHref
        });
      }
    }
  }

  if (relevantLinks.length > 0 || badgeLinks.length > 0) {
    showLinks(relevantLinks, event);
    showBadgeLinks(badgeLinks);
  } else {
    showNoResultsMessage();
  }
}

  // פונקציה הצגת תוצאות חיפוש לינקים

function showLinks(links, event) {
  event.preventDefault();
  const list = document.createElement('ul');
  list.classList.add('list-group');
  links.forEach(link => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const a = document.createElement('a');
    const dropdown = document.querySelectorAll(".dropdown-item");
    let text = '';
    for (var i = 0; i < dropdown.length; i++) {
      if (dropdown[i].href === link) {
        text = dropdown[i].innerHTML;
        break;
      }
    }
    a.href = link;
    a.innerText = text;
    a.classList.add('text-primary');
    a.classList.add('font-weight-bold');
    item.appendChild(a);
    list.appendChild(item);
  });
  const searchDropdown = document.getElementById('search-dropdown');
  searchDropdown.innerHTML = '';
  searchDropdown.appendChild(list);
  searchDropdown.classList.add('border', 'border-primary');
  searchDropdown.style.display = 'block';
  setTimeout(function() {
    searchDropdown.style.display = 'none';
    searchDropdown.innerHTML = '';
    searchDropdown.classList.remove('border', 'border-primary');
  }, 9500);
}


//פונקציה של חיפוש על פי מילות מפתח תגיות
function showBadgeLinks(badgeLinks) {
  const list = document.createElement('ul');
  list.classList.add('list-group');
  badgeLinks.forEach(link => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const a = document.createElement('a');
    a.href = link.link;
    a.innerText = link.text;
    a.classList.add('text-primary');
    a.classList.add('font-weight-bold');
    item.appendChild(a);
    list.appendChild(item);
  });
  const searchDropdown = document.getElementById('search-dropdown');
  searchDropdown.appendChild(list);
}

  // פונקציה לא נמצאו תוצאות חיפוש

function showNoResultsMessage() {
  const searchDropdown = document.getElementById("search-dropdown");
  searchDropdown.innerHTML = '<li class="list-group-item">לא נמצאו תוצאות</li>';
  searchDropdown.style.display = 'block';
  setTimeout(() => {
    searchDropdown.style.display = 'none';
    searchDropdown.innerHTML = '';
  }, 2000);
}


/*חיפוששששששששששששש
  
function searchFunc(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("search-box").value;
  if (!searchTerm) {
    return;
  }

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const relevantLinks = [];

  for (var i = 0; i < dropdownItems.length; i++) {
    // Skip submenu items
    if (dropdownItems[i].closest('.submenu')) {
      continue;
    }
    if (dropdownItems[i].innerHTML.includes(searchTerm)) {
      relevantLinks.push(dropdownItems[i].href);
    }
  }

  if (relevantLinks.length > 0) {
    showLinks(relevantLinks, event);
  } else {
    showNoResultsMessage();
  }

  // Generate list items from badges
  const badgeCards = document.querySelectorAll(".card-wrapper");
  const badgeLinks = [];

  for (var j = 0; j < badgeCards.length; j++) {
    const badges = badgeCards[j].querySelectorAll(".badge");
    const cardLink = badgeCards[j].querySelector("a");
    const cardHref = cardLink.href;
    for (var k = 0; k < badges.length; k++) {
      if (badges[k].innerHTML.includes(searchTerm)) {
        badgeLinks.push({
          text: badges[k].innerHTML,
          link: cardHref
        });
      }
    }
  }

  if (badgeLinks.length > 0) {
    showBadgeLinks(badgeLinks);
  }
}


function showBadgeLinks(badgeLinks) {
  const list = document.createElement('ul');
  list.classList.add('list-group');
  badgeLinks.forEach(link => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const a = document.createElement('a');
    a.href = link.link;
    a.innerText = link.text;
    a.classList.add('text-primary');
    a.classList.add('font-weight-bold');
    item.appendChild(a);
    list.appendChild(item);
  });
  document.getElementById('search-dropdown').appendChild(list);
}



  // פונקציה הצגת תוצאות חיפוש לינקים
  function showLinks(links, event) {
    event.preventDefault();
    const list = document.createElement('ul');
    list.classList.add('list-group');
    links.forEach(link => {
      const item = document.createElement('li');
      item.classList.add('list-group-item');
      const a = document.createElement('a');
      const dropdown = document.querySelectorAll(".dropdown-item");
      let text = '';
      for (var i = 0; i < dropdown.length; i++) {
        if (dropdown[i].href === link) {
          text = dropdown[i].innerHTML;
          break;
        }
      }
      a.href = link;
      a.innerText = text;
      a.classList.add('text-primary');
      a.classList.add('font-weight-bold');
      item.appendChild(a);
      list.appendChild(item);
    });
    document.getElementById('search-dropdown').innerHTML = '';
    document.getElementById('search-dropdown').appendChild(list);
    document.getElementById('search-dropdown').classList.add('border', 'border-primary');
    document.getElementById('search-dropdown').style.display = 'block';
    setTimeout(function() {
      document.getElementById('search-dropdown').style.display = 'none';
      document.getElementById('search-dropdown').innerHTML = '';
      document.getElementById('search-dropdown').classList.remove('border', 'border-primary');
    }, 9000);
  }
  
  // פונקציה לא נמצאו תוצאות חיפוש
  function showNoResultsMessage() {
    const searchDropdown = document.getElementById("search-dropdown");
    searchDropdown.innerHTML = '<li class="list-group-item">לא נמצאו תוצאות</li>';
    searchDropdown.style.display = 'block';
    setTimeout(() => {
      searchDropdown.style.display = 'none';
      searchDropdown.innerHTML = '';
    }, 2000);
  }
  
חיפוששששששששששש*/

/*
//חיפוש טיוטה
function searchFunc(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("search-box").value;
  if (!searchTerm) {
    return;
  }

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const relevantLinks = [];

  for (var i = 0; i < dropdownItems.length; i++) {
    // Skip submenu items
    if (dropdownItems[i].closest('.submenu')) {
      continue;
    }
    if (dropdownItems[i].innerHTML.includes(searchTerm)) {
      relevantLinks.push(dropdownItems[i].href);
    }
  }

  if (relevantLinks.length > 0) {
    showLinks(relevantLinks, event);
  } else {
    showNoResultsMessage();
  }
}

*/

 /* שינוי צבע תפריט 
window.onscroll = function() {
    changeNavbarColor();
  };

 
  //שינוי צבע תפריט ניווט
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
 */

  /*
  // פונקציית חיפוש
  function searchFunc(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("search-box").value;
    if (!searchTerm) {
      return;
    }
  
    const dropdown = document.querySelectorAll(".dropdown-item");
    const relevantLinks = [];
  
    for (var i = 0; i < dropdown.length; i++) {
      if (dropdown[i].innerHTML.includes(searchTerm)) {
        relevantLinks.push(dropdown[i].href);
      }
    }
  
    if (relevantLinks.length > 0) {
      showLinks(relevantLinks, event);
    } else {
      showNoResultsMessage();
    }
  }
*/
/*
//פונקציית חיפוש טיוטה
function searchFunc(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("search-box").value;
  if (!searchTerm) {
    return;
  }

  const dropdown = document.querySelectorAll(".dropdown-item");
  const relevantLinks = [];

  for (var i = 0; i < dropdown.length; i++) {
    if (dropdown[i].innerHTML.includes(searchTerm)) {
      relevantLinks.push(dropdown[i].href);
    }
  }

  if (relevantLinks.length > 0) {
    showLinks(relevantLinks,event);
  } else {
    showNoResultsMessage();
  }
}

function showLinks(links, event) {
  event.preventDefault();
  const list = document.createElement('ul');
  list.classList.add('list-group');
  links.forEach(link => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const a = document.createElement('a');
    const dropdown = document.querySelectorAll(".dropdown-item");
    let text = '';
    for (var i = 0; i < dropdown.length; i++) {
      if (dropdown[i].href === link) {
        text = dropdown[i].innerHTML;
        break;
      }
    }
    a.href = link;
    a.innerText = text;
    a.classList.add('text-primary');
    a.classList.add('font-weight-bold');
    item.appendChild(a);
    list.appendChild(item);
  });
  document.getElementById('search-dropdown').innerHTML = '';
  document.getElementById('search-dropdown').appendChild(list);
  document.getElementById('search-dropdown').classList.add('border', 'border-primary');
  document.getElementById('search-dropdown').style.display = 'block';
}


function showNoResultsMessage() {
  document.getElementById('search-dropdown').innerHTML = '<li class="list-group-item">לא נמצאו תוצאות</li>';
  document.getElementById('search-dropdown').style.display = 'block';
  
}




*/
  /*
  //פונקציית חיפוש טיוטה 
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
  
*/

 /* חיפוש טיוטה
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