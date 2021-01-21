import { withIronSession } from 'next-iron-session';

const VALID_PASSWORD = '121212';

export default withIronSession(
    async (req, res) => {
        if (req.method === 'POST') {
            const { password } = req.body;

            if (password === VALID_PASSWORD) {
                req.session.set('isAuth', true);
                await req.session.save();
                return res.status(201).send('');
            }
            return res.status(403).send('');
        }

        return res.status(404).send('');
    },
    {
        cookieName: 'MYSITECOOKIE',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production' ? true : false,
        },
        password: process.env.APPLICATION_SECRET,
    }
);
