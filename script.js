function loadTrendingImages() {
const slider = document.getElementById("trendingImages");
slider.innerHTML = ""; // Clear previous images

for (let i = 1; i <= 8; i++) {  
    const imgData = localStorage.getItem(`trendImage${i}`);  
    if (imgData) {  
        const imgElement = document.createElement("img");  
        imgElement.src = imgData;  
        imgElement.alt = `Trending ${i}`;  
        slider.appendChild(imgElement);  
    }  
}

}

// Ensure images load properly
document.addEventListener("DOMContentLoaded", loadTrendingImages);