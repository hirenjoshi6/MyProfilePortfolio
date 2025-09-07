/* Change this file to get your personal Porfolio */

const selfIntroduction = {
  greeting: "Hello There! 👋 I'm",
  fullname: "Hiren Joshi",
  DevelopmentStack: [
    "Mobile Architect",
    "iOS & Android Developer",
    "Flutter & React Native Specialist",
    "Frontend Architect",
    "Fullstack Developer",
    "Team Lead & Mentor",
    ],
  // myself: "Hello, I'm Hiren Joshi. A highly skilled and experienced software engineer with a Master's degree from Parul University (CGPA 7.5) and a Bachelor's degree from Maharaja Krishnakumarsinhji Bhavnagar University (70% aggregate). With 15 years and 9 months of experience in software engineering, my expertise spans across multiple domains and technologies, with a primary focus on mobile app development, and with technical Architect and Mobile Lead with exceptional organizational skills, attention to detail, and a strong work ethic.",
  // shortworks: "Within the 15 years and 9 months of my software development experience, I have developed a very good focus on the mobile application section, which is as follows: I have worked for 10 years in iOS development with Objective-C, Swift, and SwiftUI to create high-quality and user-friendly applications. I have also worked for 5 years in Android development with Java and Kotlin, developing stable and efficient applications. I have also worked for 5-6 years in cross-platform development using React Native and Flutter. I have also worked for 7 years in Team Lead and Architect level implementation."
  myself:
    "I’m Hiren Joshi, a Mobile Architect and Software Engineer with 15+ years of experience building high-impact applications across iOS, Android, Flutter, and React Native. I specialize in designing scalable architectures, leading engineering teams, and delivering user-friendly solutions that serve global audiences. My expertise spans healthcare, gaming, and enterprise domains, with a strong track record of improving product performance, reducing delivery times, and scaling apps to millions of users.",
  shortworks:
    "Over the last 15+ years, I’ve gained deep expertise in mobile and cross-platform development. I’ve spent 10 years in iOS development (Objective-C, Swift, SwiftUI), 5 years in Android (Kotlin, Java), and 5+ years with Flutter and React Native. As a Team Lead and Architect for 7+ years, I’ve guided teams of up to 24 engineers, optimized delivery pipelines, and ensured apps met both technical and business goals.",
};

const aboutMe = {
  title: "Know Who I'M & Professional Skillset",
  // details: "Hi Everyone, I am Hiren Joshi from Gujarat, India. I am associated with the Reliable Group Paragon LLP / AskMia Global Pvt. Ltd.",
  // otherdetails: "Apart from coding, some other activities that I love to do!: Playing Games, Writing Tech Blogs, Travelling, Watching Movies and Series. Strive to build things that make a difference! -- Hiren"
  details:
    "Hi, I’m Hiren Joshi from Gujarat, India. Currently, I work with Reliable Group Paragon LLP / AskMia Global Pvt. Ltd. as a Frontend Architect and Software Developer. I focus on creating secure, performant, and scalable solutions across mobile and web platforms, while also mentoring teams and collaborating closely with stakeholders.",
  otherdetails:
    "Beyond coding, I enjoy gaming, writing tech blogs, traveling, and exploring movies & series. These interests fuel my curiosity, creativity, and problem-solving mindset. Above all, I strive to build technology that makes a real difference. — Hiren",
};

// Experience Page
const experience = {
    title: "Fullstack Software Developer",
    description: 'Experienced <i><u><b className="purple">Mobile Architect and Team Lead</b></i></u> with a proven record of building scalable apps and leading teams across iOS, Android, Flutter, and React Native. Skilled in REST APIs, GraphQL, and cloud-native backends. Passionate about continuous learning and recently completed a <i><u><b className="purple">Post Graduate Program in Artificial Intelligence and Machine Learning</b></i></u>, applying AI/ML concepts to enhance mobile solutions. I’m looking to contribute as a <i><u><b className="purple">Mobile Architect, Engineering Leader, or Senior Developer</b></i></u>, delivering impactful apps that delight users and drive business growth.</p>',
    experiences: [
      {
            title: "FE Architect & Software Developer",
            company: "Reliable Group Paragon LLP / AskMia Global Pvt. Ltd.",
            company_url: "https://www.reliablegroup.com/",
            company_url2: "https://www.askmia.com/",
            logo_path: "freelancer_logo.png",
            duration: "Feb 2025 - Present",
            isPresent: true,
            location: "Remote Virtual Place work",
            description: [
                "Working as a contract FE Architect & Software Developer with Reliable Group Paragon LLP / AskMia Global Pvt. Ltd.",
                "Specializing in mobile app development(React Native), web development, AI/ML Engineer and custom software solutions using a variety of technologies including React Native, Flutter, iOS (Swift/Objective-C), Android (Kotlin/Java), and backend technologies.",
                "Collaborating closely with clients and stack holders to understand their requirements, provide regular updates, and ensure timely delivery of projects.",
                "Continuously learning and adapting to new technologies and industry trends to provide the best possible solutions to clients."
            ],
      },
          {
            title: "Principle Mobile Engineer",
            company: "Itcom Innovation Gaming Group",
            company_url: "",
            logo_path: "legato_logo.png",
            duration: "Jan 2023 To Jan 2025",
            isPresent: false,
            location: "Metro Manila, Philippines",
            description: [
                "Led a team of 20 engineers in the life-cycle development of mobile games for Android and iOS platforms.",
                "Standardized code using Agile methods, applied best practices, and introduced code analysis, speeding up project delivery and reducing defect rates.",
                "Managed the integration of third party SDKs, ensured compliance with platform guidelines and maintained high application performance.",
                "Managed all aspects of the development life-cycle, including requirements gathering, architecture design, coding, testing, and implementation."
            ],
          },
          {
            title: "Mobile Team Lead",
            company: "My-Onsite Healthcare India Pvt. Ltd.",
            company_url: "https://myonsitehealthcare.com/",
            logo_path: "muffito_logo.png",
            duration: "March 2020 To Jan 2023",
            isPresent: false,
            location: "Vadodara, Gujarat, India And Sarasota, Florida",
            description: [
                "Parent-Child Details: I Was working as Mobile Team Lead at Indralok Technology Pvt. Ltd. during March 2020 till Feb 2022.",
                "Guided a team of 15 to developed and deployed scalable mobile solutions in native iOS, Android, React Native, and Flutter environments, which touched 100+ users",
                "Implemented a new system, ensured full guidance to all team members, improved product quality and reduced time to market.",
                "Developed robust API integration mechanisms for simple data exchange between mobile applications and backend systems.",
                "Using an agile scrum methodology improved the speed of the development team and reduced technical costs."
            ],
          },
          {
            title: "Mobile Team Lead",
            company: "Vetron IT & Consultancy Services",
            company_url: "https://vetron.in/",
            logo_path: "legato_logo.png",
            isPresent: false,
            duration: "May 2018 To March 2020",
            location: "Surat, Gujarat, India",
            description: [
                "Directed a team of 24 to develop and deploy enterprise mobile applications, driving customer satisfaction and loyalty.",
                "Conducted workshops on increasing team skills, assigned more challenging tasks, and mentored junior members, increasing team cohesion and project delivery.",
                "Developed detailed documentation regarding project requirements, construction and planning.",
                "Collaborated with product owners and stakeholders to determine project scope and deliverables."
            ],
          },
          {
            title: "Senior iOS Developer",
            company: "Rawalwasia Group & Textlise",
            company_url: "https://rawalwasia.in/",
            logo_path: "freecopy_logo.png",
            isPresent: false,
            duration: "Jan 2017 To April 2018",
            location: "Surat, Gujarat, India",
            description: [
                "Developed and maintained native iOS applications to ensure high performance and user satisfaction.",
                "Swift, Objective-C, and SwiftUI were used to create an efficient and effective solution.",
                "APIs were integrated to communicate with back-end services and data platforms.", 
                "Provided technical leadership on projects and mentored juniors."
            ],
            color: "#fc1f20",
          },
          {
            title: "Senior iOS Developer",
            company: "Onus Info Tech",
            company_url: "https://onusinfotech.com/",
            logo_path: "muffito_logo.png",
            duration: "September 2014 To Jan 2017",
            isPresent: false,
            location: "Surat, Gujarat, India",
            description: [
                "Designed and enhanced user interfaces for mobile apps using design patterns to enhance user experience.",
                "Reviewed code and optimized application performance, resulting in greater user retention.",
                "Identify opportunities to improve process through the use of automation tools and techniques.",
                "Developed user interface modules and worked with UI/UX designers."
            ],
          },
          {
            title: "Software Engineer",
            company: "Devlon/Grip Info Tech",
            company_url: "https://about.me/devlon.infotech",
            logo_path: "muffito_logo.png",
            isPresent: false,
            duration: "Nov 2011 To Sep 2014",
            location: "Remote Virtual Place work",
            description: [
                "Android and PHP applications were developed, complementing the company’s technology portfolio.",
                "Assisted in product development, development, implementation, and testing activities.",
                "Worked with multidisciplinary teams to deliver high quality solutions.",
                "Codes and recycling were developed while adhering to regulatory standards."
            ],
          },
    ],
};
  
export {
  experience,
  selfIntroduction,
  aboutMe,
};
  