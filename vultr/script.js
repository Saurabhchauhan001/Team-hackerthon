
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.classList.add('active');
    }
  }
  

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
  

    alert(Welcome, ${firstName} ${lastName}!);
  
    
    navigateTo('home');
  });
  
  
  document.getElementById('currentStreak').textContent = '99 days';
  document.getElementById('skippedDays').textContent = '4 days';
  document.getElementById('totalDays').textContent = '103 days';
  
  document.getElementById('burnedCalories').textContent = '2000';
  document.getElementById('targetCalories').textContent = '2500';
  
  
  const certificateList = document.getElementById('certificateList');
  const certificates = ['Bronze Level 1', 'Silver Level 2', 'Gold Level 3'];
  certificates.forEach(cert => {
    const certDiv = document.createElement('div');
    certDiv.textContent = cert;
    certificateList.appendChild(certDiv);
  });