export default {
  async fetch(request) {
    const urlParam = new URL(request.url).searchParams.get("url");
    if (!urlParam) {
      return new Response("Missing ?url= parameter", { status: 400 });
    }

    const target = urlParam;
    const proxy = "http://27022187-zone-custom-region-US-sessid-3rkA1gGj-sessTime-30:higmpdAE@f.proxys5.net:6200";

    const headers = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)",
      "X-Forwarded-For": "23.45.78.123",
      "CF-Connecting-IP": "23.45.78.123"
    };

    try {
      const res = await fetch(target, {
        headers,
        method: "GET",
        redirect: "follow"
      });
      return res;
    } catch (err) {
      return new Response("Proxy Fetch Error: " + err.toString(), { status: 502 });
    }
  }
}
