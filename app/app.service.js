
(function(){
	'use strict';

	angular
		.module('theProjectsApp')
		.service('projectsService', projectsService);

	function projectsService(){
		var self = this;

		this.projects = [
			{
				type:'latest',
				content: [
					{
						id: '-l1',
                        genre:'Responsive Website Development',
						title: 'Shield & Sheen',
						tech: 'HTML5, CSS3, JavaScript, jQuery',
						date: 'August 2017',
						img: 'sns-thumb.png',
                        website_url:"http://www.shieldandsheen.com/",
                        github_url:"https://github.com/ashujainvi/shieldandsheen-siteupdate",
						description:"The Shield & Shield website needed some love. The old website was doing it's job but needed that perfect look. There was scope of complete redesign as it didn't have much content. The website is live now and the owner is loving it!"
					}
				]	
			},
			{
				type:'frontend',
				content: [
                    {
						id: '-f7',
                        genre:'Responsive Single-Page-App',
						title: "Projects Website",
						tech: 'HTML5, CSS3, JavaScript, JQuery, AngularJS, Photoshop CC',
						date: 'August 2017',
						img: 'projects-thumb.png',
                        website_url:"http://projects.ashutoshjainvi.com/",
                        github_url:"https://github.com/ashujainvi/ashutoshjainvi-projects",
						description:"Every Front-end developer needs to showcase what he/she can do. I have my own portfolio for that. Felt that there was a need to create something more professional and project specific by utilizing the technology of today & tomorrow - Angular!"
					},
                    {
						id: '-f6',
                        genre:'Front-end Testing',
						title: "Protractor Testing Framework",
						tech: 'Protractor, Jasmine 2, AngularJS',
						date: 'July 2017',
						img: 'protractor-thumb.png',
						description:"It is not easy to debug large scale single-page-apps. Same was the case with DSW.com. Even though there is a dedicated team for testing, UI team needed something to test the front-end functionalities before sending the code to the testing team. I made that possible. Worked for 2 weeks on building and implementing Protactor testing for the same during my internship at DSW Inc."
					},
                    {
						id: '-f5',
                        genre:'Responsive Website Development & Branding, UI/UX',
						title: "Ashutosh's Portfolio",
						tech: 'HTML5, CSS3, JavaScript, Photoshop CC',
						date: 'January 2017',
						img: 'ashutosh-thumb.png',
                        website_url:"http://www.ashutoshjainvi.com/",
                        github_url:"https://github.com/ashujainvi/ashujainvi.github.io",
						description:"A much needed portfolio of my own work to showcase what I can really do with my design and development skills. Every graphic here is self designed."
					},
					{
						id: '-f4',
                        genre:'Responsive Website Development',
						title: 'N-Quire',
						tech: 'HTML5, CSS3, JavaScript, (By team - Python, Solr)',
						date: 'October 2016',
						img: 'nquire-thumb.png',
                        website_url:"http://www.aneeshbhatnagar.com/n-quire/",
//                        github_url:"https://github.com/ashujainvi/shieldandsheen-siteupdate",
						description:"A basic layout/template was created for my team to create a small search engine or a question answer system which answers your questions about the indian politics."
					},
					{
						id: '-f3',
                        genre:'Website Development & Brand Design, UI/UX',
						title: 'Techtrishna',
						tech: 'HTML5, CSS3, JavaScript, jQuery, .NET, Photoshop CC',
						date: 'March 2015',
						img: 'techtrishna-thumb.png',
                        website_url: "https://ashujainvi.github.io/techtrishna2015/",
                        mobile_url: "https://ashujainvi.github.io/techtrishna2015-mobile/",
                        github_url: "https://github.com/ashujainvi/techtrishna2015",
						description:"A technical fest is the best time to showcase and brush up your technical skills. I built this college tech-fest website, from scratch to UX to UI with my team (www.silive.in) which was used by over 1000+ students to register for different events during the fest."
					},
					{
						id: '-f2',
                        genre:'Responsive Website Development',
						title: 'Scrolls',
						tech: 'HTML5, CSS3, JavaScript, JQuery, Ajax, PHP',
						date: 'September 2015',
						img: 'scrolls-thumb.png',
                        website_url: "http://scrolls15.silive.in/",
                        github_url:"https://github.com/ashujainvi/scrolls2015",
						description:"Every year, a new design comes out for Scrolls (www.akgec-scrolls.com) website. I feel proud to say that back in 2015, my team's (www.silive.in) version was used for the main website which was used by more than 200 teams to register and submit their synopsis."
					},
					{
						id: '-f1',
                        genre:'Responsive Website Development & Branding',
						title: 'Table Tennis',
						tech: 'HTML5, CSS3, Ajax, PHP, Photoshop CC',
						date: 'November 2014',
						img: 'tt-thumb.png',
                        website_url:"https://ashujainvi.github.io/tabletennis2014/",
                        github_url:"https://github.com/ashujainvi/tabletennis2014",
						description:"Back in 2014, everybody was excited about Bootstrap. So, I decided to go with the flow. This was my first commercial website."
					}
				]
			},
			{
				type:'backend',
				content: [
					{
						id: '-b4',
                        genre:'Data Mining',
						title: 'Association Analysis',
						tech: 'Python 2.7',
						date: 'September 2017',
						img: 'apriori.png',
//                        website_url: "http://www.shieldandsheen.com/",
//                        github_url: "https://github.com/ashujainvi/shieldandsheen-siteupdate",
						description:"Implemented the Apriori algorithm to find all frequent itemsets and generated association rules based on given support and confidence and then answering the query based on the rules without using external libraries."
					},
                    {
						id: '-b3',
                        genre:'Data Analysis & Visualization',
						title: 'Data Visualization of IPL',
						tech: 'Tableau',
						date: 'April 2017',
						img: 'ipl.png',
//                        website_url: "http://www.shieldandsheen.com/",
						description:"The data used for this visualization is IPL data in the form of CSV available at Kaggle.com"
					},
                    {
						id: '-b2',
                        genre:'Machine Learning',
						title: 'Handwritten digits classification',
						tech: 'Python 3',
						date: 'March 2017',
						img: 'handwritten.png',
						description:"In this project me and my team-mates implemented a Multilayer Perceptron Neural Network and evaluated its performance in classifying handwritten digits."
					},
                    {
						id: '-b1',
                        genre:'Algorithm Design',
						title: 'Longest Common Subsequence',
						tech: 'Python',
						date: 'December 2016',
						img: 'lcs.png',
                        github_url: "https://github.com/ashujainvi/longest-common-subsequence",
						description:"Simple implementation of longest common susequence using python"
					}
				]
			},
			{
				type:'graphics',
				content: [
                    {
						id: '-g13',
                        genre:'Illustration',
						title: "The Ashutosh's Dock",
						tech: 'Photoshop CC',
						date: 'January 2017',
						img: 'dock-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A dock design for my own website landing page."
					},
                    {
						id: '-g12',
                        genre:'Typography',
						title: 'Headings Typography',
						tech: 'Photoshop CC',
						date: 'January 2017',
						img: 'sitefonts-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"Unique headings made for my own website."
					},
                    {
						id: '-g11',
                        genre:'Typography',
						title: 'Creativity Typography',
						tech: 'Photoshop CC',
						date: 'December 2016',
						img: 'creativity-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A simple typography using adobe photoshop skills."
					},
                    {
						id: '-g10',
                        genre:'Illustration',
						title: 'My guy',
						tech: 'Photoshop CC',
						date: 'October 2016',
						img: 'guyposter-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A vector design of a guy meditating. It was for my own website - ashutoshjainvi.com"
					},
                    {
						id: '-g9',
                        genre:'Logo Design',
						title: 'Cream Craft',
						tech: 'Photoshop CC',
						date: 'December 2015',
						img: 'creamcraft-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A flat logo design for a futuristic cake company called cream craft."
					},
                    {
						id: '-g8',
                        genre:'Graphic Design',
						title: 'Nainital Poster',
						tech: 'Adobe Photoshop CC',
						date: 'October 2015',
						img: 'nainitalposter-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A flat vector poster of a beautiful place called Nainital, India."
					},
                    {
						id: '-g7',
                        genre:'Illustration',
						title: '3D-Guy Printing',
						tech: 'Adobe Photoshop CC',
						date: 'August 2015',
						img: '3dprinting-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A flat by 3d looking logo design for 3D-guy printing company."
					},
                    {
						id: '-g6',
                        genre:'Typography',
						title: 'Ashutosh Jainvi Typography',
						tech: 'Adobe Illustrator',
						date: 'June 2015',
						img: 'ashutoshposter-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"Another illustrator typography skill check."
					},
                    {
						id: '-g5',
                        genre:'Logo Design',
						title: 'Torque HP',
						tech: 'Adobe Photoshop CC',
						date: 'April 2015',
						img: 'torque-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A concept logo designed for a car-based company called torque-hp"
					},
                    {
						id: '-g4',
                        genre:'Illustration',
						title: 'Watch',
						tech: 'Adobe Illustrator',
						date: 'March 2015',
						img: 'watch-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"Just because you know how to use photoshop, that can't prove that you are a designer. So, I decided to move towards illustrator and this was my first result."
					},
                    {
						id: '-g3',
                        genre:'Logo Design',
						title: 'Direct Me',
						tech: 'Adobe Photoshop CC',
						date: 'February 2015',
						img: 'directme-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A logo designed for a web-based car game. I kept it simple and related to the road."
					},
					{
						id: '-g2',
                        genre:'Graphic Design',
						title: 'TechTrishna Poster',
						tech: 'Adobe Photoshop CC',
						date: 'February 2015',
						img: 'ttposter-thumb.png',
                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A 4x3 poster designed for printing for technical fest promotions and information."
					},
                    {
						id: '-g1',
                        genre:'Logo Design',
						title: 'Discipline Committee Logo',
						tech: 'Adobe Photoshop CC',
						date: 'September 2014',
						img: 'dc-thumb.png',
//                        pinterest_url: "https://in.pinterest.com/pin/442126888397214522/",
						description:"A logo designed for discipline committee. A badge design was a good fit for a committee related to discipline."
					}
				]
			}
			
		];
	}
})();