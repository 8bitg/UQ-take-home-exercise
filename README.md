# UQ Take-Home Exercise

This project is a sample of my work, illustrating my knowledge of Front-End best practices.  
####I was tasked with recreating the look and feel of a given design.
#####Optional tasks included making it responsive and adding a small animation to the team member avatars.

## Dev Environment Installation Instructions


1. `git clone https://github.com/8bitg/uq-sample-project.git` - Clone the repository
1. `cd uq-sample-project`
1. `cd team_page`
1. `npm install` - Uses NPM to install bower and gulp (and gulp's dependencies)
1. `bower install` - Uses Bower to install Bootstrap and jQuery 
1. `node server.js` - Starts a local node server that allows you to test the page on your mobile device.
  * **Browser** - Navigate to `localhost:3000/src/team-page.html`
  * **Mobile Device** - Navigate to `<your-ip>:3000/src/team-page.html` 
1. `gulp build` - Builds SCSS into CSS, changes the html to point to a **CDN** for **Bootstrap** and moves **/src** files into **/dist**.
1. `gulp watch` - Allows you to work in the **/src** and have your changes automatically update into the **/dist**. Pair with the Node server for a more pleasant work environment when working with mobile devices.
1. `gulp package` - grabs the **/dist**, **README.md** and the **Task-Instructions.docx** and compresses them into a **.zip** for delivery.
