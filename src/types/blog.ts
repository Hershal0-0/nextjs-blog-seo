export interface BlogTOC {
  level: string;
  text: string;
  slug: string;
}

export interface slugParamProps {
  params: {
    slug: string;
  };
}
