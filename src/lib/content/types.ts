import type { ReactNode } from "react";

export interface HeroContent {
  headline: string;
  subheadline: string;
  body: ReactNode;
  ctaLabel: string;
  ctaHref: string;
}

export interface TrustItem {
  label: string;
  key: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  bullets: string[];
  large: boolean;
  iconKey: string;
}

export interface SectionHeader {
  heading: string;
  subheading: string;
}

export interface ComparisonRow {
  feature: string;
  left: string;
  right: string;
}

export interface ComparisonContent extends SectionHeader {
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonRow[];
}

export interface DeploymentOption {
  title: string;
  description: string;
  command: string;
  iconKey: string;
}

export interface DeploymentContent extends SectionHeader {
  options: DeploymentOption[];
}

export interface HowItWorksContent extends SectionHeader {
  variant: "technical" | "simple";
  simpleSteps?: { title: string; description: string; iconKey: string }[];
}

export interface SecurityContent extends SectionHeader {
  rbacLabels?: string[];
}

export interface CTAContent {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface PricingContent {
  badge: string;
  heading: string;
  subheading: string;
  monthlyWage: string;
  monthlyWageNumber: string;
  setupNote: string;
  benefits: string[];
  onboarding: string;
  onboardingDetail: string;
  expenseNote: string;
  promoLabel: string;
  promoPrice: string;
  referralLabel: string;
  referralDetail: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FeaturesContent extends SectionHeader {
  items: FeatureItem[];
}

export interface PageContent {
  hero: HeroContent;
  trustItems: TrustItem[];
  features: FeaturesContent;
  security: SecurityContent;
  howItWorks: HowItWorksContent;
  comparison: ComparisonContent;
  pricing: PricingContent;
  deployment: DeploymentContent;
  cta: CTAContent;
}
