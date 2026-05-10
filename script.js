const images = document.querySelectorAll('.image');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');

const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function showImage(index){

  const img = images[index].querySelector('img');
  const caption = images[index].querySelector('.caption');

  lightboxImg.src = img.src;
  lightboxCaption.textContent = caption.textContent;

}

images.forEach((image,index)=>{

  image.addEventListener('click',()=>{

    currentIndex = index;

    lightbox.style.display = 'flex';

    showImage(currentIndex);

  });

});

nextBtn.addEventListener('click',()=>{

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  showImage(currentIndex);

});

prevBtn.addEventListener('click',()=>{

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  showImage(currentIndex);

});

closeBtn.addEventListener('click',()=>{

  lightbox.style.display = 'none';

});

lightbox.addEventListener('click',(e)=>{

  if(e.target === lightbox){
    lightbox.style.display = 'none';
  }

});

const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button=>{

  button.addEventListener('click',()=>{

    document.querySelector('.active')
      .classList.remove('active');

    button.classList.add('active');

    const filter = button.dataset.filter;

    images.forEach(image=>{

      if(filter === 'all' ||
         image.classList.contains(filter)){

        image.style.display = 'block';

      }else{

        image.style.display = 'none';

      }

    });

  });

});