<!DOCTYPE html>
<html>
    <head>
    <title>Forms</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
                    <link rel="stylesheet" href="includes/style.css">
                    <link href="https://fonts.googleapis.com/css?family=Bungee&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
                    <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body>
        <section>
            Welcome
            <?php
            $un = $_GET["reg_un"];
            $pw = $_GET["reg_pass"];

            if ($un == "aviel" && $pw =="12345678")
                echo "<h2>Good morning sunshine 🌤" . $un . "</h2>";
            else
                echo "<h2>Who are you? you can't get in! ⛔ </h2>";
            ?>
        </section>
    </body>
</html>