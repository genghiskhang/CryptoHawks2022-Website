window.onload = function() {
    $('header').append(
        '<a id="home-link" href="index.html">' +
            '<div id="team-group">' +
                '<img id="team-logo" src="assets/global/logo.png">' +
                '<div id="team-title">' +
                    '<h1 id="team-name"><b>CryptoHawks</b></h1>' +
                    '<p id="team-number">FRC Team 8726</p>' +
                '</div>' +
            '</div>' +
        '</a>' +
        '<div id="social">' +
            '<a class="social-link" href="mailto:urbanahsrobotics@gmail.com" target="_blank"><img class="social-logo" src="assets/socials/email.png"></a>' +
            '<a class="social-link" href="https://www.instagram.com/uhsrobotics" target="_blank"><img class="social-logo" src="assets/socials/instagram.png"></a>' +
            '<a class="social-link" href="https://www.youtube.com/channel/UCzbWX9d-P6BXmRLVnBRsI0w" target="_blank"><img class="social-logo" src="assets/socials/youtube.png"></a>' +
        '</div>' +
        '<div id="navbar">' +
            '<ul id="navbar-container">' +
                '<li class="navbar-item"><a class="navbar-link" href="index.html"><b>Home</b></a></li>' +
                '<li class="navbar-item"><a class="navbar-link" href="html/team.html"><b>Team</b></a></li>' +
                '<li class="navbar-item"><a class="navbar-link" href="html/robots.html"><b>Robots</b></a></li>' +
                '<li class="navbar-item"><a class="navbar-link" href="html/summer.html"><b>Summer Camp</b></a></li>' +
                '<li class="navbar-item"><a class="navbar-link" href="html/sponsors.html"><b>Sponsors</b></a></li>' +
                '<li class="navbar-item">' +
                    '<div id="dropdown">' +
                        '<p id="dropdown-text"><b>More</b></p>' +
                        '<div id="dropdown-content">' +
                            '<a class="navbar-link" href="html/contact.html"><b>Contact</b></a>' +
                            '<a class="navbar-link" href="html/media.html"><b>Media</b></a>' +
                            '<a class="navbar-link" href="html/newsletters.html"><b>Newsletter</b></a>' +
                            '<a class="navbar-link" href="html/events.html"><b>Events</b></a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
            '</ul>' +
        '</div>'
    );
    
}