"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  Heart,
  Palette,
  Search,
  SlidersHorizontal,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";
import { designs, filterOptions, type Design } from "@/lib/content/designs";
import styles from "@/app/designs/designs.module.css";

type FilterKey = keyof typeof filterOptions;

const filterLabels: Record<FilterKey, string> = {
  occasion: "Occasion",
  recipient: "Recipient",
  style: "Balloon style",
  colors: "Colour",
  customization: "Customization",
  availability: "Availability",
};

function matchesSelected(design: Design, key: FilterKey, selected: string[]) {
  if (!selected.length) return true;
  const value = design[key];
  return selected.some((item) => (Array.isArray(value) ? value.includes(item) : value === item));
}

function FilterGroups({
  selected,
  onToggle,
}: {
  selected: Record<FilterKey, string[]>;
  onToggle: (key: FilterKey, value: string) => void;
}) {
  return (
    <div className={styles.filterGroups}>
      {(Object.keys(filterOptions) as FilterKey[]).map((key) => (
        <fieldset key={key} className={styles.filterGroup}>
          <legend>{filterLabels[key]}</legend>
          <div>
            {filterOptions[key].map((option) => {
              const checked = selected[key].includes(option);
              return (
                <label key={option} className={checked ? styles.filterOptionActive : undefined}>
                  <input type="checkbox" checked={checked} onChange={() => onToggle(key, option)} />
                  <span className={styles.checkboxVisual}>{checked && <Check size={13} aria-hidden="true" />}</span>
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
    </div>
  );
}

function DesignCard({ design, index }: { design: Design; index: number }) {
  const reduceMotion = useReducedMotion();
  const [saved, setSaved] = useState(false);

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 34, rotateX: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -22, scale: 0.96, transition: { duration: 0.18 } }}
      transition={{ type: "spring", stiffness: 85, damping: 18, delay: Math.min(index * 0.045, 0.22) }}
      whileHover={reduceMotion ? undefined : { y: -10, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
      className={styles.designCard}
    >
      <div className={styles.designCardImage}>
        <Image
          src={design.image}
          alt={`${design.title} personalized balloon design concept`}
          fill
          sizes="(max-width: 700px) 92vw, (max-width: 1100px) 44vw, 29vw"
          style={{ objectFit: "cover", objectPosition: design.imagePosition }}
        />
        <span className={styles.cardOccasion}>{design.occasion}</span>
        <button
          type="button"
          className={styles.saveButton}
          aria-label={saved ? `Remove ${design.title} from saved designs` : `Save ${design.title}`}
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
        </button>
        <div className={styles.cardShine} aria-hidden="true" />
      </div>
      <div className={styles.designCardBody}>
        <div>
          <p className={styles.cardCode}>{design.id}</p>
          <h3>{design.title}</h3>
          <p className={styles.cardDescription}>{design.shortDescription}</p>
        </div>
        <div className={styles.cardAttributes}>
          <span><WandSparkles size={14} aria-hidden="true" /> {design.customization.slice(0, 3).join(" + ")}</span>
          <span><Clock3 size={14} aria-hidden="true" /> {design.preparationTime}</span>
        </div>
        <div className={styles.colorRow} aria-label={`Available colours: ${design.colors.join(", ")}`}>
          <Palette size={15} aria-hidden="true" />
          {design.colors.map((color) => <span key={color}>{color}</span>)}
        </div>
        <Link href={`/designs?design=${design.slug}#custom-design`} className={styles.customizeButton}>
          Customize <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

export function DesignCatalogue() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(searchParams.get("q") ?? "");
  const deferredSearch = useDeferredValue(searchValue.trim().toLowerCase());

  const selected = useMemo(() => {
    const state = {} as Record<FilterKey, string[]>;
    (Object.keys(filterOptions) as FilterKey[]).forEach((key) => {
      state[key] = searchParams.getAll(key);
    });
    return state;
  }, [searchParams]);

  const activeFilterCount = Object.values(selected).reduce((total, values) => total + values.length, 0);
  const sort = searchParams.get("sort") ?? "featured";

  const updateParams = (updater: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    updater(params);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}#catalogue` : `${pathname}#catalogue`, { scroll: false });
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const current = searchParams.get("q") ?? "";
      if (current === searchValue.trim()) return;
      updateParams((params) => {
        if (searchValue.trim()) params.set("q", searchValue.trim());
        else params.delete("q");
      });
    }, 260);
    return () => window.clearTimeout(timer);
    // updateParams is intentionally derived from the current URL snapshot.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    document.body.style.overflow = mobileFiltersOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileFiltersOpen]);

  const toggleFilter = (key: FilterKey, value: string) => {
    const next = selected[key].includes(value)
      ? selected[key].filter((item) => item !== value)
      : [...selected[key], value];
    updateParams((params) => {
      params.delete(key);
      next.forEach((item) => params.append(key, item));
    });
  };

  const clearFilters = () => {
    setSearchValue("");
    router.replace(`${pathname}#catalogue`, { scroll: false });
  };

  const filteredDesigns = useMemo(() => {
    const results = designs.filter((design) => {
      const searchable = [design.title, design.shortDescription, design.occasion, design.style, ...design.colors, ...design.keywords].join(" ").toLowerCase();
      return (
        (!deferredSearch || searchable.includes(deferredSearch)) &&
        (Object.keys(filterOptions) as FilterKey[]).every((key) => matchesSelected(design, key, selected[key]))
      );
    });
    return [...results].sort((a, b) => {
      if (sort === "newest") return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
      return Number(b.featured) - Number(a.featured) || Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    });
  }, [deferredSearch, selected, sort]);

  return (
    <section id="catalogue" className={styles.catalogue} aria-labelledby="catalogue-title">
      <div className={styles.sectionHeadingRow}>
        <div>
          <span className={styles.sectionLabel}>The design showroom</span>
          <h2 id="catalogue-title">Choose a direction,<br />then make it personal.</h2>
        </div>
        <p>Search by moment, recipient, colour or balloon style. Every result can be adapted around your photo, message and chosen finish.</p>
      </div>

      <div className={styles.catalogueToolbar}>
        <label className={styles.searchField}>
          <span className="sr-only">Search designs</span>
          <Search size={20} aria-hidden="true" />
          <input
            type="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search birthday, baby shower, gold, photo balloon..."
          />
          {searchValue && (
            <button type="button" onClick={() => setSearchValue("")} aria-label="Clear search">
              <X size={17} aria-hidden="true" />
            </button>
          )}
        </label>
        <button type="button" className={styles.mobileFilterButton} onClick={() => setMobileFiltersOpen(true)}>
          <SlidersHorizontal size={18} aria-hidden="true" /> Filters
          {activeFilterCount > 0 && <span>{activeFilterCount}</span>}
        </button>
        <label className={styles.sortField}>
          <span>Sort</span>
          <select value={sort} onChange={(event) => updateParams((params) => params.set("sort", event.target.value))}>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </div>

      <div className={styles.catalogueLayout}>
        <aside className={styles.desktopFilters} aria-label="Design filters">
          <div className={styles.filtersHeading}>
            <div><SlidersHorizontal size={17} aria-hidden="true" /><strong>Refine designs</strong></div>
            {activeFilterCount > 0 && <button type="button" onClick={clearFilters}>Clear all</button>}
          </div>
          <FilterGroups selected={selected} onToggle={toggleFilter} />
        </aside>

        <div className={styles.resultsArea}>
          <div className={styles.resultsSummary} aria-live="polite">
            <p><strong>{filteredDesigns.length}</strong> design {filteredDesigns.length === 1 ? "direction" : "directions"}</p>
            {activeFilterCount > 0 && <span>{activeFilterCount} filter{activeFilterCount === 1 ? "" : "s"} applied</span>}
          </div>
          <motion.div layout={!reduceMotion} className={styles.designGrid}>
            <AnimatePresence mode="popLayout">
              {filteredDesigns.map((design, index) => <DesignCard key={design.id} design={design} index={index} />)}
            </AnimatePresence>
          </motion.div>
          {!filteredDesigns.length && (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className={styles.emptyState}>
              <span><Sparkles size={24} aria-hidden="true" /></span>
              <h3>No exact match—your idea still belongs here.</h3>
              <p>Reset the filters or start a custom direction with our design team.</p>
              <div>
                <button type="button" onClick={clearFilters} className={styles.secondaryButton}>Reset filters</button>
                <Link href="#custom-design" className={styles.primaryButton}>Start custom <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close filters"
              className={styles.sheetBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Filter designs"
              className={styles.filterSheet}
              initial={reduceMotion ? { opacity: 0 } : { y: "100%", rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 28 }}
            >
              <div className={styles.sheetHandle} aria-hidden="true" />
              <div className={styles.sheetHeading}>
                <div><small>Design showroom</small><h2>Filter designs</h2></div>
                <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters"><X size={20} /></button>
              </div>
              <div className={styles.sheetContent}><FilterGroups selected={selected} onToggle={toggleFilter} /></div>
              <div className={styles.sheetActions}>
                <button type="button" onClick={clearFilters}>Clear</button>
                <button type="button" onClick={() => setMobileFiltersOpen(false)}>Show {filteredDesigns.length} results</button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
