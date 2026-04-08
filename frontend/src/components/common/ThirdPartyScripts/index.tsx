import { useEffect } from "react";
import ChatwootWidget from "../ChatwootWidget";

export const ThirdPartyScripts = () => {
    useEffect(() => {
        // Meta Pixel Code
        if (!(window as any).fbq) {
            (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            (window as any).fbq('init', '724515543209174');
            (window as any).fbq('track', 'PageView');
        }
    }, []);

    return (
        <>
            <ChatwootWidget />
            {/* Meta Pixel Noscript */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=724515543209174&ev=PageView&noscript=1"
                />
            </noscript>
        </>
    );
}
