import type { Metadata } from "next";
import React from "react";
import { company, fullAddress } from "utils/company";

const title = `Sobre — ${company.legalName}`;
const description = `${company.legalName} (CNPJ ${company.cnpj}) é uma empresa brasileira de desenvolvimento de software sediada em ${company.address.city}, ${company.address.stateName}.`;

export const metadata: Metadata = {
  title,
  description,
};

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="py-3 border-b border-white/10">
    <dt className="text-xs uppercase tracking-wider text-gray-500">{label}</dt>
    <dd className="mt-1 text-gray-100 text-base">{children}</dd>
  </div>
);

const link =
  "underline decoration-purple-500 decoration-2 underline-offset-4 hover:text-purple-300";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: "https://planegazers.com",
    email: company.email,
    telephone: company.phoneE164,
    foundingDate: company.foundedAt,
    taxID: company.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.street} — ${company.address.complement}`,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="h-full overflow-y-auto">
        <div className="max-w-2xl mx-auto px-5 py-12 sm:py-16">
          <h1 className="font-extrabold text-transparent text-3xl sm:text-4xl bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            {company.legalName}
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            Empresa brasileira de desenvolvimento de software, fundada em 7 de
            julho de 2020 e sediada em {company.address.city},{" "}
            {company.address.stateName}. Desenvolvemos aplicações web,
            aplicativos mobile, APIs e sistemas sob encomenda.
          </p>

          <dl className="mt-10">
            <Field label="Razão social">{company.legalName}</Field>
            <Field label="CNPJ">{company.cnpj}</Field>
            <Field label="Endereço">
              <address className="not-italic">
                {fullAddress.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </Field>
            <Field label="Telefone">
              <a href={`tel:${company.phoneE164}`} className={link}>
                {company.phone}
              </a>
            </Field>
            <Field label="E-mail">
              <a href={`mailto:${company.email}`} className={link}>
                {company.email}
              </a>
              <br />
              <a href={`mailto:${company.registeredEmail}`} className={link}>
                {company.registeredEmail}
              </a>
            </Field>
          </dl>
        </div>
      </main>
    </>
  );
}
