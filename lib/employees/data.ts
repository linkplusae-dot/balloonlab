export type EmployeeRecord = {
  slug: string;
  employeeId: string;
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  cardImage: string;
  status: "Active";
};

export const employees: EmployeeRecord[] = [
  {
    slug: "emp001",
    employeeId: "EMP001",
    name: "Mubarak Obaid Al Dhaheri",
    role: "Founder and CEO",
    company: "Balloon Lab UAE",
    email: "balloonlabuae@gmail.com",
    phone: "+971561315511",
    whatsapp: "https://wa.me/971561315511",
    location: "Office 26, Floor 20, Al Wahda Commercial Tower, P.O 25025 Abu Dhabi, UAE",
    cardImage: "/employees/emp001.png",
    status: "Active",
  },
  {
    slug: "emp002",
    employeeId: "EMP002",
    name: "Malik Muhammad",
    role: "General Manager",
    company: "Balloon Lab UAE",
    email: "balloonlabuae@gmail.com",
    phone: "+971561315511",
    whatsapp: "https://wa.me/971561315511",
    location: "Office 26, Floor 20, Al Wahda Commercial Tower, P.O 25025 Abu Dhabi, UAE",
    cardImage: "/employees/emp002.png",
    status: "Active",
  },
  {
    slug: "emp003",
    employeeId: "EMP003",
    name: "Zain Mustafa",
    role: "Operational Manager",
    company: "Balloon Lab UAE",
    email: "balloonlabuae@gmail.com",
    phone: "+971561315511",
    whatsapp: "https://wa.me/971561315511",
    location: "Office 26, Floor 20, Al Wahda Commercial Tower, P.O 25025 Abu Dhabi, UAE",
    cardImage: "/employees/emp003.png",
    status: "Active",
  },
];

export function getEmployee(slug: string) {
  return employees.find((employee) => employee.slug === slug.toLowerCase());
}
