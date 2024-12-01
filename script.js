function volume_sphere() {
    //Write your code here
event.preventDefault(); // Prevent form submission

    // Retrieve radius input
    const radiusInput = document.getElementById('radius').value;

    // Convert to a number
    const radius = parseFloat(radiusInput);

    // Validate input: Ensure radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the result to 4 decimal places
    const roundedVolume = volume.toFixed(4);

    // Display the result in the output field
    document.getElementById('volume').value = roundedVolume;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
