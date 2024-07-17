/** @type {import('next').NextConfig} */

//enable ppr and incremental value, for enable to especific routes

const nextConfig = {
    experimental: {
        ppr: 'incremental',
    }
};

export default nextConfig;
