

# The Arcade

This Website was built by Isaac Nicholls, Paul Abrahams and Rogerio Soares for Code Institute Hackathon #1. The brief for the site was a fairly open scope, with the main point being an interactive site using Javascript at its core. After some research and brainstorming wehad the idea of an arcade game simulator, where the user could feel as if they were at an arcade playing the games they used to enjoy. This helped to tailor the User stories and styling.   

👩🏻‍💻 Here is an example of this website and its homepage ![Am I Responsive](/assets/images/rdme-img/)

Link to deployed and finished site: https://github.com/IsaacNicholls1/TheAiTeam

---

## CONTENTS

* [Project](#project-goals)

* [Planning](#planning)
* [Teamwork](#hackathon-teamwork)

* [Features](#features)


* [Ux-Ui](#ux/ui)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Fonts](#fonts)
  * [Wireframes](#wireframes)
  * [Logo](#logo)

* [Testing](#testing)
  * [Acessibility](#accessibility)
  * [Responsivity](#responsivity)
  * [Device Testing](#device-testing)
  * [Testing Breakdown](#testing-breakdown)
  * [Testing User Stories](#testing-user-stories)

* [Known Bugs](#known-bugs)
  * [Deployment](#deployment)

* [Sources](#sources)

  * [Future features](#future-features)
  * [Acknowledgments](#acknowledgments)

- - - -
# Project Goals #
## 1. User goals

- The users goal is to access a gaming website where they can play their favourite games. 

- The users goal is to being able to navigate the website quickly and efficently to our content.

- The users goal is to use our site to get to and play the games they are looking for.

- The users goal is to have a fun experience playing games that they like, and also having the nostalgic feel of an old arcade gaming machine. 
    
## 2. Site Owner Goals
- The site owner goal is to provide an easily accesible website so that the user can easily get to the games they would like to play. 

- The site owner goal is to make a fun interactive website, so that the user feels immersed in the nostalgic experience. 

- - - -

## Project Structure

```
/C:/GitHub/TheAiTeam/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── profile/
│   │       ├── avatar1.png
│   │       └── avatar2.png
│   └── js/
│       └── main.js
├── includes/
│   ├── navbar.html
│   └── footer.html
├── index.html
├── about.html
├── contact.html
├── games.html
├── snake.html
├── space-invaders.html
└── pac-man.html
```

# Planning #



- - - -

# Hackathon Teamwork #



- - - -

# Features #

## Main Page
### Background Javascript
The main page features javascript style background which gives the idea of flying through space, this has the feel of an arcade game of the time, and then includes a bootstrap5 responsive grid system with the game cards. 
### Cards
Below there are 4 cards with images in, which will take the user to the game pages. 
To do this the user hovers over the game card which contains a coin slot. The coin will then appear as the user hovers over the button, providing a fun and interactive experience. 

### JS Coin
Once the user has clicked the buttonn to navigate to the games pages and entered their coin into the slot, a JS styled coin drops down from the top, giving another interactive experience before the user reaches their goal of the game page.  

## About Page
This page features some information to the user about the site, the developers and a cta button at the bottom to return users to the main page in ordere to play our games. 

## Games Pages
These are the pages on our site where we wish the user to go

## Contact page
This page is a simple contact form page with a header and the chance to get in contact with our site via a contact form. Some information to users is provided above the form, and everything is styled in the same styling as the rest of the site. 

## Header and Footer
The header and footer have been kept the same throughout the site - styled simply with the same font from Font awesome and the spacing and colours all the same. 

## Usage

### Including the Navbar

This `JavaScript` code snippet defines a function called `loadNavbar` that is responsible for loading the `navbar` content from an external HTML file (`navbar.html`) and inserting it into an element on the current page.

``` javascript
function loadNavbar() {
    fetch('includes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            setActiveNavLink();
        });
}
```

### Setting the Active Link

The following function sets the active link in the navigation menu based on the current page.

``` javascript
function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLinks = {
        'index.html': 'nav-home',
        'about.html': 'nav-about',
        'games.html': 'nav-games',
        'contact.html': 'nav-contact'
    };

    const activeLinkId = navLinks[page];
    if (activeLinkId) {
        const activeLink = document.getElementById(activeLinkId);
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
    }
}
```

The loadNavbar(); function call is used to dynamically load the navbar content from an external HTML file and insert it into the current page.

```javascript
loadNavbar();
```

The following HTML snippet is used to include a placeholder for the footer content in your web pages:

```html
<footer>
  <div id="footer-placeholder"></div>
</footer>
```


<hr>
<p><a href="#contents">Back To Top</a></p>

- - - -

# UX/UI #

   ## Target Audience
   
  - Anyone looking for a fun gaming experience with retro games
  - People wishing to feel some nostalgia with games they may have played before.
  - Users looking to spend some time playing retro games, and looking for an immersive gaming experience.  
  
 ## User Stories
  - User Story: As a user, I want to visit a retro gaming website and play games so that I can enjoy classic arcade games online.
  - User Story: As a user, I want to easily navigate to the games so that I can quickly find and start playing my favorite retro games.
  - User Story: As a user, I want the website to have the feel of an arcade game, providing nostalgia so that I can relive the classic arcade experience.
  - User Story: As a user, I want a contact/feedback form on the website so that I can share my thoughts and ask questions.
  - User Story: As a user, I want to access an about page so that I can learn more about the games and the website.
  - User Story: As a user, I want to have an easily accessible footer so that I can quickly find important information and links.
  - User Story: As a user, I want clear instructions on how to play the game so that I can understand the game mechanics and enjoy playing.
  - User Story: As a user, I want the website to be responsive and mobile-friendly so that I can access it on my smartphone or tablet.
  - User Story: As a user, I want the website to have an engaging visual design so that it is visually appealing and enjoyable to use.
  - User Story: As a developer, I want a detailed README file so that I can understand the project setup, usage, and contribution guidelines.

  
<hr>
<p><a href="#contents">Back To Top</a></p>
- - - -

 ## Design
 
 ##  Colour Scheme

 - The colour scheme for our site was inspired by the look and feel of an old arcade machine, with simple black and white background and font, with some other colors inspired by the graphics and images. 
 - Inspired by https://coolors.co/16084a-141414-eef0f2-ffa90a-c270b0

 **Coolers**
![Colours](/assets/images/)
 
 ##  Fonts
 - The font that we used was PressStart2p - We wanted to focus on what the font would have looked like on the old style arcade machine, quite pixelated and therefore we recreated that.  

 ![Font](/assets/images/)
 
 ## Wireframes

 - These wireframes have been created using Balsamiq to define the key feature layout to guide the user experience design. 
 Utilising the Bootstrap framework and available components allows for the construction of a page that feels familiar for ease of navigation whilst also allowing for well structured content and a responsive design.
 The wireframes were developed at the start of the project and then worked on as we went through, to tweak the changed we made to the design and feel of the site
    
  - Home Page Wireframe

  **Home Page Wireframe**
![Home Wireframe](/assets/images)

 **About Page Wireframe**
![About Wireframe](/assets/images)

**Space Invaders Game Page Wireframe**
![SI Wireframe](/assets/images)

**Snake Game Page Wireframe**
![Snake Wireframe](/assets/images)

**Pac-man Game Page Wireframe**
![Pacman Wireframe](/assets/images)
  
**Contact Page Wireframe**
![Contact Wireframe](/assets/images)

<hr>
<p><a href="#contents">Back To Top</a></p>
- - - -
# Testing #

## HTML Validation
- Initial HTML Validation was performed using the W3C Mark up service and the results can be found in this document. 
- No Issues with any of the pages.

![html1](/assets/images/rdme-img/)
![html2](/assets/images/rdme-img/)
![html3](/assets/images/rdme-img/)
![html4](/assets/images/rdme-img/)
  
## CSS Validation
- Initial W3C CSS style sheet validation link 
![Css1](/assets/images/rdme-img)
- Test W3C Validation CSS style sheet validation with css error fixed. 
![Css2](/assets/images/rdme-img)
 
## Accessibility
 - We tested the page with lighthouse and the accessibility and performance scores are shown below
 ![lighthouse scores](/assets/images/)
 - I believe that these could be greatly mimproved these by following the prompts, but mainly by resizing images, as these are slowing the site loading down. This would greatly increase the lighthouse scores. 
 ![lighthouse scores final](/assets/images/rdme-img/)

## Responsivity
- We tested the website with DevTools so that it worked across all different device sizes, including mobile and tablet. This is very important as it must be functional across all types of devices. The games must work on all devices and be compatible.

- We checked the site was responsive across all devices. Originally we had a problem with ...

![Am I Responsive home](/assets/images/rdme-img)
![Am I Responsive connect](/assets/images/rdme-img)
![Am I Responsive your course](/assets/images/rdme-img)
![Am I Responsive contact](/assets/images/rdme-img)

## Device Testing

We tested the site with the following devices:

- Android Google Pixel 8
- Desktop
- Chrome Developer Tools (Simulating for all available device options)
  
## Browser Testing

Testing has been done on the following browsers:

- Chrome (& Developer tools)
- Safari

# Testing Table #

![Testing Table](/assets/images/rdme-img/)

  
  <hr>
<p><a href="#contents">Back To Top</a></p>\


## Testing user stories

We tested our site vs the user stories: 

1. 
User Story:
![User story](/assets/images/rdme-img/userstories1.png)
Site Example:
![Site Example](/assets/images/rdme-img/userstories1done.png)
--
2. 
User Story:
![User story](/assets/images/rdme-img/userstories2.png)
Site Example:
![Site Example](/assets/images/rdme-img/userstories2done.png)
--
3.
User Story:
![User story](/assets/images/rdme-img/userstory3.png)
Site Example:
![Site Example](/assets/images/rdme-img/userstory3done.png)
--
4.
User Story:
![User story](/assets/images/rdme-img/userstory4.png)
Site Example:
![Site Example](/assets/images/rdme-img/userstory4done.png)
--
5. 
User Story:
![User story](/assets/images/rdme-img/userstory5.png)
Site Example:
![Site Example](/assets/images/rdme-img/userstory5done.png)
--
6.
User Story:
![User story](/assets/images/rdme-img/userstory6.png)
Site Example:
![Site Example](/assets/images/rdme-img/userstory6done.png)
--
7.

User Story:
![User story](/assets/images/rdme-img/userstory7.png)
Site Example:
![Site Example](/assets/images/rdme-img/userstory7done.png)

<hr>
<p><a href="#contents">Back To Top</a></p>
--

## Known Bugs

## During development, I found these bugs and fixed them:

### Nav bar dropdown shifting to the right hand side on smaller devices

- On smaller devices, in the connect.html and index.html pages the navbar burger logo to indicate the nav bar would switch sides and throw everything on there out of line.
- To fix this issue, I checked the code in the other pages and texted them wjhere it worked fine. The issue was due to the logo which i had in the first pages. I copied across the code, resized the logo and this worked. 

### Images resizing on smaller devices

- The cards resized poorly when on smaller devices, meaning the images went out of shape and were hard to view. 
- To fix this issue, I looked into the code and the bootstrap 5 container system, i edited them so that they would fill the screen on smaller devices and drop down below one another. 

### Cards seeming too large on page

- The cards and images inside them were originally 2 across the page with 2 below. I found that while testing this was not condusive to a good UX as they seemed too large. 
- To fix this issue I made sure that the cards were smaller and all on one line of the page, meaning that the user could more easily see and navigate the page, and it was a calmer experience. 

### Poor Font for User

- When deploying and testing the site I found that the font that was being used was not a good fit for the User. It was too clinical and i felt it needed a rounder and calmer font. To fix this i did some more research and found that a good fit was the Poppins font. 

- This was an issue which was ongoing through my project - It was tricky to get the images to be the correct size for my cards. They would either bee too small/big, or not the same size as others. 
- To fix this issue originally I spoke with Roo, who guided me to try using max height for the images, however i then found that when on smaller devices the images stretched out of shape. 
- I then fixed this further by resizing and shaping all of the images in question so that they fitted well into the cards. 

## During development and testing, these are the current bugs:

### Images too large 

- Some of the images are still too large - generating a lower lighthouse score than i would have liked. 

### Unknown code fixes in lighthouse

- There are some errors/warnings in lighthouse which would improve the score. These are things that i am currently not sure how to fix so this will be something to ask/research before my next project. 

<hr>
<p><a href="#contents">Back To Top</a></p>
- - - -
# Deployment #

How I deployed this site : 

- In the GitHub repository, I navigated to the Settings tab, then chose Pages from the left hand menu 
- From the source section drop-down menu, selected main branch
- Once the main branch had been selected, the page was automatically refreshed with a detailed ribbon display to indicate the successful deployment
- Any changes pushed to the main branch take effect on the live project

- The live link is here: https://github.com/IsaacNicholls1/TheAiTeam

- I used an agile methodology by using early deployment, I made sure the project was deployed after the first few pages were created. This ensured that I could see every change on a live site, which greatly aided the coding and development process.
![Site Example](/assets/images/rdme-img)
![Site Example](/assets/images/rdme-img)

<hr>
<p><a href="#contents">Back To Top</a></p>

- - - -

# Sources #

### Languages Used

- HTML5
- Css
- Javascript

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/ "‌")
   - Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Hover.css:](https://ianlunn.github.io/Hover/ "‌")
   - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
3. [Google Fonts:](https://fonts.google.com/specimen/Press+Start+2P?selection.family=Monoton|Orbitron:wght@400..900|Press+Start+2P|VT323)
   - Google fonts were used to import the PressStart2p font into the style.css file which is used on all pages throughout the project.
4. [Font Awesome:](https://fontawesome.com/)
   - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
5. [jQuery:](https://jquery.com/ "‌")
   - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
6. [Git](https://git-scm.com/ "‌")
   - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
7. [GitHub:](https://github.com/IsaacNicholls1/TheAiTeam)
   - GitHub is used to store the projects code after being pushed from Git.
8. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html "‌")
   - Photoshop was used for resizing images and editing photos for the website.
9. [Balsamiq:](https://balsamiq.com/ "‌")
   - Balsamiq was used to create the wireframes during the design process.

## Media
 - The images that were used throughout the project were all used from the site https://www.pexels.com/ 
 - The following photos were used in the content: [Content Section sources](https://github.com/IsaacNicholls1/MH-P1-IsaacN/tree/main/assets/images)
 - Some images were edited with Photoshop - this was to reduce their size and get them the correct shape, therefore providing a better UX when visiting the site.

## HomePage Content. 
-  I wanted to keep Homepage content to a minumum as I was aiming for a calm and easy user experience, so i felt that I didnt want to provide over stimulating information to the user. 
-  Text for the homepage was generated using Co-Pilot, but had to be greatly re-fined and rewritted by me for the purpose of the project and specific user. 
- I used sites such as https://www.mind.org.uk/need-urgent-help/using-this-tool/ and https://www.nhs.uk/nhs-services/mental-health-services/ to generate information and text ideas. 

## Content
- The colour scheme was helped with the use of: https://coolors.co - I went through a bit of testing with my different colours as the first ones I used i was not happy with, as they did not seem to suit the calm user experience that i was aiming for and were too bold. This led me to choosing the specific color palette that i did. 
- The fonts were imported from Google Fonts. Originally I selected a font of Roboto sans, but it didnt not load properly and when it did, after testing the site i decided that it was not the correct font for my target audience. I eventually then tested some fonts and after some research decided on the font Poppins. 
- Font awesome was used to add icons for UX purposes auch as social media icons. 
- Balsamiq was used to create the wireframes during the design process, as this was the first time of using the tool it took a bit of getting used to and developing these. I tweaked them as i went along and made slight changes to my actual site. 

## Code
- The HTML & CSS uses Bootstrap Version 5.3: https://getbootstrap.com/docs/5.3/getting-started/introduction/ 
- I used other coding tools and resources such as snippets of code from my previous CI projects to guide and aid me when i needed reminding about the correct way to use the code.
- I utilised AI in this project in the form of CoPilot. This helped me to create basic HTML structures and to edit parts of code that needed it. I found it very useful overall and saved me a great deal of time, however I found when using, it needed a close eye kept on it as it seems to add in exra closing tags and code that is sometimes not needed. Overall a very useful tool when used in the correct context. 


# Future features #
- If we had more time, we would have liked to add in an additional feature for the games, which would have been able to show the score of the player in relation to the top and highest scores of others as a leaderboard, for each game. 
-  
- One extra thing would have been to add in a search bar at the top in the navbar as this would provide a better UX, giving the user the ability to find what they need from anywhere in the site. 
- We would have liked to improve our lighthouse scores, and get them all up into the 90's 
- A future feature that we wished to add was....
- I would have liked to develop my testing table further, as all aspects of the site were tested but documentation in the readme could have been more thorough. 

###  Acknowledgments
- We would like to thank Emma at CI for her help and encouragement. 
- We would like to thank Roo, Mark and Spencer for all the help they gave us, dealing with tricky problems which we managed to work through!

<hr>
<p><a href="#contents">Back To Top</a></p>

- - - -
