import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "نمونه کارها",
  description: "گالری پروژه‌های انجام‌شده توسط تیم فنی ره گشا در زمینه لوله بازکنی، تخلیه و حفر چاه.",
};

const projects = services.slice(0, 8).map((s, i) => ({
  id: i + 1,
  title: `${s.title} — پروژه شماره ${i + 1}`,
  service: s.title,
}));

export default function ProjectsPage() {
  return (
    <Section className="pt-12">
      <SectionHeading
        eyebrow="نمونه کارها"
        title="پروژه‌های اجرا شده"
        description="نمایش تصاویر پیش و پس از اجرای پروژه‌ها. برای مشاهده تصاویر واقعی، گالری از پنل مدیریت به‌روزرسانی می‌شود."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-xl2 border border-slate-200 shadow-sm bg-white">
            <div className="grid grid-cols-2">
              <div className="aspect-square bg-slate-200 flex items-center justify-center text-xs text-graphite/50">
                قبل از اجرا
              </div>
              <div className="aspect-square bg-navy flex items-center justify-center text-xs text-white/60">
                پس از اجرا
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-navy">{p.title}</p>
              <p className="text-xs text-graphite/60 mt-1">خدمت: {p.service}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
