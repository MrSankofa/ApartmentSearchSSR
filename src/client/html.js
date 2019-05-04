const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="neighborhood">${body}</div>
    </body>
    <script src="/lib/react.development.js"></script>
    <script src="/lib/react-dom.development.js"></script>
    <script src="/app.js"></script>
    <script>
      ReactDOM.hydrate(
        React.createElement(Index),
        document.getElementById('neighborhood')
      );
    </script>
  </html>
`;

export default Html