"use client";

import {
  DeployCubeDocker,
  DeployNetworkK8s,
  DeployCloudAws,
  DeployBuilding,
  DeployWrench,
  DeployServerOnprem,
} from "@/components/svg-animations";
import type { DeploymentContent } from "@/lib/content/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  cube: <DeployCubeDocker className="h-28 w-28" />,
  network: <DeployNetworkK8s className="h-28 w-28" />,
  cloud: <DeployCloudAws className="h-28 w-28" />,
  building: <DeployBuilding className="h-28 w-28" />,
  wrench: <DeployWrench className="h-28 w-28" />,
  server: <DeployServerOnprem className="h-28 w-28" />,
};

export function Deployment({ content }: { content: DeploymentContent }) {
  return (
    <section id="deployment" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          {content.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          {content.subheading}
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.options.map((opt) => (
            <div
              key={opt.title}
              className="flex flex-col items-center rounded-xl border border-border bg-white p-5 sm:p-6"
            >
              <div className="mb-4">
                {ICON_MAP[opt.iconKey]}
              </div>
              <h3 className="mb-2 text-center text-base font-semibold text-navy-dark sm:text-lg">
                {opt.title}
              </h3>
              <p className="mb-3 text-center text-xs text-muted sm:mb-4 sm:text-sm">
                {opt.description}
              </p>
              <code className="mt-auto block w-full overflow-x-auto rounded-lg bg-navy-dark px-3 py-2 text-center font-mono text-[10px] text-white/80 sm:px-4 sm:py-2.5 sm:text-xs">
                {opt.command}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
