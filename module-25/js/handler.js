        document.getElementById('btn-update-title')
        .addEventListener('click', function(){
            // console.log('button Clicked');
            const pageTitleElement = document.getElementById('title-text');
            // console.log(pageTitleElement);
            pageTitleElement.innerText = "Updated page title text";
        })
        //  another button
        document.getElementById('button-login')
        .addEventListener('click', function(){
            // console.log('login button clicked');
            const userInfoEl = document.getElementById('user-info');
            userInfoEl.innerText = "User logged in successfully."
            
        })

        // another example
