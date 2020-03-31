module.exports = {
	siteMetadata: {
		title: `Kekker Documentation`,
		author: `Kekker`,
		bio: ``,
		description: `Documentation for new Kekker Platform`,
		siteUrl: `localhost:8000`
	},
	plugins: [
		{
		  resolve: `gatsby-plugin-manifest`,
		  options: {
			name: `Kekker Documentation`,
			short_name: `Kekker`,
			start_url: `/`,
			description: `Documentation for new Kekker Platform`,
			lang: `en`,
			background_color: `#f7f0eb`,
			theme_color: `#a2466c`,
			display: `standalone`,
			icon: `static/assets/kekker-flavicon.png`
		  }
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-prismjs`,
					`gatsby-remark-smartypants`,
					{
            			resolve: `gatsby-remark-images`,
            			options: {
              				maxWidth: 800,
            			},
          			},
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/components/ThemeTypography`
			}
		},
    	`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-sitemap`
	]
};
