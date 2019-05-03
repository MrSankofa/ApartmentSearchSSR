const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="neighborhood">${body}</div>
    </body>
  </html>
`;

export default Html