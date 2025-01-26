import { GenderType } from '@/entities/gender';

interface IGetCategoryRoute {
  gender: GenderType;
  tab: 'category';
  category: string;
}

interface IGetCatalogRoute {
  gender: GenderType;
  tab: 'catalog';
}

interface IGetGenderRoute {
  gender: GenderType;
  tab: 'home';
}

type GetRouteLinkType = IGetCategoryRoute | IGetCatalogRoute | IGetGenderRoute;

export const getRouteLink = (path: GetRouteLinkType): string => {
  switch (path.tab) {
    case 'category':
      return `/${path.gender}/catalog/${path.category}`;
    case 'catalog':
      return `/${path.gender}/catalog`;
    case 'home':
      return `/${path.gender}`;
    default:
      return `/404`;
  }
};
