export const metadata = {
title: "Ecommerce | Home",
description: "Ecommerce para empresa de ropa Zara",
};

export default function RootLayout({ children }) {
return (
    <html lang="es">
    <body>
        {children}
    </body>
    </html>
);
}
