
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function deleteLastChar() {
            var display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }

        function addDot() {
            var display = document.getElementById('display');
            if (display.value.indexOf('.') === -1) {
                display.value += '.';
            }
        }

        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function evaluateExpression() {
            var display = document.getElementById('display');
            display.value = eval(display.value);
        }

        function toggleButton(deleteLastChar) {
            var display = document.getElementById('display');
            if (display.disabled) {
                display.disabled = false;
                return deleteLastChar; // This seems unnecessary and unclear
            } else {
                display.disabled = true;
            }
        }
        