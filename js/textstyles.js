document.addEventListener('DOMContentLoaded', function() {
    // Copy button functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const codeContainer = this.closest('.code-tabs-header').nextElementSibling;
        const activeCode = codeContainer.querySelector(`.code-content.active[data-content="${type}"]`);
        
        if (activeCode) {
          const code = activeCode.querySelector('code').textContent;
          navigator.clipboard.writeText(code).then(() => {
            // Show check icon
            const copyIcon = this.querySelector('.copy-icon');
            const checkIcon = this.querySelector('.check-icon');
            const copyText = this.querySelector('.copy-text');
            
            copyIcon.classList.add('hidden');
            checkIcon.classList.remove('hidden');
            copyText.textContent = 'Copied!';
            
            // Reset after 2 seconds
            setTimeout(() => {
              copyIcon.classList.remove('hidden');
              checkIcon.classList.add('hidden');
              copyText.textContent = 'Copy';
            }, 2000);
          });
        }
      });
    });
  
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tab = this.getAttribute('data-tab');
        const tabsContainer = this.closest('.code-tabs');
        
        // Update active tab button
        tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update active code content
        tabsContainer.querySelectorAll('.code-content').forEach(content => {
          content.classList.remove('active');
        });
        tabsContainer.querySelector(`.code-content[data-content="${tab}"]`).classList.add('active');
      });
    });
  });