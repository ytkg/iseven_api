FROM hayd/ubuntu-deno:1.8.1

RUN deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -f https://deno.land/x/deploy/deployctl.ts

WORKDIR /app

CMD ["deployctl", "run", "--watch", "app.js"]
