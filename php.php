<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Empfänger-E-Mail-Adresse
    $empfaenger = "chrisk@onlinehome.de";

    // Betreff der E-Mail
    $betreff = "Neue Nachricht von der Website";

    // Nachricht zusammenstellen
    $nachricht = "Name: " . $_POST['name'] . "\n";
    $nachricht .= "E-Mail: " . $_POST['email'] . "\n";
    $nachricht .= "Nachricht: " . $_POST['message'];

    // E-Mail senden
    mail($empfaenger, $betreff, $nachricht);

    // Optional: Weiterleitung nach dem Senden
    header("Location: index.html");
    exit();
}
?>