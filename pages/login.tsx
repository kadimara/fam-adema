import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { redirectToHome } from '../lib/serversideprops';

export default function SignInPage() {
    const router = useRouter();
    const passwordInput = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const password = passwordInput.current.value;

        const response = await fetch('/api/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            return router.push('/private');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Password: <input type="password" ref={passwordInput} />
                </label>
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
    );
}

export const getServerSideProps = redirectToHome;
