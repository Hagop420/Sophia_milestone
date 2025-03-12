 // storage code submission


   // Check if there's any stored data when the page loads
   window.onload = function () {
      displayStoredData();
   };

   // Handle form submission
   document.getElementById('feedbackForm').addEventListener('submit', function (event) {
      event.preventDefault();  // Prevents the page from refreshing

      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const feedback = document.getElementById('feedback').value;


      const formData = {
         name: name,
         email: email,
         feedback: feedback
      };

      localStorage.setItem('feedbackData', JSON.stringify(formData));

      // Display stored data
      displayStoredData();

      // Optionally clear the form after submission
      document.getElementById('feedbackForm').reset();
   });

   // Function to display stored data
   function displayStoredData() {
      const storedData = localStorage.getItem('feedbackData');
      if (storedData) {
         const data = JSON.parse(storedData);
         document.getElementById('storedData').innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Feedback/Order Details:</strong> ${data.feedback}</p>
        `;
         
        document.querySelector('.chase').style.display = 'block'

      } else {
         document.getElementById('storedData').innerHTML = '<p>No purchases made.</p>';

         document.querySelector('.chase').style.display = 'none'
      }
   }