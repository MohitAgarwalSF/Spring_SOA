1) Create a field on Account named "Number of Contacts". Populate this field with the number of contacts related to an account?
Ans) For this I have build an apex trigger on contact name "contactCountOnAccount".
2) Build a basic lightning component that can query a list of 10 most recently created accounts and display it using a lightning app.?
Ans) I have created Aura Component(latestAccountRec), Aura Application(latestAccountRec_App) and Apex class(latestAccountRec_ctrl).
3) Make a basic http callout and print the result using system.debug?
Ans) For this I have create an apex class "BasicHttpCallout". To get the callout result in system debug excute "BasicHttpCallout.basic_HTTP()" in anonymous window.
But before that first we need to create a remote site setting with url "https://postman-echo.com".
