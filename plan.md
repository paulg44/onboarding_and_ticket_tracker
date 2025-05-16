#CLIENT
1 Add Firebase Project

- add all firebase details
- useContext to be able to use it throughout the project

2 Create Sign up Form

- Name
- Email
- Password
- Image?
- Title/Role (for permissions)
- Verify Email?

3 Create Login Form

- Email & Password
- 2 Step or Google etc
- Go to dashboard

4 Create Dashboard

Components:

- Onboarding checklist: Once checklist complete user has full access, do not give full access until completed
- User Card: Shows a users details and any tickets
- Ticket System: Lets a user add a ticket and view the status of all tickets, can filter by type - Add a ticket - Check status of tickets

5

#SERVER

1 Create basic Node/Express server ✅
2 Create controllers for data from Firestore
3 Create routes

- POST: create a ticket
- GET: get tickets (filtered)
- PATCH: update tickets and onboarding steps
  4 Create services such as firebaseService
