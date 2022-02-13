import ReactGA from 'react-ga';

const navigateTo = (link) => {
    ReactGA.outboundLink(
        {
            label: `Clicked link: ${link}`,
        },
        () => {},
        ['tracker2']
    );
    window.open(link, '_blank');
}

export default navigateTo;