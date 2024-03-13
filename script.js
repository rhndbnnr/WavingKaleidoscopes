document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

   const formData = new FormData(this);
   const name = formData.get('name');
   const email =formData.get('email');
   const message =formData.get('message');
   
