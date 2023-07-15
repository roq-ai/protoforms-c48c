const mapping: Record<string, string> = {
  clients: 'client',
  'data-entries': 'data_entry',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
