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
    <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
    <script src="/app.js"></script>
    <script>
      ReactDOM.hydrate(
        React.createElement(index),
        document.getElementById('neighborhood')
      );
    </script>
  </html>
`;

export default Html