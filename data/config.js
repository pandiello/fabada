export const meta = {
  title: 'Diego 🚀 Senior Software Engineer | Fintech | Cloud | Backend',  
};

export const hero = {
  title: "Hi there! I'm Diego.",
  role: "🚀 Senior Software Engineer | Fintech | Cloud | Backend",
  description: "Hey, I'm Diego. I've been working as a software engineer for over 10 years, focusing on backend technologies, particularly in the fintech sector. My expertise includes high-performance payment processing systems, cloud infrastructure, and scalable architectures. Passionate about building robust, secure, and efficient solutions."
};

export const experience = {
  title: 'My experience',
  projects: [
    {
      title: 'GetPaid',
      role: 'Senior software engineer',
      description: "At GetPaid, I designed and maintained Azure-based cloud infrastructure ensuring PCI compliance, developed a traceability-first event-sourcing system, and built a high-performance payment gateway prototype for the Spanish and German markets.",
      dates: {
        from: '2023-03',
        to: 'present'
      },
      content: {
        companyInformation: {
          companyName: "GetPaid",
          industry: "Fintech / Payment Processing",
          companySize: "Startup (Early Stage)",
          location: "Spain & Germany",
          businessDescription: "A fintech startup focused on providing innovative payment solutions for the Spanish and German markets."
        },
        businessImpact: {
          keyAchievements: [
            "Developed a payment gateway prototype that successfully adapted to Spain and Germany.",
            "Implemented card payments covering 75% of Spanish transactions and SEPA Direct Debit covering 80% of the German market.",
            "Supported a client processing payments for over two years, reaching €200,000 in monthly transaction volumes."
          ],
          metricsAndResults: [
            "Contributed to securing a €6M seed funding round based on the prototype’s success.",
            "Ensured platform scalability and high availability through cloud infrastructure design.",
            "Improved traceability and transparency in financial transactions using an event-sourcing system."
          ]
        },
        technicalContributions: {
          keyProjects: [
            "Payment Gateway Prototype: Developed a high-performance unlicensed prototype supporting Spanish and German markets.",
            "Cloud Infrastructure for New Platform: Designed and maintained cloud architecture on Microsoft Azure, ensuring PCI compliance.",
            "Event-Sourcing & Actor-Based System: Created a scalable and traceable event-driven architecture with full system transparency."
          ],
          technologiesUsed: {
            languages: ["C#", ".NET"],
            frameworks: ["Orleans (Actor Model)", "Kubernetes (K8s)"],
            tools: ["Microsoft Azure", "Azure Key Vault", "SEPA Direct Debit", "PCI Compliance Standards"]
          },
          technicalHighlights: [
            "Designed and deployed multiple Kubernetes clusters for high availability and scalability.",
            "Built a traceability-focused event-sourcing system ensuring data immutability and concurrency handling.",
            "Implemented a secure payment processing infrastructure, adhering to PCI compliance requirements."
          ]
        },
        additionalNotes: [
          "Prototype adoption led to a successful seed funding round.",
          "Extensive experience in backend development, cloud infrastructure, and payment processing.",
          "Specialized in high-availability fintech solutions and distributed systems."
        ]
      },
      link: 'https://www.getpaid.io/',
      github: '',
      referee: {
        name: 'John Doe',
        position: 'CTO',
        company: 'Shift Technology',
        email: 'jdoe@jdoe.com',
        linkedin: 'https://www.linkedin.com/in/johndoe/'
      }
    },
    {
      title: 'Payvision',
      role: 'Senior software engineer',
      description: "At Payvision, I maintained a 24/7 card processing system handling 10K+ daily transactions, designed an HSM-based card encryption system for PCI compliance, and ensured high availability by resolving critical outages.",
      dates: {
        from: '2016-03',
        to: '2020-07'
      },
      content: {
        companyInformation: {
          companyName: "Payvision",
          industry: "Fintech / Payment Processing",
          companySize: "Mid-sized (Acquired by ING)",
          location: "Netherlands",
          businessDescription: "A global payment processing company specializing in cross-border e-commerce solutions."
        },
        businessImpact: {
          keyAchievements: [
            "Managed the core card payment processing system handling 90% of total transaction volume for over three years.",
            "Ensured a 24/7 payment infrastructure, processing up to 10,000 daily transactions.",
            "Successfully resolved two major outages caused by data center failures, maintaining business continuity."
          ],
          metricsAndResults: [
            "Enabled merchants to reduce cross-border fees and currency exchange costs through domestic acquiring.",
            "Maintained PCI compliance and adapted systems to evolving regulations from Mastercard, Visa, and ECB.",
            "Strengthened high-availability infrastructure, ensuring mission-critical reliability in payments."
          ]
        },
        technicalContributions: {
          keyProjects: [
            "Core Card Payment Processing System: Maintained and optimized the platform responsible for most transactions.",
            "On-Premise HSM-Based Encryption System: Designed and deployed a hardware security module (HSM) solution for PCI compliance.",
            "Regulatory Compliance Upgrades: Regularly adapted systems to comply with evolving financial regulations."
          ],
          technologiesUsed: {
            languages: ["C#", ".NET"],
            frameworks: ["PCI DSS Compliance", "HSM Encryption"],
            tools: ["On-Premise Data Centers", "High-Availability Payment Systems"]
          },
          technicalHighlights: [
            "Designed a secure card encryption system with key rotation, ensuring end-to-end PCI compliance.",
            "Optimized a mission-critical payment infrastructure, improving reliability and uptime.",
            "Led regulatory compliance adaptations, aligning with Mastercard, Visa, and European Central Bank (ECB) mandates."
          ]
        },
        additionalNotes: [
          "Payvision was acquired by ING, validating its success as a robust payment platform.",
          "Gained deep expertise in high-availability payment systems, security, and regulatory compliance.",
          "Specialized in on-premise fintech infrastructure and secure transaction processing."
        ]
      },
      link: '',
      github: '',
      referee: {
        name: 'John Doe',
        position: 'CTO',
        company: 'Shift Technology',
        email: 'jdoe@jdoe.com',
        linkedin: 'https://www.linkedin.com/in/johndoe/'
      }
    },
    {
      title: 'Shift Technology',
      role: 'Staff software engineer',
      description: "At Shift Technology, I optimized a SaaS product for large-scale insurance fraud detection, automated CI/CD pipelines, and enhanced system observability with standardized logging and monitoring.",
      dates: {
        from: '2022-01',
        to: '2023-02'
      },
      content: {
        companyInformation: {
          companyName: "Shift Technology",
          industry: "Insurtech / SaaS",
          companySize: "Mid-sized (Scale-up)",
          location: "France",
          businessDescription: "A leading provider of AI-driven solutions for insurance fraud detection and claims automation."
        },
        businessImpact: {
          keyAchievements: [
            "Enhanced software development practices to position the product as a top-tier SaaS solution.",
            "Optimized core fraud detection system, improving maintainability and performance.",
            "Integrated modern authentication and authorization mechanisms, enhancing security and user experience."
          ],
          metricsAndResults: [
            "Contributed to productizing the company’s machine learning capabilities after a €220M Series C funding round.",
            "Increased release cadence by 2.5x while maintaining bug rates and SLA compliance.",
            "Improved deployment efficiency through CI/CD automation, accelerating feature delivery."
          ]
        },
        technicalContributions: {
          keyProjects: [
            "CI/CD Automation: Implemented and optimized pipelines to enhance deployment speed and stability.",
            "Code Refactoring & Performance Optimization: Improved software maintainability and efficiency.",
            "Observability & Logging: Standardized logging systems using Prometheus and Grafana."
          ],
          technologiesUsed: {
            languages: ["C#", "Typescript"],
            frameworks: ["ASP .NET"],
            tools: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Auth0", "CI/CD (Jenkins, GitHub Actions)"]
          },
          technicalHighlights: [
            "Increased system observability with standardized logging and monitoring.",
            "Improved test coverage and deployment automation for better reliability.",
            "Strengthened security through authentication standardization with Auth0."
          ]
        },
        additionalNotes: [
          "Played a key role in transforming a specialized ML solution into a scalable SaaS platform.",
          "Extensive experience in automation, security, and observability in SaaS environments.",
          "Focused on improving scalability and engineering excellence in high-performance software development."
        ]
      },
      link: '',
      github: '',
      referee: {
        name: 'John Doe',
        position: 'CTO',
        company: 'Shift Technology',
        email: 'jdoe@jdoe.com',
        linkedin: 'https://www.linkedin.com/in/johndoe/'
      }
    },
    {
      title: 'Plain Concepts',
      role: 'Senior software engineer',
      description: "At Plain Concepts, I developed a self-service data management platform for legal case automation, designed a cloud-based modular monolith, and implemented a scalable query system using CQRS.",
      dates: {
        from: '2020-04',
        to: '2022-04'
      },
      content: {
        companyInformation: {
          companyName: "Plain Concepts",
          industry: "Consulting / Legal Tech / Cloud Solutions",
          companySize: "Mid-sized",
          location: "Spain",
          businessDescription: "A consulting firm specializing in Microsoft technologies and cloud-based solutions for enterprise clients."
        },
        businessImpact: {
          keyAchievements: [
            "Developed a self-service data management platform for Slater and Gordon, a leading UK law firm.",
            "Enabled automation of claim evaluations, significantly reducing costs in mass litigation cases.",
            "Contributed to handling over five high-profile lawsuits, including Mercedes and Volkswagen emissions cases."
          ],
          metricsAndResults: [
            "Streamlined legal case evaluations, reducing manual effort and operational costs.",
            "Improved scalability and performance with a cloud-based modular monolith.",
            "Enhanced data insights and analytics through a Databricks-based data lake."
          ]
        },
        technicalContributions: {
          keyProjects: [
            "Self-Service Data Management Platform: Designed and deployed a scalable system for legal case automation.",
            "Cloud-Based Architecture: Developed an Azure-hosted modular monolith to enable feature customization per case.",
            "Scalable & High-Performance Query System: Implemented CQRS to optimize queries and improve performance."
          ],
          technologiesUsed: {
            languages: ["C#", ".NET"],
            frameworks: ["ASP .NET", "MediatR", "EF"],
            tools: ["Microsoft Azure", "Azure Container Apps", "SQL Server on Azure", "Databricks"]
          },
          technicalHighlights: [
            "Built a highly modular system enabling flexible feature customization (AuthN, emails, integrations).",
            "Improved structured data management with SQL Server on Azure.",
            "Enhanced data analytics and insights using a Databricks-powered data lake."
          ]
        },
        additionalNotes: [
          "Helped automate high-profile legal cases, reducing operational costs in mass litigation.",
          "Deepened expertise in cloud-based platforms, automation, and legal tech solutions.",
          "Specialized in scalable, high-impact applications for enterprise clients."
        ]
      },
      link: '',
      github: '',
      referee: {
        name: 'John Doe',
        position: 'CTO',
        company: 'Shift Technology',
        email: 'jdoe@jdoe.com',
        linkedin: 'https://www.linkedin.com/in/johndoe/'
      }
    }
  ]
};

export const stack = {
  title: 'My Stack',
  stack: [
    '.NET',
    'C#',
    'ASP.NET Core',
    'Azure',
    'Kubernetes',
    'Cosmos DB',
    'Key Vault',
    'Service Bus',
    'Event Sourcing',
    'CQRS',
    'Orleans',
    'Docker',
    'GitHub',
  ]
};

export const education = {
  title: 'My Education',
  desc: 'I have a Bachelor of Telecommunication Technologies and Services Engineering from the University of Oviedo.',
  hints: [{
    title: 'University of Oviedo',
    description: 'Bachelor of Telecommunication Technologies and Services Engineering',
    date: '2010 - 2014',
    referee: {
      name: 'John Doe',
      position: 'Professor',
      company: 'University of Oviedo',
      email: '',
      linkedin: ''
  }}]
};

export const contact = {
  title: 'Contact Me',
  email: 'diegofernandezpandiello@gmail.com', 
  github: 'https://github.com/pandiello',
  linkedin: 'https://www.linkedin.com/in/diegofernandezpandiello/' // Replace with your actual LinkedIn profile
};