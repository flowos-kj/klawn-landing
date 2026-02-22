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
		<section className="bg-white py-20 sm:py-24">
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
				<div className="grid gap-8 md:grid-cols-2">
					{/* Left: Skills Network */}
					<div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
						<SkillsNetwork className="mx-auto mb-6 h-auto w-full max-w-sm" />
						<h3 className="mb-2 text-lg font-bold text-navy-dark sm:text-xl">
							2,200+ 스킬 자동 활용
						</h3>
						<p className="text-sm leading-relaxed text-muted sm:text-base">
							{content.description}
						</p>
					</div>

					{/* Right: Auto-generate */}
					<div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
						<div className="mb-6 flex justify-center">
							<SkillsAutoGenerate className="h-48 w-48 sm:h-56 sm:w-56" />
						</div>
						<h3 className="mb-2 text-lg font-bold text-navy-dark sm:text-xl">
							새로운 스킬 자동 생성
						</h3>
						<p className="text-sm leading-relaxed text-muted sm:text-base">
							{content.autoGenDescription}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
