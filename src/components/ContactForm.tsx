"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const communes = [
  "Uccle",
  "Ixelles",
  "Woluwe-Saint-Pierre",
  "Woluwe-Saint-Lambert",
  "Auderghem",
  "Watermael-Boitsfort",
  "Etterbeek",
  "Forest",
  "Saint-Gilles",
  "Autre commune de Bruxelles",
];

const problemTypes = [
  "Remontée capillaire",
  "Mérule (champignon)",
  "Humidité de condensation",
  "Infiltration d'eau",
  "Salpêtre / efflorescence",
  "Moisissures",
  "Je ne sais pas encore",
  "Autre",
];

interface ContactFormProps {
  defaultCommune?: string;
  defaultProblem?: string;
}

export default function ContactForm({
  defaultCommune,
  defaultProblem,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    commune: defaultCommune || "",
    probleme: defaultProblem || "",
    description: "",
    disponibilites: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800));
    console.log("Formulaire soumis:", form);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Demande envoyée avec succès !
        </h3>
        <p className="text-green-700">
          Nous avons bien reçu votre demande. Un expert vous contactera dans les
          24 heures pour convenir d&apos;un diagnostic gratuit.
        </p>
        <p className="mt-3 text-green-600 text-sm">
          Besoin urgent ?{" "}
          <a
            href="tel:0451053370"
            className="font-semibold underline"
          >
            Appelez-nous directement au 0451 05 33 70
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prénom *
          </label>
          <input
            type="text"
            name="prenom"
            required
            value={form.prenom}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
            placeholder="Jean"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom *
          </label>
          <input
            type="text"
            name="nom"
            required
            value={form.nom}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
            placeholder="Dupont"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone *
          </label>
          <input
            type="tel"
            name="telephone"
            required
            value={form.telephone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
            placeholder="+32 4XX XX XX XX"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
            placeholder="jean@exemple.be"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Commune *
          </label>
          <select
            name="commune"
            required
            value={form.commune}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent bg-white"
          >
            <option value="">Sélectionnez votre commune</option>
            {communes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de problème *
          </label>
          <select
            name="probleme"
            required
            value={form.probleme}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent bg-white"
          >
            <option value="">Sélectionnez le type</option>
            {problemTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description du problème
        </label>
        <textarea
          name="description"
          rows={3}
          value={form.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent resize-none"
          placeholder="Décrivez votre problème (localisation, ancienneté, symptômes visibles...)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Vos disponibilités
        </label>
        <input
          type="text"
          name="disponibilites"
          value={form.disponibilites}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
          placeholder="Ex : Semaine matin, ou le samedi..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 disabled:bg-orange-300 text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-sm"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={16} />
            Demander mon diagnostic gratuit
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        * Champs obligatoires. Vos données sont utilisées uniquement pour vous
        contacter.
      </p>
    </form>
  );
}
