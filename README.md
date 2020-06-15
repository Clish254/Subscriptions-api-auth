# subscriptions-api-auth
Api to handle token based authentication  written by @clish.<br>
**Endpoints**<br>
*POST /v1/user/register to sign up and get a user ID as response<br>
*POST /v1/user/login to sign in and get an access token<br>

User schema = {<br>
  name : String<br>
  email : String<br>
  password:String<br>
}<br>
*Sign up example, post request with user object<br>
{<br>
  "name":"John Doe"<br>
  "email":"johndoe@gmail.com"<br>
  "password":"johndoe254"<br>
}<br>
*Login example <br>
{
  "email":"johndoe@gmail.com"<br>
  "password":"johndoe254"<br>
}<br>
*You should get an access token as the response after logging in
