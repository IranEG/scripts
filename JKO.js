// Safely attempt to set the completion status. 
if (typeof API_1484_11 !== 'undefined' && typeof API_1484_11.SetValue === 'function') { API_1484_11.SetValue('cmi.completion_status', 'completed'); } 
// Cache the potentially repeated DOM lookups. 
var courseHeaders = document.getElementsByName("courseheader"); if (courseHeaders.length > 0) { var contentDocument = courseHeaders[0].contentDocument || courseHeaders[0].contentWindow.document; var elementC = contentDocument.getElementById("c"); 
// Check if element exists and has a submit function before calling it. 
if (elementC && typeof elementC.submit === 'function') { elementC.submit(); } } 
