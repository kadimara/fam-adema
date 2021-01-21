import { withIronSession } from 'next-iron-session';

export const redirectToLogin = withIronSession(
    async ({ req, res }) => {
        const isAuth = req.session.get('isAuth');

        if (!isAuth) {
            res.statusCode = 302;
            res.setHeader('Location', '/login');
            return { props: {} };
        }

        res.statusCode = 302;
        return { props: {} };
    },
    {
        cookieName: 'MYSITECOOKIE',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production' ? true : false,
        },
        password: process.env.APPLICATION_SECRET,
    }
);

export const redirectToHome = withIronSession(
    async ({ req, res }) => {
        const isAuth = req.session.get('isAuth');

        if (isAuth) {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return { props: {} };
        } else {
            res.statusCode = 302;
            return { props: {} };
        }
    },
    {
        cookieName: 'MYSITECOOKIE',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production' ? true : false,
        },
        password: process.env.APPLICATION_SECRET,
    }
);
