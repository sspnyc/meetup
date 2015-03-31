#Meetup
###Genevieve wants to collect names and e-mail addresses of developers for her monthly meet ups. She wants to be able to list attendees from Telnet and change the date, name and refresh RSVP list so she can re-use the app.

###client:

1. After the client is connected to the server an upcoming Meetup Date will appear.
```bash
Welcome to Carroll Gardens Meetup
May 2nd
How To Make a Spec
Please RSVP by entering
RSVP name e-mail
```
2. A user can RSVP to a meetup.
```bash
RSVP Simmy sspnyc@gmail.com
Thanks for your RSVP!
8 people will be attending
```
3. A message will appear if the user does not RSVP with a name and e-mail address.
```bash
Please RSVP with your name and address
RSVP name e@mailaddress.com
```
###Genevieve/Admin:

*List of Developers attending.
```bash
List
Simmy
Cary
Bobby
Anna
```
*Update Event.
```bash
update 'June 2' 'Event Name'
```
*Empty and refresh attendee list.
```bash
refresh
```
