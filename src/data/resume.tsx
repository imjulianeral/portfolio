import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Nestjs } from "@/components/ui/svgs/nestjs";
import { Aws } from "@/components/ui/svgs/aws";
import { Kafka } from "@/components/ui/svgs/kafka";

export const DATA = {
  name: "Jorge Julián Acero Lomelí",
  displayName: "Julián",
  url: "https://imjulian.com",
  location: "Aguascalientes, México",
  locationLink: "https://www.google.com/maps/place/Aguascalientes",
  description:
    "Senior Software Engineer. I architect real-time systems, from earthquake alerts for 2 million users to surgical platforms for Johnson & Johnson.",
  summary:
    "Results-driven Senior Software Engineer with 8 years of experience architecting highly scalable, real-time systems, including [automated earthquake alerts supporting 2 million users](/#work) and digital surgical platforms for Johnson & Johnson. Proven expertise in AWS, TypeScript, React, and modern cloud architectures, with a track record of delivering innovative solutions such as AI-driven IoT troubleshooting, the world's first real-time microquake detection system, Kafka-based medical video processing, and a 3D lung model viewer for surgical planning with VTK.js.",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Nest.js", icon: Nestjs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "AWS", icon: Aws },
    { name: "Kafka", icon: Kafka },
    { name: "C#", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/resume.pdf",
      icon: FileTextIcon,
      label: "Download resume",
      download: "Julián Acero Senior Engineer - Resume.pdf",
    },
  ],
  contact: {
    email: "hi@imjulian.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imjulian",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hi@imjulian.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      title: "EPAM Systems",
      dates: "Mar 2026 - Present",
      location: "Senior Software Engineer · Aguascalientes, México",
      description:
        "- Add support for bronchoscopy and urology procedures on Johnson & Johnson's Polyphonic platform.\n- Implement a Kafka event-processing microservice to manage videos across multiple procedures.\n- Create a 3D model viewer with VTK.js that reads VTP files, allowing doctors to visualize a patient's lungs and the planned surgical path with its target.\n- Technologies used: Next.js, Nest.js, Node.js, React, TypeORM, PostgreSQL, Kafka, Kiro, and AWS.",
      image: "/epam.png",
      links: [
        {
          title: "Website",
          href: "https://www.epam.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "SkyAlert",
      dates: "Nov 2021 - Mar 2026",
      location: "Full Stack Software Engineer · Aguascalientes, México",
      description:
        "- Create a system that automatically generates earthquake reports in seconds, which sends valuable data for the alerts team and the public. This system successfully handles important earthquakes in México and publishes the data to the public through **the mobile app which has 2 million users** (eg. Sep 19, 2022, Jan 12, 2025, and **Jan 2, 2026**). It is built with AWS Lambda, Node.js, TypeScript, React, React Query, Tailwind CSS, SNS, SQS, Kinesis, API Gateway, and DynamoDB.\n- Build an AI agent to troubleshoot IoT devices connectivity problems. Built with Python, strands, and AWS Bedrock.\n- Implement new sensors with NVIDIA Jetsons and AWS Greengrass which detect earthquakes using local AI models and Python.\n- Use IaC tools like AWS CDK and SST to define infra and deploy every project described here to AWS.\n- Build a system that is able to detect **microquakes** in real-time located in CDMX, this is the first system in the world to achieve this. This system is built with Golang, AWS Fargate, MQTT, IoT Core, Cloudwatch Alarms, SNS, Lambda URLs, SQLite, and DynamoDB.\n- Maintain legacy systems working and connect them with the new ones through web scraping using Playwright.\n- Maintain the main system and algorithm of **earthquake confirmation** which is built with TypeScript and JavaScript by using Kiro, TDD, and CI/CD pipelines.\n- Improved sensor network connectivity from 70% to 98% stable through the development of internal tooling.\n- Cut database costs by up to **90%** by migrating from AWS Aurora to DynamoDB.\n- Involved in the app's rating improvement from 3.8 to 4.6 stars on the App Store and Google Play.\n- Build a weather dashboard using data provided by rain sensors and download NOAA data to generate forecast and satellite maps. This was built with Grafana, AWS Lambda, Node.js, TypeScript, Nest.js, React, React Query, Tailwind CSS, and PostgreSQL.",
      image: "/skyalert.png",
      links: [
        {
          title: "Website",
          href: "https://skyalert.mx",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Código con Juan",
      dates: "Jul 2020 - Nov 2021",
      location: "Teacher Assistant · Aguascalientes, México",
      description:
        "- Provided rapid responses to student inquiries on Udemy, documenting ideas for future courses.\n- Be aware of the breaking changes in libraries, frameworks, and packages that are used in the courses, which are about TypeScript, React, React Native, Tailwind CSS, Node, GraphQL, MongoDB, Laravel, and Cypress.",
      image: "/codigoconjuan.png",
      links: [
        {
          title: "Website",
          href: "https://codigoconjuan.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "MKF Merkamorfosis",
      dates: "Feb 2021 - Jul 2021",
      location: "Full Stack Software Engineer · Aguascalientes, México",
      description:
        "- Developed dynamic organization charts, which is built with Next.js, TypeScript, Firebase, Material UI and D3.js.\n- Created a web app to manage political campaigns, which is built with Next.js, TypeScript, Firebase, and MUI.\n- Enhanced communication within MKF by organizing employees into departments, reducing response times.",
      image: "/mkf.png",
      links: [
        {
          title: "X",
          href: "https://x.com/MKFMX",
          icon: <Icons.x className="size-3" />,
        },
      ],
    },
    {
      title: "MANCOMM",
      dates: "Oct 2020 - Dec 2020",
      location: "Full Stack Software Engineer · Aguascalientes, México",
      description:
        "- Replace SendOwl with Stripe for payment processing.\n- The technologies used for this role were: Next.js, Node.js, Tailwind CSS, Stripe, C#, and SQL Server.",
      image: "/mancomm.png",
      links: [
        {
          title: "Website",
          href: "https://www.mancomm.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "DCM Aguascalientes",
      dates: "Nov 2019 - Dec 2019",
      location: "Full Stack Software Engineer · Aguascalientes, México",
      description:
        "- Developed a project management web application with role-based access control (RBAC) and real-time data. This app is built with MongoDB, Express.js, React.js, Node.js, GraphQL and Heroku.\n- Improve the company's project management system by saving historical data about the deadlines and materials.",
      image: "",
      links: [],
    },
    {
      title: "Softtek",
      dates: "Jul 2019 - Jul 2020",
      location: "Power BI Data Analyst & Support · Aguascalientes, México",
      description:
        "- Analyzed sales data for Burger King, Tim Hortons, and Popeyes using Power BI.\n- Managed custom modules for SAP.",
      image: "/softtek.svg",
      links: [
        {
          title: "Website",
          href: "https://www.softtek.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "RAEE Company",
      dates: "Jan 2019 - Apr 2019",
      location: "Full Stack Software Engineer · Aguascalientes, México",
      description:
        "- Create a web app to control the access to the company's warehouse.\n- Improve the company's access control to the warehouse by registering the employees and trucks who went inside the warehouse.\n- The technologies used for this position were: MongoDB, Node.js, React.js, Express.js, REST and Heroku.",
      image: "",
      links: [],
    },
  ],
  education: [
    {
      school: "Universidad Politécnica de Aguascalientes",
      href: "https://www.upa.edu.mx/",
      degree: "Bachelor in Systems Engineering",
      logoUrl: "/upa.png",
      start: "Sep 2016",
      end: "Apr 2020",
    },
  ],
} as const;
