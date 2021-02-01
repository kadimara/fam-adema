module.exports = {
    env: {
        APPLICATION_SECRET: "ZApk5QBmeGf0M610h37xSIsWA5v3osk4",
    },
    async redirects() {
        return [
            {
                source: "/hersenkraker",
                destination: "/hersenkraker/begin",
                permanent: true,
            },
        ];
    },
};
