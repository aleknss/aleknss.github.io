import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import dayjs from "dayjs";

const detectBrowserLanguage = (): "es" | "en" => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  return browserLang.startsWith("es") ? "es" : "en";
};

interface PortfolioData {
  [key: string]: any;
}

interface LanguageContextType {
  language: "es" | "en";
  portfolioData: PortfolioData;
  switchLanguage: (lang: "es" | "en") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"es" | "en">(
    detectBrowserLanguage()
  );
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({});

  const loadPortfolioData = async (lang: "es" | "en") => {
    try {
      let data;
      if (lang === "en") {
        const enData = await import("../configs/portfolio-en.json");
        data = enData.default || enData;
      } else {
        const esData = await import("../configs/portfolio.json");
        data = esData.default || esData;
      }
      setPortfolioData(data);
    } catch (error) {
      console.error(
        `Error loading portfolio data for language ${lang}:`,
        error
      );
    }
  };

  const switchLanguage = (lang: "es" | "en") => {
    document.documentElement.lang = lang;
    setLanguage(lang);
    dayjs.locale(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    loadPortfolioData(language);
    dayjs.locale(language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        portfolioData,
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
