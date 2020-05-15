# A free, fast, and easy-to-edit portfolio website for artists and designers.

* Simply designed to showcase your work 
* Fast and repsonsive on desktop and mobile
* Simple setup 
* Easily updated via Airtable
* Code is free to use and edit without attribution

## Sample Sites
 * [https://samt.work](https://samt.work) ([Airtable](https://airtable.com/shrqxhD3GnjQlmyZY))

*If you use this project to build your site, please [let me know](srticknor@gmail.com) so I can add it here!*

## Requirements
Having some knowledge of web programming can be helpful for customizing your site and troubleshooting. However, all that's REQUIRED is:
* A place to host code (I recommend [a GitHub account](https://github.com/) - it is free!)
* [An Airtable account](https://airtable.com/)

## Get Started

### 1. Duplicate the Airtable base
Your Airtable base (a collection of spreadsheets) will contain the site plan for your website. Menus and content will be generated from this plan.
Duplicate [this starter base](https://airtable.com/shrqxhD3GnjQlmyZY) into your own Airtable account

### 2. Duplicate the Code 
Click the 'Fork' button in the top right corner of this project page. Then, select the GitHub account where you will keep the repo for your portfolio site.

### 3. Add your Airtable Stuff To `CONFIG.js`
* Your Base ID can be found on the Airtable site: "To obtain the ID of your AirTable base, open the AirTable Standard API page and click on the AirTable base that you want to use. This will open the API page of the base. The base ID can be found in the URL of the API page of the base."
* In Airtable, invite PortfolioSiteReader@gmail.com as a read-only collaborator. That account's API key in already located in `CONFIG.js`. Optionally, you can also add your own API key, but it will be more secure to use a read-only API key. 

### 4. Host Portfolio Site
If you're using GitHub, I recommend deploying your site with GitHub pages (free hosting!). You can also configure a Github Pages site to use any custom domains that you own. 

### 5. Update Portfolio Site 
If you've successfully set up your site, then the most technical portion is behind you. Now - you can easily change the site content, by changing the values in the spreadsheet. 
There are 3 sheets: About, Works, and CV. Each of these sheets serves a specific purpose. In any sheet, column names should not be altered. Use the guide below to learn how to use these spreadsheets. 

#### About
The about helps you setup the basics of your site. Includes optional Bio and Statement. Include a slideshow on your homepage by adding images to Splash Images cell. 

#### Works
Adds images and work info to your site. The menu is generated from the groups and categories specified on this page.

#### CV
Keep track of professional accomplishments here. Optionally, display them to your site. 

