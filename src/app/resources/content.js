import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Abhisek",
  lastName: "Panda",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/profile_avatar.png",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Panda-Abhisek/magic-portfolio",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abhisek-panda-",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:abhisekpanda123@outlook.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer and Designer</>,
  subline: (
    <>
      I'm Abhisek, a <InlineCode>FRESHER</InlineCode>, I develop efficient{" "}
      <br /> and scalable solution. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <div style={{ textAlign: "justify" }}>
        Abhisek is a software developer based in India, passionate about
        creating efficient and scalable solutions for real-world problems. His
        work spans web development, backend systems, and cloud technologies.
        With a knack for turning complex requirements into robust, maintainable
        code, Abhisek bridges the gap between innovation and execution, ensuring
        that technology serves both users and businesses effectively.
      </div>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Internships",
    experiences: [
      {
        company: "NEEVAS",
        timeframe: "2024 - Present",
        role: "Salesforce Developer",
        achievements: [
          <>
            Earned the Developer Super Set & Apex Specialist Superbadge and
            various Trailhead badges for expertise in automating processes and
            integrating systems.
          </>,
          <>
            Completed a comprehensive Salesforce Developer training program
            through Salesforce Trailhead.
          </>,

          <>
            Gained hands-on experience with Salesforce platform fundamentals,
            including data modeling, security, and automation.
          </>,

          <>
            Developed and customized Salesforce applications using Apex
            (Salesforce’s proprietary programming language) and Visualforce.
          </>,

          <>
            Created and managed custom objects, fields, and relationships to
            support business processes.
          </>,

          <>
            Designed and implemented workflows, process automation, and
            validation rules to streamline operations.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Qikut",
        timeframe: "Feb/2024 - May/2024",
        role: "Intern - Software Developer",
        achievements: [
          <>
            Spearheaded the UI design of the mobile application utilizing Figma,
            ensuring intuitive user experiences and visually appealing
            interfaces.
          </>,
          <>
            Developed frontend components and features leveraging JavaScript
            (JS) and TypeScript (TS) within the React framework, contributing to
            the enhancement of user interaction and interface responsiveness.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/qikut_progress.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Vignan Institute of Technology and Management",
        description: (
          <>
            <strong>Bachelor's of Technology</strong> in{" "}
            <strong>Computer Science & Engineering.</strong> <br />
            Biju Patnaik University of Technology, Rourkela, Odisha, IN <br />
            Nov 2021 - Jun 2025 <br />
            Grade: 8.1 CGPA
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/qikut_progress.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
