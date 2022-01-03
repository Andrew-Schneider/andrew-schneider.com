function switch_view(check){
if(check.checked){
    document.getElementById('tldr-content').style.display = "block";
    document.getElementById('content').style.display = "none";
} else {
    document.getElementById('tldr-content').style.display = "none";
    document.getElementById('content').style.display = "block";
}
}