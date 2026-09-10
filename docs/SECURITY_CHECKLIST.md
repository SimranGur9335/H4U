\# H4U - Security Checklist



\## Authentication



\- \[ ] Firebase authentication implemented correctly

\- \[ ] Authentication state handled securely

\- \[ ] Invalid sessions rejected

\- \[ ] Logout clears application session



\## Authorization



\- \[ ] Beneficiary cannot access counsellor routes

\- \[ ] Counsellor cannot access admin-only routes

\- \[ ] Backend verifies user identity

\- \[ ] Backend verifies user role



\## API Security



\- \[ ] Authentication token sent with protected requests

\- \[ ] Backend validates authentication token

\- \[ ] Unauthorized requests return 401

\- \[ ] Forbidden requests return 403

\- \[ ] Input validation implemented

\- \[ ] Sensitive endpoints protected



\## Data Protection



\- \[ ] No passwords stored manually

\- \[ ] No API keys committed to Git

\- \[ ] No Firebase private credentials committed

\- \[ ] No sensitive user data logged unnecessarily

\- \[ ] Environment variables used for secrets



\## Frontend Security



\- \[ ] Protected routes implemented

\- \[ ] User input validated

\- \[ ] Unsafe HTML rendering avoided

\- \[ ] Sensitive information not exposed in UI



\## Repository Security



\- \[ ] .gitignore configured

\- \[ ] .env files excluded

\- \[ ] Secrets removed from source code

\- \[ ] Dependencies checked for vulnerabilities

