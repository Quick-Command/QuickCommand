## QuickCommand

[Visit QuickCommand](https://quick-command.herokuapp.com/)

-------

A [Front-End Project](https://mod4.turing.edu/projects/capstone.html) by [Cameron Mackintosh](https://github.com/cbmackintosh), [Chuck Morris](https://github.com/percworld), and [Jeff Shepherd](https://github.com/JeffShepherd).

Backend QuickCommand team is comprised of [Katy LaTour](https://github.com/klatour324), [Alexa Morales Smith](https://github.com/amsmyth1), and [Jeremiah Michlitsch](https://github.com/jmichlitsch) - [Backend Repo](https://github.com/Quick-Command/qc-engine)

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

_QuickCommand_ is the [Turing School of Software and Design](https://turing.io/) Module 4 capstone group project.

It is an organization application that provides personnel assignment for an emergency response supervisor and response to incident details for assignees.



## Planning Resources

* [GitHub Project Board](https://github.com/orgs/Quick-Command/projects/1)
* [Miro Board - Wireframes](https://miro.com/app/board/o9J_lExjyG8=/)
* ![User Stories](./public/user-story1.png)
* [Schema](https://app.dbdesigner.net/designer/schema/0-quick_command)

## Setup Instructions

You can [Visit QuickCommand Here](https://quick-command.herokuapp.com/) or follow these steps to 
Clone down this repository to your local machine:

```
git clone git@github.com:Quick-Command/QuickCommand.git
```

CD into the new directory:

```
cd QuickCommand
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
### Workflow:
This project has given us a new look at how to work together in continuous innovation that shows empathy for other developers.  
* We are utilizing git interactive rebase for each pull request to allow our merge commits to be succinct.  
* We have used Travis CI to continuously integrate our work and ensure testability.
* We are building our remote heroku app with each merge into main
* We are using TDD with Cypress and testing before public branch merging to stay informed about optimal functionality throughout the app.

### Challenges
* We were able to alleviate some difficulty surrounding git's default method of ignoring case-sensitivity after renaming files.  Having several components and our store affected by redundant folders and files led us to learn how to resolve such an issue in the future.
* We came to a tough decision that was navigated well by our team, as it became apparent that our d3 Chart we really thought looked great and were excited about it's success in rendering could potentially cause us trouble in phase 3 when implementing functionality to update the chart.  It was a hard decision but a wise one to take a step back from a better style and make some concessions prioritizing MVP functionality.  



## Technologies

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="Cypress" src='https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white'/>

## Stretch technology: 
After considerations of data structure based on wireframing, We began a preliminary period of research on using Redux toolkit to manage our components' state.  
It was evident that using the redux toolkit is an extension of the initial idea of using redux.  The idea of implementing thunks seemed a challenge that could potentially lead us into deeper waters than we were comfortable navigating. As a team, we made a difficult decision to scout and come together with the intention of moving forward into what seemed a bit overwhelming at first glance.  This focus on working together lifted the burdens we have felt on previous projects and our front-end collaborative experience lifting eachother up in learning was paramount to the success we have realized in our journey into a new workflow and coding framework.



---


## Features
In the limited timeframe we have to make determined sprints and complete our intended phases to reach an MVP, we have limited the features needed to the principle functionality. In our last phase, we included some basic features that we feel are important in the user flow:
* A view of all ongoing and resolved incidents that have been tracked that can be inquired upon for staffing/personnel and details about the response effort.
* A form for creating a new incident to be declared and a submission of resolution of an incident.
* A Chart for navigating which personnel are actively assigned to a response position of the incident being viewed.
* A form that allows assignment of searched personnel by role to a position in the response Chart.
* A route that offers more in-depth analysis of the site details (map to headquarters, summary of incident and instructions based on the incident)
* A component/route for weather that will alert the commander and personnel on what to expect on-site with details about precipitation, wind, and other necessary details about the environment onsite
* A protocol view to allow access to emergency responder information that will aid them in preparation to respond.
* A procedure view that allows the responder access to valuable information related to ONLY the type of incident they are inquiring about
* A form for submitting a new candidate for response assignment that includes an individual's job title and roles they are certified to be assigned to.



---



---
## Wins

* In learning a new stretch tech that required much research, we began to code together when it came time to implement.  This process taught us much about working together on a journey into deeply understanding the redux toolkit under the hood and pretty syntax. My big win on this project was overcoming that precipice into the operation of state management as a team in paired programming, where we shared concepts and asked questions freely and because of our patience, built a solid framework to build on where everyone was cued and ready for the next step by fully understanding the process and codebase. -Chuck



---
## Future Iterations


1.  A passport wallet card route that allows a responder during preparation to print out a 'passport' for checkpoints on their way to arriving to headquarters onsite.
2.  An information card about which personnel details for 'pop-up' when hovering over Chart positions.
