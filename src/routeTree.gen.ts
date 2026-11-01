/*
  This file is generated for TanStack Router file-based routing.
  It keeps the app working even when route generation has not run yet.
*/

import { Route as RootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'
import { Route as AvatarRoute } from './routes/avatar'
import { Route as GalleryRoute } from './routes/gallery'
import { Route as GameRoute } from './routes/game'
import { Route as HowToPlayRoute } from './routes/how-to-play'
import { Route as RoadmapRoute } from './routes/roadmap'
import { Route as AboutRoute } from './routes/about'

export const routeTree = RootRoute.addChildren([
  IndexRoute,
  AvatarRoute,
  GalleryRoute,
  GameRoute,
  HowToPlayRoute,
  RoadmapRoute,
  AboutRoute,
])
