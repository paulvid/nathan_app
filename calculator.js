    // Function to handle user input and perform actions
    function handleInput(input) {
        var display = document.getElementById("display");
        display.value += input;
      }
      // Function to handle the reset button
      function handleReset() {
        var display = document.getElementById("display");
        if (display.value === "i want games") {
         window.open("https://www.google.com/search?q=video+games", "_blank")
        } else {
        display.value = "";
        }
      }
      // Function to handle the calculation
      function calculate() {
        var display = document.getElementById("display");
        var expression = display.value;
        try {
          var result = eval(expression); // Evaluates the expression
          display.value = result; // Displays the result
        } catch (error) {
          display.value = "Error"; // Displays "Error" if there's an evaluation error
        }
      }