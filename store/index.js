import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    // DMS
    {
      id: 'dms',
      title: "Document Management System",
      category: "Web Application",
      img: "images/dms/1-min.png",
      publishDate: "October, 2022",
      tag: "Web App Development",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://demo.dms.hrep.online",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/dms/1-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/dms/2-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/dms/3-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8931 5001",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "Vue 3",
        "Vite",
        "Pinia",
        "MeiliSearch",
        "Amazon Web Services",
        "RDS",
        "S3",
        "CloudFront",
        "SQS",
        "SNS",
        "SES",
        "Elastic Beanstalk",
        "CloudWatch",
        "CodeBuild",
        "CodePipeline",
        "Textract",
        "Comprehend",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "An automated web application solution for archiving, digitizing, organizing, and tagging of the documents.",
        },
        {
          id: uuidv4(),
          details: "Deployed to three (3) tenants/clients.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice, Relocatable, Multi-tenant, Opensource.",
        },
        {
          id: uuidv4(),
          details: "Roles: Solo Project, Full Stack Developer and Devops Engineer.",
        },
      ],
    },
    // HOUSEPASS
    {
      id: 'housepass',
      title: "HousePass",
      category: "Web Application",
      img: "images/housepass/housepass 00-min.png",
      publishDate: "September, 2022",
      tag: "Web App Development",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://housepass.hrep.online",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/housepass/housepass 00-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/housepass/housepass 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/housepass/housepass 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8931 5001",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "Vue 3",
        "Vuex",
        "Pusher",
        "Amazon Web Services",
        "EC2",
        "RDS",
        "S3",
        "CloudFront",
        "SQS",
        "SNS",
        "SES",
        "CloudWatch",
        "CodeBuild",
        "CodePipeline",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A web application used to check employee’s access control and covid-19 symptoms in the House of Representatives of the Philippines.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice.",
        },
        {
          id: uuidv4(),
          details: "Roles: Backend API Developer",
        },
      ],
    },
    // SONA 2022 Website
    {
      id: 'sona-2022',
      title: "SONA 2022 Website",
      category: "Website",
      img: "images/sona/sona 00-min.jpg",
      publishDate: "July, 2022",
      tag: "Website",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://sona2022.ph",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/sona/sona 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/sona/sona 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/sona/sona 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Website",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8931 5001",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Vue.js",
        "Vuex",
        "Amazon Web Services",
        "S3",
        "CloudFront",
        "CloudWatch",
        "CodeBuild",
        "CodePipeline",
        "Route 53",
        "Certificate Manager",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "An informative static website for the SONA 2022 and historical information on the previous SONAs.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Static Website.",
        },
        {
          id: uuidv4(),
          details: "Roles: Devops Engineer",
        },
      ],
    },
    // National Canvassing of Elections Application
    {
      id: 'national-canvassing',
      title: "National Canvassing of Elections",
      category: "Web Application",
      img: "images/canvass/canvass 00-min.png",
      publishDate: "May, 2022",
      tag: "Web App Development",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://canvass.halalan2022.info",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/canvass/canvass 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/canvass/canvass 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/canvass/canvass 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8931 5001",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "Vue.js",
        "Vuex",
        "Amazon Web Services",
        "Elastic Beanstalk",
        "RDS",
        "S3",
        "CloudFront",
        "CloudWatch",
        "CodeBuild",
        "CodePipeline",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "Also known as Halalan 2022.",
        },
        {
          id: uuidv4(),
          details: "A web application used to speed up and create a transparent counting of votes for the National Canvassing of Votes.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice.",
        },
        {
          id: uuidv4(),
          details: "Roles: Backend API Developer, Devops Engineer",
        },
      ],
    },
    // Infosite Website
    {
      id: 'halalan2022-infosite',
      title: "Halalan 2022 - Infosite",
      category: "Website",
      img: "images/infosite/infosite 00-min.png",
      publishDate: "May, 2022",
      tag: "Website",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://halalan2022.info",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/infosite/infosite 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/infosite/infosite 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/infosite/infosite 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Website",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8931 5001",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Vue.js",
        "Vuex",
        "Pusher",
        "Amazon Web Services",
        "S3",
        "CloudFront",
        "CloudWatch",
        "CodeBuild",
        "CodePipeline",
        "Route 53",
        "Certificate Manager",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A public facing website for the people around the world interested in the live updates on tallying of votes in the House of Representatives of the Philippines.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Static Website.",
        },
        {
          id: uuidv4(),
          details: "Roles: API Integration in Frontend Single Page Application and Devops Engineer",
        },
      ],
    },
    // CIRMS
    {
      id: 'cirms',
      title: "Cloud Inventory Retail Management",
      category: "Web Application",
      img: "images/cirms/cirms 00-min.png",
      publishDate: "April, 2018",
      tag: "Web App Development",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://demo.cirms.ph",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/cirms/cirms 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/cirms/cirms 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/cirms/cirms 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Nelsoft Systems Inc.",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "http://www.nelsoft.com.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8522 4930",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "Vue.js",
        "Amazon Web Services",
        "EC2",
        "Aurora",
        "S3",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A web system used by international and local clients for their inventory management system.",
        },
        {
          id: uuidv4(),
          details: "It is connected to multiple microservices and systems like P.O.S. system and Subscription (Online Payment) system.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice.",
        },
        {
          id: uuidv4(),
          details: "Roles: Full Stack Developer (Frontend and Backend)",
        },
      ],
    },
    // Subscription System
    {
      id: 'subscription-system',
      title: "Subscription System",
      category: "Web Application",
      img: "images/subscription/subscription 00-min.png",
      publishDate: "October, 2019",
      tag: "Web App Development",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://subscription.cirms.ph",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/subscription/subscription 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/subscription/subscription 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/subscription/subscription 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Nelsoft Systems Inc.",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "http://www.nelsoft.com.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8522 4930",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "Vue.js",
        "Vuex",
        "Amazon Web Services",
        "EC2",
        "Aurora",
        "S3",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A web system used by international and local clients to pay their subscription to our web application services such as CIRMS, P.O.S. system, Hardware Devices, Subscription, etc.",
        },
        {
          id: uuidv4(),
          details: "It is connected to multiple microservices and systems like P.O.S. system and Subscription (Online Payment) system.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice.",
        },
        {
          id: uuidv4(),
          details: "Frontend Developer",
        },
      ],
    },
    // Kolours Official Website
    {
      id: 'kolours-website',
      title: "Kolours Official Website",
      category: "Content Management System",
      img: "images/kolours/kolours 00-min.png",
      publishDate: "September, 2020",
      tag: "Content Management System",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "http://kolours.ph",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/kolours/kolours 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/kolours/kolours 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/kolours/kolours 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Xiklab Digital",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "CMS Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.xiklab.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 87576 9071",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "OctoberCMS",
        "Vue.js",
        "Vuex",
        "Tailwind",
        "Amazon Web Services",
        "EC2",
        "S3",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A web system used to help employees to create, manage, and modify content on a website without the need for specialized technical knowledge.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice.",
        },
        {
          id: uuidv4(),
          details: "Frontend Developer",
        },
      ],
    },
    // Hisense Official Website
    {
      id: 'hisense-website',
      title: "Hisense Official Website",
      category: "Content Management System",
      img: "images/hisense/hisense 00-min.png",
      publishDate: "December, 2020",
      tag: "Content Management System",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://global.hisense.com",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/hisense/hisense 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/hisense/hisense 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/hisense/hisense 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Xiklab Digital",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "CMS Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.xiklab.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 87576 9071",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "OctoberCMS",
        "Vue.js",
        "Vuex",
        "Tailwind",
        "Amazon Web Services",
        "EC2",
        "S3",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A web system used to help employees to create, manage, and modify content on a website without the need for specialized technical knowledge.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice.",
        },
        {
          id: uuidv4(),
          details: "Frontend Developer",
        },
      ],
    },
    // Hygienix Official Website
    {
      id: 'hygienix-website',
      title: "Hygienix Official Website",
      category: "Content Management System",
      img: "images/hygienix/hygienix 00-min.png",
      publishDate: "June, 2020",
      tag: "Content Management System",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "http://hygienix.ph",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/hygienix/hygienix 01-min.png",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/hygienix/hygienix 02-min.png",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/hygienix/hygienix 03-min.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Xiklab Digital",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "CMS Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.xiklab.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 87576 9071",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "OctoberCMS",
        "Vue.js",
        "Vuex",
        "Tailwind",
        "Amazon Web Services",
        "EC2",
        "S3",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A web system used to help employees to create, manage, and modify content on a website without the need for specialized technical knowledge.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Microservice.",
        },
        {
          id: uuidv4(),
          details: "Frontend Developer",
        },
      ],
    },
    // TrashVen
    {
      id: 'trashven',
      title: "TrashVen",
      category: "Internet of Things (IOT)",
      img: "images/trashven/trashven 00-min.jpeg",
      publishDate: "January, 2019",
      tag: "Internet of Things (IOT)",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://www.youtube.com/watch?v=nj8Vd6uIWPo",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/trashven/trashven 01-min.jpg",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/trashven/trashven 02-min.jpg",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/trashven/trashven 03-min.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Pamantasan ng Lungsod ng Maynila (PLM)",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Internet of Things (IOT)",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://plm.edu.ph",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 8643 2500",
        },
      ],
      technologies: [
        "Arduino",
        "C++",
        "HTML",
        "CSS",
        "PHP",
        "Javascript",
        "Apache Cordova",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A waste monitoring and segregation technology that properly sorts solid waste into plastic, metal, dry and wet.",
        },
        {
          id: uuidv4(),
          details: "Through a mobile app, users may be able to monitor the amount of wastes inside the bin.",
        },
        {
          id: uuidv4(),
          details: "Programmer and Mobile Developer",
        },
      ],
    },
    // Room Management System
    {
      id: 'room-management-system',
      title: "Room Management System",
      category: "Web Application",
      img: "images/rms/rms 00-min.webp",
      publishDate: "April, 2018",
      tag: "Web App Development",
      clientTitle: "About Client",
      objectivesTitle: "",
      objectivesDetails: "",
      detailsTitle: "Details",
      projectImages: [
        {
          id: uuidv4(),
          title: "Login Page",
          img: "../images/rms/rms 01-min.webp",
        },
        {
          id: uuidv4(),
          title: "Document Search List",
          img: "../images/rms/rms 02-min.webp",
        },
        {
          id: uuidv4(),
          title: "Dashboard Page",
          img: "../images/rms/rms 03-min.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Captivate Solutions",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://captivategrp.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+632 7971 3604",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Laravel",
        "JQuery",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "A web system used to monitor available rooms for the hotel. Users can book a hotel room through a website or kiosk machine. System is capable of scanning barcodes and printing thermal receipts.",
        },
        {
          id: uuidv4(),
          details: "Design Architecture: Monolithic.",
        },
        {
          id: uuidv4(),
          details: "Roles: Full Stack Developer (Frontend and Backend)",
        },
      ],
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "I am a Senior Software Engineer and Cloud Engineer based in Manila, PH. I 'm passionate about creating scalable web applications to handle rapid changes to workloads and user demands. I am also a 3x AWS Certified. AWS Certified Solutions Architect - Associate, AWS Certified Developer - Associate, AWS Certified Cloud Practitioner.",
    },
    {
      id: uuidv4(),
      bio: "I have a Bachelor of Science in Computer Studies - Major in Information Technology from Pamantasan ng Lungsod ng Maynila, and my primary focus and inspiration for my studies is Web Development. I also love the sides on both Hybrid Mobile Application Development and the innovations of Internet Of Things (IOT) Projects.",
    },
    {
      id: uuidv4(),
      bio: "I am constantly developing projects, experimenting with new technologies and techniques. And I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/johnrobertferrer",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/johnrobertferrer",
    },
    {
      id: uuidv4(),
      name: "Facebook",
      icon: "facebook",
      url: "https://facebook.com/jrsferrer",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
