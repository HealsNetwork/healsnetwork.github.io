const ipText = document.getElementById("ip-text");
    
        function copy(text) {
           const temp = document.createElement('textarea');
           temp.value = text;
            
           document.body.appendChild(temp);
    
           temp.select();
           document.execCommand('copy');
    
            document.body.removeChild(temp);
    
            const startText = ipText.innerText;
            ipText.innerText = "IP Copiato";
    
           setTimeout(() => {
               ipText.innerText = startText;
            }, 3000)
        }