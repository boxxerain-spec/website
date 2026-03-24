import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'im.whatshot.in' },
      { protocol: 'https', hostname: 'www.whatshot.in' },
      { protocol: 'https', hostname: 'www.mid-day.com' },
      { protocol: 'https', hostname: 'static.mid-day.com' },
      { protocol: 'https', hostname: 'socity.in' },
      { protocol: 'https', hostname: 'lockerroom.in' },
      { protocol: 'https', hostname: 'english.cdn.zeenews.com' },
      { protocol: 'https', hostname: 'www.dnaindia.com' },
      { protocol: 'https', hostname: 'd.ibtimes.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'businessnewsthisweek.com' },
      { protocol: 'https', hostname: 'biznewsdesk.com' },
      { protocol: 'https', hostname: 'onlinemediacafe.com' },
      { protocol: 'https', hostname: 'smartbusinesnews.com' },
      { protocol: 'https', hostname: 'contentmediasolution.com' },
      { protocol: 'https', hostname: 'logo.clearbit.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'imgmediagumlet.lbb.in' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'so.city' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },


};

export default nextConfig;
