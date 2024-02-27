// Replace '1234567890' with your actual WhatsApp number
var whatsappNumber = '+2348145342520';

// Function to open WhatsApp link
function openWhatsApp() {
    // Construct the WhatsApp API URL
    var whatsappUrl = 'https://wa.me/' + whatsappNumber;

    // Open the link in a new tab
    window.open(whatsappUrl, '_blank');
}

// Attach the onclick event to the WhatsApp icon
document.getElementById('whatsappIcon').onclick = openWhatsApp;



// Function to open GitHub link
function openGitHubProfile() {
    // Replace 'your-username' with your actual GitHub username
    var githubUrl = 'https://github.com/AtinukeBanjo';

    // Open the link in a new tab
    window.open(githubUrl, '_blank');
}

// Attach the onclick event to the GitHub icon
document.getElementById('githubIcon').onclick = openGitHubProfile;




// Function to open LinkedIn link
function openLinkedInProfile() {
    // Replace 'your-linkedin-username' with your actual LinkedIn username or profile ID
    var linkedInUrl = 'https://www.linkedin.com/in/atinuke-rufai-215579151';
    

    // Open the link in a new tab
    window.open(linkedInUrl, '_blank');
}

// Attach the onclick event to the LinkedIn icon
document.getElementById('linkedinIcon').onclick = openLinkedInProfile;


// Function to open Facebook link
function openFacebookProfile() {
    // Replace 'your-facebook-username' with your actual Facebook username or profile ID
    var facebookUrl = 'https://www.facebook.com/atinuke.rufai';

    // Open the link in a new tab
    window.open(facebookUrl, '_blank');
}

// Function to open Instagram link
function openInstagramProfile() {
    // Replace 'your-instagram-username' with your actual Instagram username
    var instagramUrl = 'https://www.instagram.com/atinukeayomi';

    // Open the link in a new tab
    window.open(instagramUrl, '_blank');
}

// Attach the onclick events to the Facebook and Instagram icons
document.getElementById('facebookIcon').onclick = openFacebookProfile;
document.getElementById('instagramIcon').onclick = openInstagramProfile;




// Function to open the 'work' page
function openWorkPage() {
    // Replace 'work.html' with the actual URL of your 'work' page
    window.location.href = 'work.html';
}

// Function to open the 'resume' page
function openResumePage() {
    // Replace 'resume.html' with the actual URL of your 'resume' page
    window.location.href = 'resume.html';
}

// Attach the onclick events to the link and the button
document.getElementById('homebb').onclick = openWorkPage;
document.getElementById('py').onclick = openResumePage;
