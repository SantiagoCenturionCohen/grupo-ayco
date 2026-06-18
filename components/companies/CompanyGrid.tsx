import { companies } from "@/lib/companies";
import { CompanyCard } from "./CompanyCard";

export function CompanyGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
      {companies.map((company, index) => (
        <CompanyCard key={company.slug} company={company} index={index} />
      ))}
    </div>
  );
}
