// Client reviews slider
const track = document.getElementById('reviewTrack');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const cardWidth = 320; // card width + gap

let index = 0;

nextBtn.addEventListener('click', () => {
  const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / cardWidth);
  if(index < maxIndex){
    index++;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if(index > 0){
    index--;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});
