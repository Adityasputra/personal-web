import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Quote,
  Calendar,
  MapPin,
  Coffee,
  ArrowRight,
  Sparkles,
  User,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { contentData } from "@/data/aboutme/aboutme";
import { useRouter } from "next/navigation";

const getGridClass = (index: number) => {
  const gridClasses = [
    "col-span-4 row-span-3",
    "col-span-2 row-span-3",
    "col-span-2 row-span-2",
    "col-span-4 row-span-2",
    "col-span-3 row-span-2",
    "col-span-3 row-span-2",
  ];

  return gridClasses[index] || "col-span-2 row-span-2";
};

export default function AboutMe() {
  const router = useRouter();

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-20 text-foreground overflow-hidden">
      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <User className="w-4 h-4" />
            <span>Get to know me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            My journey as a developer, my values, and the vision I&apos;m
            working toward
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Active since 2022</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sidoarjo, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50">
              <Coffee className="w-4 h-4 text-primary" />
              <span>Coffee Enthusiast</span>
            </div>
          </div>
        </motion.div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-6 auto-rows-[120px] gap-4">
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-muted/70 via-muted/50 to-muted/30 backdrop-blur-sm",
                  getGridClass(index)
                )}
              >
                <div className="relative h-full p-6 flex flex-col overflow-hidden">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 text-primary backdrop-blur-sm shrink-0 shadow-md">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-foreground leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="text-xs shrink-0 shadow-sm"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="flex-1 overflow-y-auto scrollbar-hide pr-1">
                    {item.content && (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.content}
                      </p>
                    )}

                    {item.stats && (
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {item.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="text-center py-2 rounded-xl bg-gradient-to-br from-background/80 to-background/60 border border-border/40"
                          >
                            <div className="text-base font-bold text-primary">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="default"
                            className="text-xs shadow-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {item.quote && (
                    <div className="flex items-start gap-2 mt-3 pt-3 border-t border-border/30">
                      <Quote className="w-4 h-4 text-primary/70 mt-0.5 flex-shrink-0" />
                      <p className="text-xs italic text-primary/90 leading-relaxed">
                        {item.quote}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px]">
            {contentData.map((item, index) => {
              let mobileClass = "";

              if (index === 0) {
                mobileClass = "col-span-2 md:col-span-4 row-span-2";
              } else if (index === 1 || index === 2) {
                mobileClass = "col-span-1 md:col-span-2 row-span-2";
              } else if (index === 3) {
                mobileClass = "col-span-2 md:col-span-4 row-span-1";
              } else {
                mobileClass = "col-span-1 md:col-span-2 row-span-2";
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-muted/70 via-muted/50 to-muted/30 backdrop-blur-sm",
                    mobileClass
                  )}
                >
                  <div className="relative h-full p-3.5 flex flex-col overflow-hidden">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/25 to-primary/10 text-primary shrink-0">
                          {item.icon}
                        </div>
                        <h3 className="text-xs md:text-sm font-bold text-foreground leading-tight line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] shrink-0 px-1.5 py-0.5"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                      {item.content && (
                        <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed mb-2 line-clamp-3">
                          {item.content}
                        </p>
                      )}

                      {item.stats && item.stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-1.5 mb-2">
                          {item.stats.slice(0, 2).map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className="text-center py-1.5 rounded-lg bg-background/70 border border-border/30"
                            >
                              <div className="text-xs font-bold text-primary">
                                {stat.value}
                              </div>
                              <div className="text-[9px] text-muted-foreground leading-tight">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.tags && (
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-md bg-primary/10 text-primary font-medium border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Sparkles className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <span>
              Keep growing, keep building — greatness is crafted, not gifted.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => router.push("/portfolio")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary bg-primary/5 text-primary transition-all shadow-sm"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/Aditya-Saputra-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/70 text-foreground transition-all shadow-sm border border-border/30 cursor-pointer"
            >
              Download Resume
            </a>
            <button
              onClick={() => router.push("/gallery")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/70 text-foreground transition-all shadow-sm border border-border/30"
            >
              Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
