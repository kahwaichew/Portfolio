import { SkillCategory, Project, DesignItem, ResearchItem } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile',
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'App Store Deploy']
  },
  {
    id: 'web-backend',
    title: 'Web & Backend',
    tags: ['Django', 'Python', 'React', 'JavaScript', 'REST API']
  },
  {
    id: 'data-infra',
    title: 'Data & Infra',
    tags: ['MySQL', 'Firebase', 'Git', '.NET', 'Offline Sync']
  },
  {
    id: 'design-tools',
    title: 'Design & Tools',
    tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Adobe Illustrator']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'retailaim',
    title: 'RetailAIM+',
    tag: 'RETAIL WORKFORCE MANAGEMENT MOBILE APP',
    description: 'A mobile platform for retailers to manage merchandiser and promoter daily tasks — outlet assignments, task lists, AI-powered product scanning, clock-in/out, and leave management.',
    users: 'Merchandisers & Promoters in retail',
    tech: ['Flutter', '.NET', 'REST API', 'Figma'],
    role: 'Designed & implemented proof of delivery system, order picking system, leave module, testing, App Store deployment',
    highlight: 'Successfully migrated ALL features from legacy ionic app to Flutter — zero feature loss',
    bannerColor: 'bg-[#e5ecfb]'
  },
  {
    id: 'r2home',
    title: 'R2Home',
    tag: 'NEIGHBOURHOOD DELIVERY APP CONNECTING STORES & CUSTOMERS',
    description: 'A hyper-local delivery ecosystem where promoters update product listings and prices daily inside RetailAIM+, and customers browse & buy from nearby stores via the R2Home consumer app.',
    users: 'Promoters (RetailAIM+) & Customers (R2Home app)',
    tech: ['Flutter', '.NET', 'REST API', 'App Store'],
    role: 'Designed the full R2Home module in RetailAIM+, implemented promoter-side testing, training & deployment',
    highlight: 'Launched in April — already live and adopted by multiple retailers',
    bannerColor: 'bg-[#fbe8e9]'
  },
  {
    id: 'jade2',
    title: 'Jade 2.0',
    tag: 'CROSS-PLATFORM POS SYSTEM FOR F&B',
    description: 'A full-featured POS system running on traditional countertop machines, iPads, and handheld Android devices — including server-side order kiosk, kitchen TV, receipt printing, and payment terminal.',
    users: 'F&B restaurant owners & staff',
    tech: ['Flutter', 'Java', 'Android', 'Dual Screen'],
    role: 'Coordinated with hardware suppliers, wrote Flutter frontend, Java bridge for Android POS compatibility',
    highlight: 'Made app responsive across all screen sizes & enabled dual-screen POS display support',
    bannerColor: 'bg-[#fffde6]'
  },
  {
    id: 'gotani',
    title: 'GoTani',
    tag: 'SMART FARMING PLATFORM WITH AI & IOT',
    description: 'A comprehensive smart farming platform integrating drone mapping, AI tree recognition, hyperspectral imaging, and IoT sensors to monitor farm conditions and automate irrigation.',
    users: 'Farm owners & agricultural managers',
    tech: ['Django', 'Python', 'Flutter', 'IoT'],
    role: 'UI/UX design for all new features & revamp, Django APIs, mobile & web development, auto irrigation system',
    highlight: 'Built informative farm & user dashboards from raw sensor data & improved UX across web & mobile',
    bannerColor: 'bg-[#e1faf0]'
  }
];

export const DESIGN_SHOWCASE: DesignItem[] = [
  {
    id: 'fitnect',
    category: 'MOBILE APP',
    title: 'FitNect',
    description: 'A fitness marketplace app for booking personal trainers and coaches, scheduling workouts, and tracking fitness journeys with an activity log.',
    tags: ['Figma', 'Mobile', 'Dark Theme', 'Marketplace'],
    imageSrc: '/src/assets/images/fitnect.png',
    imageLeft: true
  },
  {
    id: 'mrtoy',
    category: 'MOBILE APP',
    title: 'Mr.Toy',
    description: 'A loyalty app for Mr.Toy retail chain — enabling customers to collect points, track membership tiers, redeem vouchers, and browse personalized promos.',
    tags: ['Figma', 'Mobile', 'Loyalty', 'CRM'],
    imageSrc: '/src/assets/images/mrtoy.png',
    imageLeft: false
  },
  {
    id: 'gotani-design',
    category: 'WEB APP',
    title: 'GoTani',
    description: 'A PaaS smart farming platform — farm dashboard, drone mapping, IoT sensor monitoring, task management, and tree health analytics for remote farm management.',
    tags: ['Figma', 'Web', 'Mobile', 'Dashboard', 'IoT'],
    imageSrc: '/src/assets/images/gotani.png',
    imageLeft: true
  }
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'pub1',
    title: 'Email Plugin Suite for k-Resilient Identity-Based Encryption and Searchable Encryption',
    publishedIn: 'PUBLISHED IN CITIC 2022 PROCEEDINGS',
    tags: ['Cryptography', 'Public Key Encryption'],
    url: 'https://www.atlantis-press.com/proceedings/citic-22/125980650'
  }
];
