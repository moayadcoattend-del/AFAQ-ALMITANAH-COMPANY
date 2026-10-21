/**
 * Afaq Al Mitanah (أفاق المتانة) - Main Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer dynamically
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle logic
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    });

    // Close mobile menu on clicking any navigation link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      });
    });
  }

  // Header background shade on scroll
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });
});

/**
 * Service card helper: Automatically scrolls to contact form 
 * and selects the requested trade category in the dropdown.
 */
function selectServiceCategory(categoryName) {
  const categoryDropdown = document.getElementById('form-category');
  const contactSection = document.getElementById('contact');

  if (categoryDropdown) {
    // If the category exists in options, set it; otherwise default
    let optionExists = false;
    for (let i = 0; i < categoryDropdown.options.length; i++) {
      if (categoryDropdown.options[i].value === categoryName) {
        categoryDropdown.selectedIndex = i;
        optionExists = true;
        break;
      }
    }
    if (!optionExists) {
      categoryDropdown.value = 'Multiple Trades / Turnkey';
    }
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Handles Form Submission with clean UI feedback
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('workforce-form');
  const successBox = document.getElementById('form-success');

  if (form && successBox) {
    // Hide form, show success message with animation
    form.classList.add('hidden');
    successBox.classList.remove('hidden');
    successBox.classList.add('fade-in');
  }
}

/**
 * Resets the contact form to allow another submission
 */
function resetContactForm() {
  const form = document.getElementById('workforce-form');
  const successBox = document.getElementById('form-success');

  if (form && successBox) {
    form.reset();
    successBox.classList.add('hidden');
    form.classList.remove('hidden');
  }
}
