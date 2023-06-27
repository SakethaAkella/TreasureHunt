document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input value
    var input = document.getElementById("inputField").value;
  
    // Perform input verification
    if (input === 100) {
      document.getElementById("verificationResult").innerHTML = "Input cannot be empty.";
    } else {
      document.getElementById("verificationResult").innerHTML = "Input is valid.";
    }
  });
  