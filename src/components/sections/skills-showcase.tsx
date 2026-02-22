"use client";

import {
	SkillsNetwork,
	SkillsAutoGenerate,
} from "@/components/svg-animations";
import type { SkillsShowcaseContent } from "@/lib/content/types";

export function SkillsShowcase({
	content,
}: { content: SkillsShowcaseContent }) {
	return (
		<section className="bg-surface py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				{/* Section header */}
				<div className="mb-12 text-center sm:mb-16">
					<h2 className="mb-4 text-2xl font-bold text-navy-dark sm:text-3xl">
						{content.heading}
					</h2>
					<p className="mx-auto max-w-3xl text-sm text-muted sm:text-base">
						{content.subheading}
					</p>
				</div>

				{/* Two-column layout */}
				<div className="grid gap-4 md:grid-cols-2">
					{/* Left: Skills Network */}
					<div className="rounded-xl border border-border bg-white p-5 shadow-sm transition duration-200 hover:border-copper/30 hover:shadow-lg sm:p-6">
						<div className="mb-4 flex justify-center">
							<SkillsNetwork className="h-56 w-56 sm:h-64 sm:w-64" />
						</div>
						<div className="mb-1 text-lg font-bold text-navy-dark sm:text-xl">
							2,200+ 스킬 자동 활용
						</div>
						<div className="mb-3 text-sm font-medium text-muted">
							{content.description}
						</div>
					</div>

					{/* Right: Auto-generate */}
					<div className="rounded-xl border border-border bg-white p-5 shadow-sm transition duration-200 hover:border-copper/30 hover:shadow-lg sm:p-6">
						<div className="mb-4 flex justify-center">
							<SkillsAutoGenerate className="h-56 w-56 sm:h-64 sm:w-64" />
						</div>
						<div className="mb-1 text-lg font-bold text-navy-dark sm:text-xl">
							새로운 스킬 자동 생성
						</div>
						<div className="mb-3 text-sm font-medium text-muted">
							{content.autoGenDescription}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
