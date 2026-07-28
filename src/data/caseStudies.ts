import { LucideIcon, Server, ShieldCheck, HeartPulse, GraduationCap, Cloud, Wifi, Briefcase } from "lucide-react";

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  description: string;
  icon: LucideIcon;
  results: {
    value: string;
    label: string;
  }[];
  quote?: {
    text: string;
    author: string;
  };
  overview: string;
  challenges: string[];
  solution: string[];
  impact: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "rbs-connectivity",
    title: "Internet Connectivity Challenges at RBS",
    client: "Rockwell Business School",
    description: "Rockwell Business School was struggling with frequent internet dropouts, which severely disrupted online exams and smart classroom sessions.",
    icon: Wifi,
    results: [
      { value: "99.9%", label: "Uptime Achieved" },
      { value: "1,000+", label: "Users Supported" },
      { value: "0", label: "Complaints" },
    ],
    overview: "Rockwell Business School's existing network infrastructure was severely outdated, leading to frequent internet dropouts and bandwidth bottlenecks that disrupted both administrative operations and smart classroom learning.",
    challenges: [
      "Frequent dropouts disrupting online exams and smart classroom sessions.",
      "Legacy hardware unable to support 1,000+ concurrent connections.",
      "Lack of centralized network management and visibility.",
    ],
    solution: [
      "Complete network redesign utilizing enterprise-grade routing and switching.",
      "Implementation of scalable Cloudbox99 managed Wi-Fi across the campus.",
      "Continuous 24/7 proactive monitoring through our SOC."
    ],
    impact: [
      "Achieved 99.9% network uptime immediately after deployment.",
      "Successfully supported 1,000+ simultaneous connections without degradation.",
      "Reduced IT complaints to zero within the first two weeks."
    ]
  },
  {
    id: "rbs-managed-services",
    title: "End-to-End IT Managed Services for RBS",
    client: "Rockwell Business School",
    description: "After fixing connectivity, RBS needed an ongoing partner to manage their entire IT stack, from endpoint security to server maintenance.",
    icon: Briefcase,
    results: [
      { value: "24/7", label: "Monitoring" },
      { value: "40%", label: "IT Cost Reduction" },
      { value: "100%", label: "Compliance" },
    ],
    overview: "To ensure their modernized infrastructure remained optimal, RBS partnered with Cloudbox99 for end-to-end IT Managed Services, offloading their day-to-day IT operations.",
    challenges: [
      "Internal IT team was overwhelmed with basic helpdesk tickets.",
      "No proactive maintenance plan for critical servers.",
      "Lack of standard endpoint security across staff and student devices.",
    ],
    solution: [
      "Deployed comprehensive Managed IT Services with SLA-backed response times.",
      "Installed Endpoint Detection and Response (EDR) on all faculty devices.",
      "Automated routine server patching and backups."
    ],
    impact: [
      "Freed internal staff to focus on educational technology integration.",
      "Reduced overall IT operational costs by 40%.",
      "Achieved 100% compliance with educational data protection standards."
    ]
  },
  {
    id: "educational-erp",
    title: "Using CloudBox99 to Update Educational ERP and Security",
    client: "Prestigious Educational Institute",
    description: "An antiquated on-premises ERP system caused significant performance issues. We moved them to a secure, scalable cloud ERP.",
    icon: GraduationCap,
    results: [
      { value: "60%", label: "Cost Reduction" },
      { value: "100%", label: "Data Secured" },
      { value: "< 1s", label: "Query Time" },
    ],
    overview: "A prestigious multidisciplinary educational institution encountered significant performance and security issues with its legacy ERP, hindering student registration and grading workflows.",
    challenges: [
      "Antiquated on-premises storage failing to meet rising demand.",
      "Significant performance bottlenecks during peak registration periods.",
      "Lack of robust disaster recovery and automated backups.",
    ],
    solution: [
      "Migrated legacy ERP to secure Cloudbox99 Virtual Machines.",
      "Deployed AES-256 encryption and established regular security audits.",
      "Set up automated disaster recovery with cross-region backups."
    ],
    impact: [
      "Achieved a 99.98% data protection and uptime rate.",
      "Reduced ERP query latency to under 1 second.",
      "Eliminated all downtime during the critical student registration week."
    ]
  },
  {
    id: "cloud-storage",
    title: "Scaling Smarter: Secure and Scalable Cloud Storage Solutions",
    client: "Enterprise Tech Corp",
    description: "We provided a massive cloud storage solution designed for secure, scalable, and user-friendly data services.",
    icon: Cloud,
    results: [
      { value: "3x", label: "Faster Retrieval" },
      { value: "99.99%", label: "Data Protection" },
      { value: "50%", label: "Productivity Boost" },
    ],
    overview: "This case study explores the growth and market impact of Cloudbox99's cloud storage solution designed to provide enterprises with secure, scalable, and user-friendly data services.",
    challenges: [
      "High costs associated with maintaining physical storage hardware.",
      "Slow file retrieval speeds impacting global teams.",
      "Compliance risks due to scattered, unencrypted local data.",
    ],
    solution: [
      "Implemented a microservices framework using highly scalable object storage.",
      "Integrated CDN for accelerated file retrieval globally.",
      "Provided integrated collaboration tools for enterprise-wide file sharing."
    ],
    impact: [
      "File retrieval speeds became 3x faster than their previous setup.",
      "Maintained a 99.99% data protection rate via AES-256 encryption.",
      "Improved team productivity by 50% via integrated file-sharing tools."
    ]
  },
  {
    id: "hospital-erp",
    title: "Improving Hospital ERP Performance & Security with CloudBox99 VMs",
    client: "Mid-Sized Hospital Network",
    description: "A mid-sized hospital sought to modernize its on-premises ERP system, which suffered from latency, downtime, and compliance gaps. We deployed a secure VM environment.",
    icon: HeartPulse,
    results: [
      { value: "< 2s", label: "ERP Load Time" },
      { value: "99.95%", label: "System Uptime" },
      { value: "100%", label: "HIPAA Compliant" },
    ],
    quote: {
      text: "Since migrating to Cloudbox99, our ERP system is lightning-fast and fully compliant. We've seen smoother operations and saved over 4.2 lakhs annually on server costs.",
      author: "CTO, Client Hospital Network",
    },
    overview: "A mid-sized hospital with multiple branches sought to modernize its ERP system, handling critical functions such as patient records, billing, staff scheduling, and inventory management.",
    challenges: [
      "Couldn't support 150+ concurrent users; led to billing delays.",
      "Expanding to new branches meant costly hardware upgrades.",
      "Required HIPAA compliance, encryption, and automated backups.",
      "IT team spent ~30 hours/month managing physical servers."
    ],
    solution: [
      "Deployed a customized Virtual Machine environment tailored for healthcare ERP.",
      "Implemented High-performance VMs optimized for fast data retrieval.",
      "Enabled Auto-scaling to support new branches in minutes.",
      "Ensured End-to-end HIPAA Compliance & AES-256 encryption."
    ],
    impact: [
      "ERP Load Time reduced from 8–10 seconds to under 2 seconds.",
      "System Uptime improved from 91% to 99.95%.",
      "IT Maintenance Hours dropped from 30 hours/month to just 6 hours/month.",
      "New branch deployments scaled in 48 hours via fast VM provisioning."
    ]
  }
];
