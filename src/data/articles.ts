export interface Article {
    id: string;
    source: string;
    sourceLogo?: string;
    brandColor?: string;
    headline: string;
    excerpt: string;
    year: string;
    link: string;
    category: "HIGHLIGHTS" | "INTERVIEWS" | "COMMUNITY" | "TRANSFORMATION";
    image?: string;
}

export const articles: Article[] = [
    {
        id: "1",
        source: "LBB",
        sourceLogo: "/media/lbb_logo.svg",
        brandColor: "#000000",
        headline: "Join Boxx Era Fitness Studio In South Delhi With Female Coaches",
        excerpt: "Experience high-performance training with a dedicated team of experts in the heart of South Delhi.",
        year: "2023",
        link: "https://lbb.in/delhi/join-Boxx-Era-fitness-studio-in-south-delhi-with-female-trainers/",
        category: "HIGHLIGHTS",
        image: "https://imgmediagumlet.lbb.in/media/2019/10/5d9f96453dc1e916a83879e5_1570739781948.jpg",
    },
    {
        id: "2",
        source: "What's Hot",
        sourceLogo: "https://www.whatshot.in/images/amp/wh-logo.svg",
        brandColor: "#FFB300",
        headline: "Boxx Era Fitness Studio Is A New Workout Space In Hauz Khas",
        excerpt: "A fresh perspective on fitness arrives in Hauz Khas, offering a unique blend of intensity and wellness.",
        year: "2023",
        link: "https://www.whatshot.in/amp/delhi-ncr/boxx-era-fitness-studio-is-a-new-workout-space-in-hauz-khas-v-158230",
        category: "HIGHLIGHTS",
        image: "https://im.whatshot.in/img/2020/Jan/media-image-1-1579596255.jpg",
    },
    {
        id: "3",
        source: "Mid-Day",
        sourceLogo: "https://static.mid-day.com/assets/images/logo.png",
        brandColor: "#000000",
        headline: "The Rise of Boxx Era: Breaking Barriers In The World Of Fitness",
        excerpt: "How Boxx Era is redefining the fitness landscape with its holistic and high-performance approach.",
        year: "2023",
        link: "https://www.mid-day.com/amp/brand-media/article/the-rise-of-boxx-era-breaking-barriers-in-the-world-of-fitness-23264290",
        category: "HIGHLIGHTS",
        image: "https://imgmediagumlet.lbb.in/media/2019/10/5da9c53eecc80c1886aa8194_1571407166395.jpg",
    },
    {
        id: "4",
        source: "So City",
        sourceLogo: "https://so.city/_nuxt/img/so_delhi_logo_new_text.3400bed.png",
        brandColor: "#000000",
        headline: "This Posh New Gym In Hauz Khas Offers Dark Room Training & More",
        excerpt: "Discover the elite training experience that everyone in Delhi is talking about.",
        year: "2023",
        link: "https://so.city/amp/delhi/this-posh-new-gym-in-hauz-khas-offers-dark-room-training-more-for-the-fitness-freak-in-you.html",
        category: "HIGHLIGHTS",
        image: "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1564050878/box-era-1.jpg",
    },
    {
        id: "5",
        source: "LockerRoom",
        sourceLogo: "https://lockerroom.in/assets/template/images/logo.png",
        brandColor: "#000000",
        headline: "Boxx Era COVID Drive Delhi: Serving The Community",
        excerpt: "Beyond fitness, Boxx Era stands with the community during challenging times.",
        year: "2021",
        link: "https://lockerroom.in/blog/view/Boxx-Era-COVID-Drive-Delhi",
        category: "COMMUNITY",
        image: "https://lockerroom.in/uploads/blog/93b07abbb9cc92f1137b90d85ce003c1.jpg",
    },
    {
        id: "6",
        source: "Zee News",
        sourceLogo: "https://english.cdn.zeenews.com/static/public/updated_logos/english.svg",
        brandColor: "#DA2129",
        headline: "Boxx Era: The Ultimate Fitness Studio For Holistic Wellness",
        excerpt: "A deep dive into why Boxx Era is the go-to destination for those seeking a total transformation.",
        year: "2023",
        link: "https://zeenews.india.com/india/boxx-era-the-ultimate-fitness-studio-for-holistic-wellness-2583014.html/amp",
        category: "HIGHLIGHTS",
        image: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_500x286/public/2023/03/13/1166571-boxx-era.jpg",
    },
    {
        id: "9",
        source: "Medium",
        sourceLogo: "/media/medium_logo.svg",
        brandColor: "#1A8917",
        headline: "Finding Strength In The Storm: How Boxx Era Transforms Rainy Days",
        excerpt: "Personal stories of growth and resilience from the members of the Boxx Era community.",
        year: "2023",
        link: "https://medium.com/@jyotika0507/finding-strength-in-the-storm-boxx-era-transformed-rainy-day-into-empowering-moments-of-growth-29482641db4",
        category: "TRANSFORMATION",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*8yM_ddyQymDOinmox2oYZw.jpeg",
    },
];




