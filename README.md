## QuickCommand

## Stretch technology: 
After considerations of data structure based on wireframing, We began a preliminary period of research on using Redux toolkit to manage our components' state.  
It was evident that using the redux toolkit is an extension of the initial idea of using redux.  The idea of implementing thunks seemed a challenge that could potentially lead us into deeper waters than we were comfortable navigating. As a team, we made a difficult decision to scout and come together with the intention of moving forward into what seemed a bit overwhelming at first glance.  This focus on working together lifted the burdens we have felt on previous projects and our front-end collaborative experience lifting eachother up in learning was paramount to the success we have realized in our journey into a new workflow and coding framework.

## Workflows:
This project has given us a new look at how to work together in continuous innovation that shows empathy for other developers.  
* We are utilizing git rebase for each pull request to allow our merge commits to be succinct.  
* We have used Travis CI to continuously integrate our work and ensure testability.
* We are building our remote heroku app with each merge into main
* We are using TDD with Cypress and testing before public branch merging to stay informed about optimal functionality throughout the app.

## Stretch Goals:
In the limited timeframe we have to make determined sprints and complete our intended phases to reach an MVP, we have limited the features needed to the principle functionality. In our last phase, we will make sure to include some basic features that we feel are important in the user flow:
* A wallet card or passport of the user's information that will allow them access to the site and emergency contact information.
* A component for weather that will alert the commander and personnel on what to expect on-site.
* A route that offers more in-depth analysis of the site and instructions based on the incident chosen

Cameron Mackintosh
Chuck Morris
Jeff Shepherd



A [Front-End Project](https://frontend.turing.edu/projects/module-3/niche-audience.html) by [Jeff Shepherd](https://github.com/JeffShepherd).

1. [Overview](#overview)
2. [Planning Resources](#planning-resources)
3. [Set Up](#setup-instructions)
4. [Learning Goals](#learning-goals)
5. [Technologies](#technologies)
6. [Features](#features)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Future Additions](#future-iterations)


## Overview

_Wall-i_ is the [Turing School of Software and Design](https://turing.io/) Module 3 final solo project. The challenge of this project: work within constraints to deliver a product for your niche audience, which helps solve a problem unique to them.

Given this challenge, I decided to create an application for finding, and downloading, awesome wallpapers for any device. I chose this as I had always wished there was a simple app that accomplishes this goal. Wall-i allows a user to view random photos, as well as search by a specific topic. It also lets a user favorite any photo they see, and return to a list of their favorite photos at any time. If a user wishes to use the photo as the wallpaper, they can click the download link available on every photo.

To create this application, I leveraged React, React Router, JavaScript, HTML, and CSS to create the front-end. As I worked, I also used Cypress for test-driven development of our application.




## Planning Resources

* [GitHub Project Board](https://github.com/JeffShepherd/Wall-i/projects/1)
* [Miro Board - Wireframes](https://miro.com/app/board/o9J_lI88SmI=/)


## Setup Instructions


Clone down this repository to your local machine:

```
git clone git@github.com:JeffShepherd/Wall-i.git
```

CD into the new directory:

```
cd Wall-i
```

Create a .env file for the API key (***please reach out to me for the key***):

```
touch .env
```

Then install the library dependencies by running:

```
npm install
```

To start application, run:

```
npm start
```

If you see `Compiled successfully!` in your terminal, the application is running and the app can be veiwed at `http://localhost:3000/` in your browser.



## Learning Goals
Demonstrate mastery of the following:
* React
* Router
* Asynchronous JavaScript
* End to end testing with Cypress


## Technologies

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="Cypress" src='https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white'/>

---
## Features

#### Landing Page Demo

![landing-page](./public/assets/landingView.gif)

#### Favoriting Demo

![favoriting](./public/assets/favoriting.gif)


#### Mobile View

![mobile-landing page](./public/assets/mobileView.png)



---
## Challenges

* Completing the project in a short time frame while interviewing and dealing with family emergencies
* Deploying for the first time using environment variables
* Unclear documentation for specific API features


---
## Wins

* Completing the project in a short time frame while interviewing and dealing with family emergencies
* Achieving elegant simplicity in design (as a non-designer)
* Figuring out how to force a download of a photo on-click
* Confidence with Cypress testing


---
## Future Iterations

* Display additional search results (pagination)
* Allow search results to scroll over a static landing page view
