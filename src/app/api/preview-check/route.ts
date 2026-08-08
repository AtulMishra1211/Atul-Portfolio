import { projects } from "@/lib/data";

const ALLOWED_HOSTS = new Set(
  projects.filter((p) => p.liveUrl).map((p) => new URL(p.liveUrl!).hostname)
);

export async function GET(request: Request) {
  const target = new URL(request.url).searchParams.get("url");

  if (!target) {
    return Response.json({ embeddable: false }, { status: 400 });
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(target);
  } catch {
    return Response.json({ embeddable: false }, { status: 400 });
  }

  // Only ever probe the live URLs this portfolio actually links to.
  if (!ALLOWED_HOSTS.has(targetUrl.hostname)) {
    return Response.json({ embeddable: false }, { status: 400 });
  }

  try {
    const res = await fetch(targetUrl, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(6000),
    });
    res.body?.cancel();

    const xfo = res.headers.get("x-frame-options")?.toLowerCase() ?? "";
    const csp = res.headers.get("content-security-policy") ?? "";
    const frameAncestors = csp.match(/frame-ancestors\s+([^;]+)/i)?.[1] ?? "";

    const blocked =
      xfo.includes("deny") || xfo.includes("sameorigin") || /'none'/i.test(frameAncestors);

    return Response.json({ embeddable: !blocked });
  } catch {
    // Couldn't verify (network hiccup, timeout, etc.) — let the iframe try.
    return Response.json({ embeddable: true });
  }
}
