import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EmployeeProfile } from "@/components/employees/EmployeeProfile";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { employees, getEmployee } from "@/lib/employees/data";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo/site";

type EmployeePageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return employees.map(({ slug }) => ({ id: slug }));
}

export async function generateMetadata({ params }: EmployeePageProps): Promise<Metadata> {
  const { id } = await params;
  const employee = getEmployee(id);
  if (!employee) return { title: "Employee Not Found", robots: { index: false, follow: false } };

  return createPageMetadata({
    title: `${employee.name} — ${employee.role}`,
    description: `Verified Balloon Lab employee profile for ${employee.name}, ${employee.role}. Employee ID ${employee.employeeId}.`,
    path: `/employee/${employee.slug}`,
    keywords: [
      employee.name,
      `${employee.name} Balloon Lab`,
      employee.role,
      "Balloon Lab employee",
      "Balloon Lab UAE",
      employee.employeeId,
    ],
  });
}

export default async function EmployeePage({ params }: EmployeePageProps) {
  const { id } = await params;
  const employee = getEmployee(id);
  if (!employee) notFound();

  return (
    <>
      <Header />
      <EmployeeProfile employee={employee} />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Employee Profile", path: `/employee/${employee.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": absoluteUrl(`/employee/${employee.slug}#person`),
            name: employee.name,
            jobTitle: employee.role,
            email: employee.email,
            telephone: employee.phone,
            image: absoluteUrl(employee.cardImage),
            url: absoluteUrl(`/employee/${employee.slug}`),
            worksFor: {
              "@type": "Organization",
              "@id": "https://balloonlab.ae/#organization",
              name: employee.company,
              url: "https://balloonlab.ae",
            },
          },
        ]}
      />
    </>
  );
}
