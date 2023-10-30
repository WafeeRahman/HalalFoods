import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Function to delete all cookies
        function deleteAllCookies() {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        }

        // Call the function to delete all cookies
        deleteAllCookies();

        // Clear any other session-related data from local storage
        localStorage.removeItem('your_session_data_key');

        // Make a POST request to your backend to log the user out
        axios.post('http://localhost:3000/logout')
            .then(response => {
                // Redirect to the home page or any desired page using navigate
                navigate('/');
            })
            .catch(error => {
                console.error('Error logging out:', error);
                navigate('/');
            });
    }, [navigate]);

    return <div>Logging out...</div>;
}

export default Logout;
