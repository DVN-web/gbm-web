export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 4;

  const url = new URL(
    "https://diligent-triumph-6756087f3a.strapiapp.com/api/articles"
  );

  url.searchParams.append("populate", "*");
  url.searchParams.append("pagination[page]", page);
  url.searchParams.append("pagination[pageSize]", pageSize);
  url.searchParams.append("sort", "date:desc");

  try {
    const res = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!res.ok) {
      return new Response("Error", { status: res.status });
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error("API error:", error);
    return new Response("Fetch failed", { status: 500 });
  }
}