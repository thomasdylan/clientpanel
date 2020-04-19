# Client Panel  
Client Panel is built using Angular.  
This app allows registered users to add and adjust the information of clients.  
Guest login provided for users to test application without creating an account.

## Live Site  
https://client-panel-6e5ab.web.app/login

### Guest Login
email: guest@example.com  
password: 123456  

**General functionality:**

- Authenticate users via Firebase (login/register pages + logout).
- Add, edit or delete clients stored in Firestore.
- Update balance of each client.
- Uses guards to prevent unauthorized access.

**The general page breakdown**

- Dashboard (https://client-panel-6e5ab.web.app)
    ![](/readme_images/dashboard-1140px-500px.png)
- Login (https://client-panel-6e5ab.web.app/login)
    ![](/readme_images/login-1140px-500px.png)
- Settings (https://client-panel-6e5ab.web.app/settings)
    ![](/readme_images/settings-1140px-500px.png)
- Add Client (https://client-panel-6e5ab.web.app/client/add)
    ![](/readme_images/add-edit-client-1140px-700px.png)
- Client Details (https://client-panel-6e5ab.web.app/client/:id)
    ![](/readme_images/client-detail-1140px-500px.png)
