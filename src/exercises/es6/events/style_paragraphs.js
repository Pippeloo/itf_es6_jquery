// Style the paragraphs
const paragraphs = document.getElementById("paragraphs");

// ===== Font Family =====
const selector = document.getElementById("font");

selector.addEventListener("change", function(event) {
  paragraphs.style.fontFamily = event.target.value + "," + "sans-serif";
});

// ===== Font Size =====
const sizeSelector = document.getElementsByName("fontsize");

sizeSelector.forEach(function(size) {
  size.addEventListener('change', function(event) {
    paragraphs.style.fontSize = event.target.value;
  });
});

// ===== Font Style =====
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");

bold.addEventListener("click", function() {
    // check if checkbox is checked
    if (bold.checked) {
      paragraphs.style.fontWeight = "bold";
    } else {
      paragraphs.style.fontWeight = "normal";
    }
});

italic.addEventListener("click", function() {
   // check if checkbox is checked
   if (italic.checked) {
     paragraphs.style.fontStyle = "italic";
   } else {
     paragraphs.style.fontStyle = "normal";
   }
});

// ===== darkTheme =====
const darkTheme = document.querySelector('button');

darkTheme.addEventListener('click', function() {
  if (darkTheme.innerHTML === 'Light theme') {
    paragraphs.style.backgroundColor = '#f8f8f8';
    paragraphs.style.color = '#111';
    darkTheme.innerHTML = 'Dark theme';
  } else {
    paragraphs.style.backgroundColor = '#111';
    paragraphs.style.color = '#f8f8f8';
    darkTheme.innerHTML = 'Light theme';
  }
});





