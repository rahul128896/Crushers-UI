document.addEventListener('DOMContentLoaded', () => {
  // === Theme Toggle Functionality (Keep from previous steps) ===
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  // ... (rest of the theme toggle code remains the same) ...
  function setTheme(theme) {
      if (theme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
      } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      }
  }
  // ... (initial theme setting logic remains the same) ...
   themeToggleBtn.addEventListener('click', () => {
      const currentSetTheme = document.documentElement.getAttribute('data-theme');
      if (currentSetTheme === 'dark') {
          setTheme('light');
      } else {
          setTheme('dark');
      }
  });


  // === Code Tabs Functionality (Keep from previous steps) ===
  const componentCards = document.querySelectorAll('.component-card');

  componentCards.forEach(card => {
      const tabs = card.querySelectorAll('.tab-btn');
      // ... (rest of the tabs logic remains the same) ...
      const copyBtn = card.querySelector('.copy-btn');
      tabs.forEach(tab => {
           tab.addEventListener('click', () => {
               const cardInner = tab.closest('.component-card'); // Ensure targeting within the card
               if (!cardInner) return;

               const currentTabs = cardInner.querySelectorAll('.tab-btn');
               const currentContents = cardInner.querySelectorAll('.code-content');
               const currentCopyBtn = cardInner.querySelector('.copy-btn');

               currentTabs.forEach(t => t.classList.remove('active'));
               currentContents.forEach(c => c.classList.remove('active'));

               tab.classList.add('active');
               const activeContent = cardInner.querySelector(`.code-content[data-content="${tab.dataset.tab}"]`);
               if (activeContent) {
                   activeContent.classList.add('active');
               }
               if (currentCopyBtn) {
                   currentCopyBtn.dataset.type = tab.dataset.tab;
               }
           });
      });
  });


  // === Copy Button Functionality (Keep from previous steps) ===
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(button => {
      button.addEventListener('click', () => {
           // ... (rest of the copy button logic remains the same) ...
           const card = button.closest('.component-card');
           const type = button.dataset.type;
           const contentElement = card.querySelector(`.code-content[data-content="${type}"] pre code`);
           // ... (clipboard writing and feedback logic) ...
      });
  });


  // === NEW: Navbar Toggle Functionality ===
  // Select all toggler buttons *within* the component previews
  const navbarTogglers = document.querySelectorAll('.component-preview .navbar-toggler');

  navbarTogglers.forEach(toggler => {
      toggler.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent potential button default actions

          const targetId = toggler.getAttribute('aria-controls');
          // Find the target menu *within the same component preview* as the toggler
          const parentPreview = toggler.closest('.component-preview');
          if (!parentPreview) return; // Exit if structure is unexpected

          const targetMenu = parentPreview.querySelector(`#${targetId}`);

          if (targetMenu) {
              targetMenu.classList.toggle('active'); // Use 'active' class defined in CSS
              const isExpanded = targetMenu.classList.contains('active');
              toggler.setAttribute('aria-expanded', isExpanded);
          } else {
              console.error(`Navbar collapse target with id "${targetId}" not found within the preview.`);
          }
      });
  });

  // Optional: Close mobile menus if clicking outside
  document.addEventListener('click', (event) => {
      // Check if the click is outside ANY open navbar menu and its corresponding toggler
      const openMenus = document.querySelectorAll('.component-preview .navbar-collapse.active');
      openMenus.forEach(menu => {
          const menuId = menu.id;
          const correspondingToggler = document.querySelector(`.component-preview .navbar-toggler[aria-controls="${menuId}"]`);

          // If click is outside the menu AND outside its toggler
          if (!menu.contains(event.target) && !correspondingToggler.contains(event.target)) {
               menu.classList.remove('active');
               correspondingToggler.setAttribute('aria-expanded', 'false');
          }
      });
  });


  // === Optional: Navbar Scroll Effect (for Transparent/Sticky demo) ===
  // Note: This affects ALL navbars with the class on the main page scroll.
  // You might want to scope this differently if used in a real application.
  // window.addEventListener('scroll', () => {
  //     const transparentNavbars = document.querySelectorAll('.navbar-transparent');
  //     transparentNavbars.forEach(navbar => {
  //         if (window.scrollY > 50) { // Add 'scrolled' class after scrolling 50px
  //             navbar.classList.add('scrolled');
  //         } else {
  //             navbar.classList.remove('scrolled');
  //         }
  //     });
  // });


}); // End DOMContentLoaded