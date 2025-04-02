function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
    }
  }

  // Array of image sources for the gallery
  const galleryImages = [
    'media/gallery1.jpeg',
    'media/gallery2.jpeg',
    'media/gallery3.jpeg'
  ];

  let currentImageIndex = 0; // Track the current image

  function changeImage() {
    const galleryImageElement = document.getElementById('gallery-image');
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length; // Loop through images
    galleryImageElement.src = galleryImages[currentImageIndex]; // Update the image source
  }

  // Change image every 3 seconds (3000 milliseconds)
  setInterval(changeImage, 3000);

    const leafCount = 10; // Total number of leaves
    const leafImages = [
      'media/leaf1.png',
      'media/leaf2.png',
      'media/leaf3.png',
      'media/leaf4.png',
      'media/leaf5.png',
      'media/leaf6.png',
      'media/leaf7.png',
      'media/leaf8.png',
      'media/leaf9.png',
      'media/leaf10.png'
    ];
  
    // Function to get the bottom position of the contact section
function getContactSectionBottom() {
    const contactSection = document.getElementById('contact');
    const rect = contactSection.getBoundingClientRect();
    return rect.top + window.scrollY + contactSection.offsetHeight;
  }
  
  function createLeaf() {
    const leaf = document.createElement('img');
    leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.className = 'leaf';
    document.body.appendChild(leaf);
  
    const isMobile = window.innerWidth <= 768; // Check if mobile view
    const gap = isMobile ? window.innerWidth / leafCount : 100; // Adjust gap for mobile
  
    // Set random position with adjusted horizontal spacing for mobile
    let randomXPos = Math.random() * (window.innerWidth - gap); // Calculate random X position
    randomXPos = Math.max(gap, randomXPos); // Ensure minimum gap on the left side
    leaf.style.left = randomXPos + 'px'; // Assign the horizontal position
    leaf.style.top = '270px'; // Start above the viewport
  
    const fallDuration = Math.random() * 10 + 30; // Random fall duration between 30 to 40 seconds
  
    // Fall to the end of the contact section instead of viewport height
    const contactBottom = getContactSectionBottom();
    leaf.style.animation = `fall ${fallDuration}s linear forwards`;
  
    // Remove leaf after animation completes
    setTimeout(() => {
      leaf.remove();
    }, fallDuration * 5000);
  }
  
  function startFallingLeaves() {
    setInterval(createLeaf, 800); // Create a new leaf every 800 milliseconds
  }
  
  // CSS Animation for falling effect with adjusted height
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(${getContactSectionBottom() - 250}px); /* Fall to just above the contact section */
      }
    }
  `;
  document.head.appendChild(style);
  
  // Start falling leaves
  startFallingLeaves();
  
  // Scroll to the top of the page on load
  window.onload = function() {
    window.scrollTo(0, 0);
  };
  