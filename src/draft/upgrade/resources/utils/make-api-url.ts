export function makeApiUrl({
  api_server,
  apiVersion,
}: {
  api_server: string;
  apiVersion: string;
}) {
  return `${api_server}${apiVersion}`;
}
