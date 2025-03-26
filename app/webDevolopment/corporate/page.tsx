"use client";

import {
  Building2,
  Network,
  Shield,
  Database,
  Cloud,
  Users,
  BarChart,
  Cpu,
  Globe,
  ClipboardCheck,
} from "lucide-react";

const corporateServices = [
  {
    id: 1,
    icon: <Building2 className="h-6 w-6 text-blue-600" />,
    title: "Enterprise Architecture",
    description: "Design and implement scalable corporate IT infrastructures.",
  },
  {
    id: 2,
    icon: <Network className="h-6 w-6 text-blue-600" />,
    title: "Network Solutions",
    description:
      "Secure corporate networks with enterprise-grade configurations.",
  },
  {
    id: 3,
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Cybersecurity",
    description: "End-to-end protection for corporate data and systems.",
  },
  {
    id: 4,
    icon: <Database className="h-6 w-6 text-blue-600" />,
    title: "Data Management",
    description: "Enterprise data warehousing and governance solutions.",
  },
  {
    id: 5,
    icon: <Cloud className="h-6 w-6 text-blue-600" />,
    title: "Cloud Migration",
    description: "Seamless transition to AWS/Azure for corporate workloads.",
  },
  {
    id: 6,
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "CRM Implementation",
    description: "Salesforce and Dynamics 365 deployment for enterprises.",
  },
  {
    id: 7,
    icon: <BarChart className="h-6 w-6 text-blue-600" />,
    title: "Business Intelligence",
    description: "Power BI and Tableau solutions for executive dashboards.",
  },
  {
    id: 8,
    icon: <Cpu className="h-6 w-6 text-blue-600" />,
    title: "Digital Transformation",
    description: "Modernize legacy systems with microservices architecture.",
  },
  {
    id: 9,
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: "Global IT Support",
    description: "24/7 managed services for multinational corporations.",
  },
  {
    id: 10,
    icon: <ClipboardCheck className="h-6 w-6 text-blue-600" />,
    title: "Compliance Consulting",
    description: "GDPR, HIPAA, and SOX compliance frameworks.",
  },
];

export default function CorporateSolutionsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise Corporate Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Technology services designed for Fortune 500 companies and
            large-scale organizations
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center bg-blue-50 w-14 h-14 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Enterprise Technology
            </h2>
            <p className="text-xl mb-8">
              Our executive team specializes in large-scale corporate
              implementations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Request Consultation
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition-colors">
                Download Corporate Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
