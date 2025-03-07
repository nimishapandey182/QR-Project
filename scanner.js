document.addEventListener("DOMContentLoaded", function () {

    // Function to handle QR code scanning success
    function onScanSuccess(decodedText) {
        let decodedURL = decodedText.toLowerCase(); // Convert to lowercase for case-insensitive matching

        // Check if decoded text starts with http:// or https://
        if (decodedURL.startsWith('http://') || decodedURL.startsWith('https://')) {
            // Prompt the user with a confirmation dialog
            if (confirm("Do you want to open this URL?\n" + decodedText)) {
                // Open the URL in a new tab
                window.open(decodedText, '_blank');
            }
        } else {
            // Check if it's likely a domain name without protocol
            if (isValidDomain(decodedURL)) {
                // Prepend 'http://' to the decoded URL and open in a new tab
                let fullURL = 'http://' + decodedText;
                // Prompt the user with a confirmation dialog
                if (confirm("Do you want to open this URL?\n" + fullURL)) {
                    // Open the URL in a new tab
                    window.open(fullURL, '_blank');
                }
            } else {
                // Alert if the decoded text is not a valid URL
                alert("QR Code decoded: " + decodedText);
            }
        }
    }

    // Function to check if a string is a valid domain name
    function isValidDomain(str) {
        var pattern = new RegExp('^([a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}$', 'i'); // Domain name pattern
        return !!pattern.test(str);
    }

    // Initialize QR code scanner
    let htmlScanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );

    // Render QR code scanner
    htmlScanner.render(onScanSuccess);
});
