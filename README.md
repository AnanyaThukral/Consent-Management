This project is done to recreate/redesign the Cookie Consent interface inorder to adhere to the new cookie compliance laws. To comply with the regulations governing cookies under the GDPR:

- Receive users’ consent before you use any cookies except strictly necessary cookies.
- Provide accurate and specific information about the data each cookie tracks and its purpose in plain language before consent is received.
- Make it as easy for users to withdraw their consent as it was for them to give their consent in the first place.

The user experience has been divided into two screens (Cookie Modal and Configure Modal). The Cookie Modal popup up as soon as the user lands on website. The Cookie Modal has a button "Configure" which takes user to Configure Modal. The Configure Modal consists a list of different cookies. The user can opt in/opt out of specific cookies based on their preferences.

The frontend user interface is created using Html, CSS, Javascript. The styles have been written for both light/dark theme. If needed in the future, there is also a function written to dynamically add a new cookies category in the list under Configure Modal. It adds a new cookie category whenever called without needing to code again. However, this can be easily accomplished in ReactJs without needing to add this function by simply creating a component for each category.

Points of Contact:
- Product Owner - Joey Ryken
- UX Design - Ananya Thukral, Umer Farooq
- Developer - Ananya Thukral

Code Setup/Usage:

- Install the VS Code extension Live Server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Navigate to index.html and click on "Live server" (it is located at the bottom of the screen)
- When you save changes, it runs the code automatically and reloads the application everytime.
- By default the interface/design is rendered for light theme websites. To change UI to dark theme, navigate to app.js and scroll down to changeToDarkTheme() function.

```
changeToDarkTheme();
```
Pass the value "true" and update the function call like this:
```
changeToDarkTheme(true);
```
