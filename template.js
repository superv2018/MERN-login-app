export default ({ markup, css }) => {
    return `<!doctype html>
    <html lang="en">
     <head>
      <meta charset="utf-8">
      <title>MERN Kickoff</title>
      <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?
        family=Roboto:100,300,400">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
        <style>
           a { text-decoration: none }
        </style>
      </head>
      <body>
       <div id="root">${markup}</div>
       <style id="jss-server-side">${css}</style>
       <script type="text/javascript" src='/dist/bundle.js'>
       </script>
      </body>
      </html>`
}