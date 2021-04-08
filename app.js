const isEven = function(value) {
  return value % 2 == 0;
}

const handleRequest = function(request) {
  const { pathname } = new URL(request.url);

  const json = JSON.stringify({
    iseven: isEven(pathname.split('/')[1])
  });

  return new Response(json, {
    headers: { "content-type": "text/plain" },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
