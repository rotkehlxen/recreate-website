set_active_link = function () {
  // select all links in navigation bar
  const linkList = document.querySelectorAll("nav a");
  for (link of linkList) {
    if (link.href.endsWith("#")) {
      // toggle to active
      link.classList.toggle("nav-link-active", true);
    } else {
      // toggle to inactive
      link.classList.toggle("nav-link-active", false);
    }
  }
};

window.onload = set_active_link;
