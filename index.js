const header = document.querySelector('.header');
const desktopNav = document.querySelector('.desktop-nav');
const headerHeight = header.style.height;
function restore() {
  hamburgerIcon.classList.remove('active');
  mobileMenu.classList.remove('active');
  body.classList.remove('active');
}

window.onscroll = function fixedNav() {
  if (window.pageYOffset > headerHeight) {
    desktopNav.classList.add('fixed-top');
  } else {
    desktopNav.classList.remove('fixed-top');
  }
};
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('active');
});

const mobileMenuIContainer = document.querySelectorAll('.mobile-menu-item');
mobileMenuIContainer.forEach((item) => {
  item.addEventListener('click', () => {
    restore();
  });
});

const performersMainContainer = document.querySelector('.performers-main-container');
const performersSection = document.querySelector('.performers-section');
const performersHeaderContainer = document.createElement('div');
const performersTitle = document.createElement('h2');
const performersBar = document.createElement('span');

performersTitle.innerHTML = 'Featured Performers';
performersHeaderContainer.classList.add(
  'container',
  'd-flex',
  'flex-column',
  'align-items-center',
);
performersTitle.classList.add(
  'text-dark',
  'pt-3',
);
performersBar.classList.add('orange-bar');

performersHeaderContainer.append(
  performersTitle,
  performersBar,
);

performersMainContainer.insertBefore(performersHeaderContainer, performersSection);

const performersInfo = [
  {
    performerPicture: './assets/mobile/performers/sara-mingardo.jpg',
    performername: 'Sara Mingardo',
    AlternativeText:'Sara Mingardo',
    post: 'Contralto',
    performerDescription: 'The Italian true contralto, Sara Mingardo, studied in her hometown Venice' +
        ' at the Academy Benedetto Marcello. She won prizes in some singing competitions',
  },
  {
    performerPicture: './assets/mobile/performers/maddalena-de-biasi.jpg',
    performername: 'Maddalena De Biasi',
    AlternativeText:'Maddalena De Biasi',
    post: 'Soprano',
    performerDescription: 'Maddalena began her musical studies at a very young age. At the age of sixteen' +
        ' she was admitted to the conservatory Dall’Abaco in Verona and then graduated with full marks in 2019.',
  },
  {
    performerPicture: './assets/mobile/performers/elaine-daiber.jpg',
    performername: 'Elaine Daiber',
    AlternativeText:'Elaine Daiber',
    post: 'Soprano',
    performerDescription: 'Boston-based soprano, Elaine Daiber, has been heralded for her “spectacular vocalism”,' +
        ' which has garnered much acclaim on the operatic, concert, and recital stages.',
  },
  {
    performerPicture: './assets/mobile/performers/elena-matteucci.jpg',
    performername: 'Elena Matteucci',
    AlternativeText:'Elena Matteucci',
    post: 'Piano.',
    bar: '',
    performerDescription: 'Pianist Matteucci graduated with special honors in piano' +
        ' from the Santa Cecilia Conservatory' +
        ' and in chamber music from the Academy of Santa Cecilia with' +
        ' Riccardo Brengola.',
  },
  {
    performerPicture: './assets/mobile/performers/federico-piccotti.jpg',
    performername: 'Federico Piccotti',
    AlternativeText:'Federico Piccotti',
    post: 'Violino',
    bar: '',
    performerDescription: 'Born in Rome, he graduated from the Conservatory of santa' +
        'Cecilia and subsequently specialised at the National Academy of Santa Cecilia.',
  },
  {
    performerPicture: './assets/mobile/performers/tomasz-sierant.gif',
    performername: 'Tomasz Sierant',
    AlternativeText:'Tomasz Sierant',
    post: 'Flaute',
    bar: '',
    performerDescription: 'Polish flutist Tomasz Sierant: born in 1995, began music study 2008;' +
        'immediately became successful in flute competitions; received music education in Poland, Belgium and Switzerland',
  },
];

const hiddenPerformers = document.createElement('div');
hiddenPerformers.classList.add('hidden-performers');

for (let i = 0; i < performersInfo.length; i += 1) {
  const performersContainer = document.createElement('div');
  performersContainer.classList.add(
    'performer-container',
    'py-2',
    'd-flex',
    'justify-content-around',
    'gap-5',
  );
  const performerLeft = document.createElement('div');
  performerLeft.classList.add(
    'performer-bg',
    'me-3',
    'me-md-5',
    'mt-3',
  );

  const performerImg = document.createElement('img');
  performerImg.classList.add('performer-img');
  performerImg.src = performersInfo[i].performerPicture;
  performerImg.alt = performersInfo[i].AlternativeText
  performerImg.width = 130;
  performerImg.height = 100;

  performerLeft.appendChild(performerImg);

  const performerRight = document.createElement('div');
  performerRight.classList.add(
    'performer-right',
    'bg-light',
      'p-3'
  );

  const performerName = document.createElement('h3');
  performerName.classList.add('performer-name');
  performerName.innerHTML = performersInfo[i].performername;

  const performerPost = document.createElement('p');
  performerPost.classList.add(
    'performer-post',
  );

  performerPost.innerHTML = performersInfo[i].post;

  const grayBar = document.createElement('span');
  grayBar.classList.add('gray-bar');

  const performerPara = document.createElement('p');
  performerPara.classList.add('performer-para');
  performerPara.innerHTML = performersInfo[i].performerDescription;

  performerRight.append(
    performerName,
    performerPost,
    grayBar,
    performerPara,
  );

  performersContainer.append(
    performerLeft,
    performerRight,
  );
  if (i < 2) {
    performersSection.appendChild(performersContainer);
  } else {
    performersSection.appendChild(performersContainer);
    performersContainer.classList.add('d-none');
  }
}

const showmore = document.createElement('div');
showmore.classList.add(
  'text-center',
  'show-more',
  'shadow',
  'py-2',
);

showmore.innerHTML = `<span>Show More<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ec5242" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></span>`;

performersMainContainer.appendChild(showmore);
const showLess = document.createElement('div');
showLess.classList.add(
  'text-center',
  'show-less',
  'shadow',
  'py-2',
);

showLess.innerHTML = `<span>Show Less<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ec5242" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg></span>`;

const performers = document.querySelectorAll('.performer-container');
showmore.addEventListener('click', () => {
  showmore.classList.toggle('active');
  performers.forEach((pfm) => {
    if (pfm.classList.contains('d-none')) {
      pfm.classList.remove('d-none');
    }
    performersMainContainer.appendChild(showLess);
  });
});

const performersArray = Array.from(performers);
showLess.addEventListener('click', () => {
  for (let item = 0; item < performersArray.length; item += 1) {
    if (item >= 2) {
      performersArray[item].classList.add('d-none');
    }
  }
  performersMainContainer.removeChild(showLess);
  showmore.classList.remove('active');
});
