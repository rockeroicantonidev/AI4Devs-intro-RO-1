document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reverseBtn = document.getElementById('reverseBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resultElement = document.getElementById('result');

    const reverseString = (str) => str.split('').reverse().join('');

    // Función para actualizar tanto el estado del botón como el resultado
    const updateInterface = () => {
        const inputVal = inputText.value;
        const isValid = inputVal.length >= 3;
        
        // 1. Control de estado del botón
        reverseBtn.disabled = !isValid;
        
        // 2. Actualización en tiempo real del resultado
        if (isValid) {
            resultElement.textContent = reverseString(inputVal);
        } else {
            resultElement.textContent = '';
        }
    };

    // Event listeners
    inputText.addEventListener('input', updateInterface);
    
    // Mantenemos el botón por compatibilidad con requisitos anteriores
    reverseBtn.addEventListener('click', () => {
        resultElement.textContent = reverseString(inputText.value);
    });

    copyBtn.addEventListener('click', () => {
        if (resultElement.textContent) {
            navigator.clipboard.writeText(resultElement.textContent)
                .then(() => alert('Texto copiado'))
                .catch(err => console.error('Error al copiar:', err));
        }
    });
});