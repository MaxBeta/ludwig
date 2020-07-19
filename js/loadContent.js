
var lastLoadedParentContent = "";

$('#about').on('click', function() {
  lastLoadedParentContent = "content/about.html";
  $('#maindiv').load(lastLoadedParentContent);
});
