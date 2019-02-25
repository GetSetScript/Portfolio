export default [
	{
		label: "Front End",
        paragraph1: `When building a website frontend, the first step is to structure the page using HTML 5 to provide context and meaning to the layout.
           Then I make the page fully responsive for mobile and desktop, and add simple animations for navigation and flair. 
           This portfolio Is fully responsive, check it out by resizing the browser! All of this is done with custom CSS,
           I do not currently use Bootstrap or other CSS frameworks. Lastly I add both simple and complex functionality to
           the page using modern JavaScript, the DOM, and the Vue web framework.`,
        paragraph2: ``,
		images: [
			{
				imageUrl: require("./../Assets/Images/javascript-icon.png"),
				imageDescription: "The logo for Javascript"
			},
			{
				imageUrl: require("./../Assets/Images/html-icon.png"),
				imageDescription: "The logo for HTML"
			},
			{
				imageUrl: require("./../Assets/Images/css-icon.png"),
				imageDescription: "The logo for CSS"
			},
			{
				imageUrl: require("./../Assets/Images/vue-icon.png"),
				imageDescription: "The logo for the Vue framework"
			}
		],
		gifSource: ""
	},
	{
		label: "Back End",
        paragraph1: `C# was the language I learned to program with, and I know many of the features of the language.
            Starting out I used C# to make desktop applications in WinForms and small console applications.
            Now I build websites and web api's using C# and the ASP.NET Core MVC framework. If a database is needed
            for a website, I use Entity Framework Core's Code-First approach to generate the SQL queries and database tables.`, 
        paragraph2: `On top of ASP.NET Core I use a few extra libraries to make the web application better.
            I add Nlog for logging, Swagger for documentation, and xUnit for testing. Depending on the needs of the
            application I will also integrate the Vue web framework and Webpack, which gives me the choice of using
            Vue instead of or in addition to ASP.NET Core's Razor Markup.`, 
		images: [
			{
				imageUrl: require("./../Assets/Images/c-sharp-icon.png"),
				imageDescription: "The logo for C#"
			},
			{
				imageUrl: require("./../Assets/Images/core-icon.png"),
				imageDescription: "The logo for ASP.NET Core"
			}
		],
		gifSource: ""
    },
    {
		label: "DevOps",
        paragraph1: `Azure DevOps is a big part of my development. I use Azure DevOps Boards for 
            breaking down the project and tracking my progress on board items. I use Git for my
            version control, mainly through Azure DevOps Repos but I will also push my changes
            into GitHub via the Azure DevOps Pipeline. `, 
        paragraph2: `Many of the websites I work on require me to use Webpack and Babel as part of the
             build. I use them to transpile modern features of JavaScript into older versions which 
             are better supported across different browsers, and to help manage JavaScript modules. 
             To make a website ready for production I use Webpack for minifying files, 
             cache busting, and bundle splitting.`, 
		images: [
			{
				imageUrl: require("./../Assets/Images/webpack-icon.png"),
				imageDescription: "The logo for Webpack"
			},
			{
				imageUrl: require("./../Assets/Images/azure-icon.png"),
				imageDescription: "The logo for Azure Dev Ops"
            },
            {
				imageUrl: require("./../Assets/Images/github-icon.png"),
				imageDescription: "The logo for Github"
			}
		],
		gifSource: ""
	},
	{
		label: "Design",
        paragraph1: ``, 
        paragraph2: ``, 
		images: [],
		gifSource: require("./../Assets/Images/zoidberg.gif")
	}
]
