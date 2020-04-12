const innerHTMLContent = {
  home: `<div class="home-wrapper">
  <div class="preview active">
      <header class="preview-text">
      <h3>Eatery Cafe &amp; Restaurant</h3>
      <h1>Our mission is to provide an unforgettable experience</h1>
      <button data-id="team" class="button">Meet our chef</button>
      </header>
  </div>
  <div class="preview">
      <header class="preview-text">
      <h3>Your Perfect Breakfast</h3>
      <h1>The best dinning quality can be here too!</h1>
      <button data-id="menu" class="button">Discover menu</button>
      </header>
  </div>
  <div class="preview">
      <header class="preview-text">
      <h3>New Restaurant in Town</h3>
      <h1>Enjoy our special menus every Sunday and Friday</h1>
      <a href="#reservation" class="button">Reservation</a>
      </header>
  </div>
  </div>`,
  about: `<div class="about-wrapper">
  <div class="text">
  <div class="title">
      <h4>Read our story</h4>
      <h2>We've been Making The Delicious Foods Since 1999</h2>
  </div>

  <div class="body">
      <p>
      Fusce hendrerit malesuada lacinia. Donec semper semper sem
      vitae malesuada. Proin scelerisque risus et ipsum semper
      molestie sed in nisi. Ut rhoncus congue lectus, rhoncus
      venenatis leo malesuada id.
      </p>
      <p>
      Sed elementum vel felis sed scelerisque. In arcu diam,
      sollicitudin eu nibh ac, posuere tristique magna. Sed
      elementum vel felis sed scelerisque. In arcu diam,
      sollicitudin eu nibh ac, posuere tristique magna.
      </p>
  </div>
  </div>
  <div class="image">
  <img src="images/about-image.jpg" alt="" />
  </div>
  </div>`,
  team: `<div class="container">
  <div class="header">
  <div class="title">
      <h2>Meet our chefs</h2>
      <h4>They are nice &amp; friendly</h4>
  </div>
  </div>

  <div class="team-member">
  <div class="team-thumb">
      <img src="images/team-image1.jpg" class="img-responsive" alt="" />
      <div class="team-hover">
      <div class="team-item">
          <h4>Duis vel lacus id magna mattis vehicula</h4>
          <ul class="social-icon">
          <li><a href="#" class="fa fa-linkedin-square"></a></li>
          <li><a href="#" class="fa fa-envelope-o"></a></li>
          </ul>
      </div>
      </div>
  </div>
  <div class="team-info">
      <h3>New Catherine</h3>
      <p>Kitchen Officer</p>
  </div>
  </div>

  <div class="team-member">
  <div class="team-thumb">
      <img src="images/team-image2.jpg" class="img-responsive" alt="" />
      <div class="team-hover">
      <div class="team-item">
          <h4>Cras suscipit neque quis odio feugiat</h4>
          <ul class="social-icon">
          <li><a href="#" class="fa fa-instagram"></a></li>
          <li><a href="#" class="fa fa-flickr"></a></li>
          </ul>
      </div>
      </div>
  </div>
  <div class="team-info">
      <h3>Lindsay Perlen</h3>
      <p>Owner &amp; Manager</p>
  </div>
  </div>

  <div class="team-member">
  <div class="team-thumb">
      <img src="images/team-image3.jpg" class="img-responsive" alt="" />
      <div class="team-hover">
      <div class="team-item">
          <h4>Etiam auctor enim tristique faucibus</h4>
          <ul class="social-icon">
          <li><a href="#" class="fa fa-github"></a></li>
          <li><a href="#" class="fa fa-google"></a></li>
          </ul>
      </div>
      </div>
  </div>
  <div class="team-info">
      <h3>Isabella Grace</h3>
      <p>Pizza Specialist</p>
  </div>
  </div>
  </div>`,
  menu: `<div class="container">
  <div class="header">
  <div class="title">
      <h2>Our Menus</h2>
      <h4>Tea Time &amp; Dining</h4>
  </div>
  </div>

  <div class="menu-thumb-wrapper">
  <!-- MENU THUMB -->
  <div class="menu-thumb">
      <a href="images/menu-image1.jpg" class="image-popup" title="American Breakfast">
      <img src="images/menu-image1.jpg" class="img-responsive" alt="" />

      <div class="menu-info">
          <div class="menu-item">
          <h3>American Breakfast</h3>
          <p>Tomato / Eggs / Sausage</p>
          </div>
          <div class="menu-price">
          <span>$25</span>
          </div>
      </div>
      </a>
  </div>
  </div>

  <div class="menu-thumb-wrapper">
  <!-- MENU THUMB -->
  <div class="menu-thumb">
      <a href="images/menu-image2.jpg" class="image-popup" title="Self-made Salad">
      <img src="images/menu-image2.jpg" class="img-responsive" alt="" />

      <div class="menu-info">
          <div class="menu-item">
          <h3>Self-made Salad</h3>
          <p>Green / Fruits / Healthy</p>
          </div>
          <div class="menu-price">
          <span>$18</span>
          </div>
      </div>
      </a>
  </div>
  </div>

  <div class="menu-thumb-wrapper">
  <!-- MENU THUMB -->
  <div class="menu-thumb">
      <a href="images/menu-image3.jpg" class="image-popup" title="Chinese Noodle">
      <img src="images/menu-image3.jpg" class="img-responsive" alt="" />

      <div class="menu-info">
          <div class="menu-item">
          <h3>Chinese Noodle</h3>
          <p>Pepper / Chicken / Vegetables</p>
          </div>
          <div class="menu-price">
          <span>$34</span>
          </div>
      </div>
      </a>
  </div>
  </div>

  <div class="menu-thumb-wrapper">
  <!-- MENU THUMB -->
  <div class="menu-thumb">
      <a href="images/menu-image4.jpg" class="image-popup" title="Rice Soup">
      <img src="images/menu-image4.jpg" class="img-responsive" alt="" />

      <div class="menu-info">
          <div class="menu-item">
          <h3>Rice Soup</h3>
          <p>Green / Chicken</p>
          </div>
          <div class="menu-price">
          <span>$28</span>
          </div>
      </div>
      </a>
  </div>
  </div>

  <div class="menu-thumb-wrapper">
  <!-- MENU THUMB -->
  <div class="menu-thumb">
      <a href="images/menu-image5.jpg" class="image-popup" title="Project title">
      <img src="images/menu-image5.jpg" class="img-responsive" alt="" />

      <div class="menu-info">
          <div class="menu-item">
          <h3>Deli Burger</h3>
          <p>Beef / Fried Potatoes</p>
          </div>
          <div class="menu-price">
          <span>$46</span>
          </div>
      </div>
      </a>
  </div>
  </div>

  <div class="menu-thumb-wrapper">
  <!-- MENU THUMB -->
  <div class="menu-thumb">
      <a href="images/menu-image6.jpg" class="image-popup" title="Project title">
      <img src="images/menu-image6.jpg" class="img-responsive" alt="" />

      <div class="menu-info">
          <div class="menu-item">
          <h3>Big Flat Fried</h3>
          <p>Pepper / Crispy</p>
          </div>
          <div class="menu-price">
          <span>$30</span>
          </div>
      </div>
      </a>
  </div>
  </div>
  </div>`,
  contact: `<div class="container">
  <div class="map-section">
  <div id="google-map">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.603292480072!2d3.391954114770978!3d6.571648295247206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b929c190a203f%3A0xf511d0f19f8251d0!2sBuari%20St%2C%20Ogudu%20100242%2C%20Lagos!5e0!3m2!1sen!2sng!4v1568456147307!5m2!1sen!2sng"
      width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
  </div>
  </div>

  <div class="form-section">
  <div>
      <div class="section-title">
      <h2>Contact Us</h2>
      </div>
  </div>

  <!-- CONTACT FORM -->
  <form class="form">
      <!-- IF FORM IS VALID -->
      <h6 class="form-valid">
      Your message has been sent successfully.
      </h6>

      <!-- IF FORM IS NOT VALID -->
      <h6 class="form-invalid">
      E-mail must be valid and message must be longer than 1
      character.
      </h6>

      <div class="name">
      <input type="text" class="form-control" id="form-name" name="name" placeholder="Full name" />
      </div>

      <div class="email">
      <input type="email" class="form-control" id="form-email" name="email" placeholder="Email address" />
      </div>

      <div class="message">
      <input type="text" class="form-control" id="form-subject" name="subject" placeholder="Subject" />

      <textarea class="form-control" rows="6" id="form-message" name="message" placeholder="Tell about your project"></textarea>

      <button class="form-control" id="form-submit" name="submit">
          Send Message
      </button>
      </div>
  </form>
  </div>
  </div>`,
};

/**
 * @description Creates a document fragment.
 * The document fragment is preferred to improve the performance when
 * creating or/and appending elements.
 * @example generateFragment('home', '<div></div>');
 *
 * @returns {DocumentFragment} .
 * @param {string} type - Type of content to be generated can be any of `
 * home`, `about`, `team`, `contact' or `menu`.
 * @param {string} content - The innerHTML content of the fragment to be generated.
 */
const generateFragment = (type, content) => {
  const currentFragment = document.createDocumentFragment();

  const section = document.createElement('section');
  section.classList.add(type);
  section.id = type;
  section.innerHTML = content;
  currentFragment.appendChild(section);
  return currentFragment;
};

/**
 * @description Handles click event to change page content.
 * @example document.addEventListener('click', navHandler(parentElement));
 *
 * @returns {Function} .
 * @param {Element} mainElement - Parent element to be manipulated.
 *
 */
const navHandler = mainElement => {
  const formatActiveNavBar = (id, target) => {
    const currentActiveElement = document.querySelector('.active-nav');
    const currentSectionElement = document.querySelector('.current-section');
    if (currentActiveElement) {
      currentActiveElement.classList.remove('active-nav');
    }
    currentSectionElement.textContent = id === 'team' ? 'chef' : id;
    target.classList.add('active-nav');
  };

  const replaceElement = (oldElementID, target) => {
    if (mainElement.firstChild.id === oldElementID) {
      return;
    }
    const newElement = generateFragment(
      oldElementID,
      innerHTMLContent[oldElementID],
    );
    mainElement.replaceChild(newElement, mainElement.firstChild);

    formatActiveNavBar(oldElementID, target);
  };

  const navigator = ({
    target,
    target: {
      dataset: { id },
    },
  }) => {
    if (!id) {
      return false;
    }

    replaceElement(id, target);

    return true;
  };

  return navigator;
};

const mainElement = document.querySelector('main.main');
const navElement = document.querySelector('nav');
const navbarToggle = document.querySelector('.navbar-toggle');
const navList = document.querySelector('.nav-list');

/**
 * @description Adds 'scroll' class to the navElement element when the
 * current page is not the home page and when it's the homepage checks the
 * scrollY position and adds or remove scroll class accordingly.
 * @example styleNavBar();
 */
const styleNavBar = () => {
  if (mainElement.firstChild.id !== 'home') {
    navElement.classList.add('scroll');
    return;
  }
  if (window.scrollY < 40) {
    navElement.classList.remove('scroll');
  } else {
    navElement.classList.add('scroll');
  }
};

/**
 * @description Adds event listeners (click and scroll) to document when the app starts.
 *
 * @example startApp();
 */
const startApp = () => {
  mainElement.appendChild(generateFragment('home', innerHTMLContent.home));
  document.addEventListener('click', navHandler(mainElement));
  navElement.addEventListener('click', ({ target: { type, id } }) => {
    if (type === 'button' && id !== 'home-tab') {
      navElement.classList.add('scroll');
    }
  });

  navbarToggle.addEventListener('click', () => {
    navList.classList.toggle('hide');
  });

  navList.addEventListener('click', () => {
    navList.classList.add('hide');
  });

  document.addEventListener('scroll', styleNavBar, { passive: true });
};

startApp();
