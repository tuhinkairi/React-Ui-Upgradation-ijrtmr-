import RouteControl from '../RouteControl.tsx'
import Sitemap from '../../public/sitemap';

const generateSitemap = (baseUrl, outputPath) => {
    const sitemap = new Sitemap(RouteControl);
    return sitemap
        .build(baseUrl)
        .save(outputPath);
};


generateSitemap(process.env.VITE_API_HOST_URL, "../../public/sitemap.xml")