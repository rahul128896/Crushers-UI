document.addEventListener('DOMContentLoaded', function() {
    // Modal triggers
    const triggers = document.querySelectorAll('.modal-trigger');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      });
    });
  
    // Close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.closest('.modal').classList.remove('modal-open');
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    });
  
    // Close when clicking outside
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('modal-open');
          document.body.style.overflow = ''; // Re-enable scrolling
        }
      });
    });
  
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.modal-open').forEach(modal => {
          modal.classList.remove('modal-open');
          document.body.style.overflow = ''; // Re-enable scrolling
        });
      }
    });
  });