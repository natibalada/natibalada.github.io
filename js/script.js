// When page loads
$(document).ready(function () 
{
  // Navbar menu
  var open = false;
  var lastMenuElement;

  function openMenu(currentMenuElement)
  {
    // Hide all menu tabs
    var x = document.getElementById("side-container").querySelectorAll("article");
    for (var i = 0; i < x.length; i++)
    {
      x[i].style.display = "none";
    }

    if (!open)
    {
      document.querySelector("aside").classList.add('open');
      open = true;
    }
    else if (lastMenuElement == currentMenuElement)
    {
      document.querySelector("aside").classList.remove('open');
      open = false;
    }
  }

  // Login menu
  document.getElementById('loginBtn').onclick = function()
  {
    openMenu(this.id);
    document.querySelector(".login").style.display = "initial";
    lastMenuElement = this.id;
  };

  // Cart menu
  $("#cartBtn").click(function(){
    openMenu(this.id);
    document.querySelector(".cart").style.display = "initial";
    lastMenuElement = this.id;
  });

  // Click on body to close side menu
  $("#content").click(function(){
    if (lastMenuElement && open)
      openMenu(lastMenuElement);
  });
});
