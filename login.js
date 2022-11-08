function adduser(){
    username=document.getElementById("username").value;
    localStorage.setItem("storage",username);
    window.location="kwitter_page.html";
    
}