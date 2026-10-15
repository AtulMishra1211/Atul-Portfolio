"use client";

import { ArrowUpRight, Loader2, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/data";
import { GitHubIcon } from "./icons/BrandIcons";
import { Modal } from "./ui/Modal";

function LivePreviewFrame({ url, title }: { url: string; title: string }) {
  const [embeddable, setEmbeddable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/preview-check?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data: { embeddable: boolean }) => {
        if (!cancelled) setEmbeddable(data.embeddable);
      })
      .catch(() => {
        if (!cancelled) setEmbeddable(true);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  if (embeddable === false) {
    return (
      <div className="flex aspect-video w-full shrink-0 flex-col items-center justify-center gap-4 border-b border-border bg-surface-2 px-6 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShieldAlert size={18} />
        </span>
        <p className="max-w-sm text-sm text-muted">
          This site blocks embedded previews (its server sends an{" "}
          <code className="font-mono text-xs text-foreground/80">X-Frame-Options</code> header).
          Open it directly instead.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 btn-neon rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.03]"
        >
          Open website
          <ArrowUpRight size={15} />
        </a>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full shrink-0 border-b border-border bg-surface-2">
      {embeddable === null && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-muted">
          <Loader2 size={16} className="animate-spin" />
          Loading preview&hellip;
        </div>
      )}
      {embeddable && (
        <iframe
          src={url}
          title={`${title} live preview`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className="h-full w-full"
        />
      )}
    </div>
  );
}

export function ProjectPreviewModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Modal open={Boolean(project)} onClose={onClose} title={project?.title ?? ""}>
      {project?.liveUrl && (
        <LivePreviewFrame key={project.liveUrl} url={project.liveUrl} title={project.title} />
      )}

      <div className="p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-muted md:text-[15px]">
          {project?.description}
        </p>

        {project && project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="chip rounded-md px-2.5 py-1 font-mono text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {project?.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-neon rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.03]"
            >
              Open live site
              <ArrowUpRight size={15} />
            </a>
          )}
          {project?.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-ghost rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200"
            >
              <GitHubIcon className="h-3.75 w-3.75" />
              View code
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
