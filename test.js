<!DOCTYPE html>
<html>
  <head>
    <script>
      function showPopup() {
        var x = window.open("", "shart", "width=500,height=300");
        x.document.write(`
          <html>
            <head>
              <title>Popup</title>
            </head>
            <body>
              <h1>This is a popup</h1>
            </body>
          </html>
        `);
      }
    </script>
  </head>
  <body>
    <button onclick="showPopup()">Open Popup</button>
  </body>
</html>