let var1, var2;
        function submitMessage(){
            var1 = document.getElementById("name").value;
            var2 = document.getElementById("email").value;
            alert("Thank You" + var1 + "(e-mail:" + var2 + ")"+ "for your message");
        }