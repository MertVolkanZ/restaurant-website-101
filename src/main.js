/* Independent React UI component. Existing HTML modules and vanilla JS remain untouched. */
(function () {
    if (!window.React || !window.ReactDOM) {
        console.warn('React could not be loaded; the restaurant site still works without the optional back-to-top button.');
        return;
    }
    const h = React.createElement;
    function BackToTop() {
        const [visible, setVisible] = React.useState(window.scrollY > 550);
        React.useEffect(() => {
            const onScroll = () => setVisible(window.scrollY > 550);
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }, []);
        if (!visible) return null;
        return h('button', {
            className: 'react-back-to-top',
            type: 'button',
            'aria-label': 'Sayfanın başına dön',
            title: 'Yukarı dön',
            onClick: () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
        }, '↑');
    }
    const root = document.getElementById('root');
    if (root) ReactDOM.createRoot(root).render(h(BackToTop));
})();
