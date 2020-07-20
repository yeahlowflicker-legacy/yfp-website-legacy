
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAzA3yiV8dLJSpbJitWGrQa3ab-FEVeAd0",
    authDomain: "yf-console.firebaseapp.com",
    databaseURL: "https://yf-console.firebaseio.com",
    projectId: "yf-console",
    storageBucket: "yf-console.appspot.com",
    messagingSenderId: "1047286780466",
    appId: "1:1047286780466:web:f64353670d1e4fa9b3e22b"
};
firebase.initializeApp(firebaseConfig);




function onSubmitClicked() {
    var userEmail = document.getElementById("email-input").value;
    var relatedProduct = document.getElementById("related-product-input").value;
    var subject = document.getElementById("subject-input").value;
    var description = document.getElementById("description-input").value;


    //  Data validation
    if(userEmail.length <= 3 || !userEmail.includes("@")) {
        alert("Your email input is invalid.");
        return;
    }
    if(subject.length <= 3) {
        alert("Please enter a subject.");
        return;
    }
    if(description.length <= 5) {
        alert("Please enter a valid description.");
        return;
    }


    //  Firebase
    firebase.firestore().collection("website-enquiries").add({
        "user-email": userEmail,
        "related-product": relatedProduct,
        "subject": subject,
        "description": description
    });

    
    //  Clear fields
    document.getElementById("email-input").value = "";
    document.getElementById("related-product-input").selectedIndex = 0;
    document.getElementById("subject-input").value = "";
    document.getElementById("description-input").value = "";


    //  Alert user
    alert("Message has been successfully sent.");
}