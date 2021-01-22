import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        borderRadiusSmall: string;

        // https://www.smashingmagazine.com/2016/04/web-developer-guide-color/
        // Hoe kies je een kleur
        // TODO naar nextjs-app-empty kopieren
        colors: {
            main: string;
            secondary: string;
            white: string;
            light: string;
            dark: string;
        };
    }
}
