document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tabs
    document.querySelectorAll('.tabs').forEach(tabsContainer => {
      const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
      const tabPanes = tabsContainer.querySelectorAll('.tab-pane');
      const tabIndicator = tabsContainer.querySelector('.tab-indicator');
      
      // Set initial active tab
      const activeTab = tabsContainer.querySelector('.tab-btn.active');
      if (activeTab && tabIndicator) {
        updateTabIndicator(activeTab, tabIndicator);
      }
      
      // Add click event to each tab button
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab');
          
          // Remove active class from all buttons and panes
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));
          
          // Add active class to clicked button and corresponding pane
          button.classList.add('active');
          document.getElementById(tabId).classList.add('active');
          
          // Update tab indicator if exists
          if (tabIndicator) {
            updateTabIndicator(button, tabIndicator);
          }
        });
      });
    });
    
    // Function to update tab indicator position
    function updateTabIndicator(activeTab, indicator) {
      const tabWidth = activeTab.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      
      indicator.style.width = `${tabWidth}px`;
      indicator.style.left = `${tabLeft}px`;
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tabs
    document.querySelectorAll('.tabs').forEach(tabsContainer => {
      const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
      const tabPanes = tabsContainer.querySelectorAll('.tab-pane');
      const tabIndicator = tabsContainer.querySelector('.tab-indicator');
      
      // Set initial active tab
      const activeTab = tabsContainer.querySelector('.tab-btn.active');
      if (activeTab) {
        if (tabIndicator) {
          updateTabIndicator(activeTab, tabIndicator);
        }
        // Special handling for vertical tabs
        if (tabsContainer.classList.contains('tabs-vertical')) {
          updateVerticalTabIndicator(activeTab);
        }
      }
      
      // Add click event to each tab button
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab');
          
          // Remove active class from all buttons and panes
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));
          
          // Add active class to clicked button and corresponding pane
          button.classList.add('active');
          document.getElementById(tabId).classList.add('active');
          
          // Update tab indicator if exists
          if (tabIndicator) {
            updateTabIndicator(button, tabIndicator);
          }
          
          // Special handling for vertical tabs
          if (tabsContainer.classList.contains('tabs-vertical')) {
            updateVerticalTabIndicator(button);
          }
          
          // Special handling for animated line tabs
          if (tabsContainer.classList.contains('tabs-animated-line')) {
            updateTabIndicator(button, tabIndicator);
          }
          
          // Special handling for gradient tabs
          if (tabsContainer.classList.contains('tabs-gradient')) {
            button.style.color = 'white';
            button.style.fontWeight = '500';
          }
        });
      });
    });
    
    // Function to update horizontal tab indicator position
    function updateTabIndicator(activeTab, indicator) {
      const tabWidth = activeTab.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      
      indicator.style.width = `${tabWidth}px`;
      indicator.style.left = `${tabLeft}px`;
    }
    
    // Function to update vertical tab indicator
    function updateVerticalTabIndicator(activeTab) {
      // Remove any existing indicator
      const existingIndicator = activeTab.parentElement.querySelector('.vertical-indicator');
      if (existingIndicator) {
        existingIndicator.remove();
      }
      
      // Create new indicator
      const indicator = document.createElement('div');
      indicator.className = 'vertical-indicator';
      activeTab.appendChild(indicator);
    }
  });