import { SECRET_MAINTENANCE_MODE } from '$env/static/private';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (SECRET_MAINTENANCE_MODE === '1' && event.route.id != '/(special)/maintenance') {
    return new Response(undefined, { status: 303, headers: { location: '/maintenance' } });
  }
  
  return await resolve(event);
}
