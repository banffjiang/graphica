export interface Product {
  id: number
  name: string
  description: string
  image: string
  printifyId?: string // For future Printify API integration
}

export const products: Product[] = [
  {
    id: 1,
    name: "Moraine Lake at Dawn",
    description: "1000-piece archival puzzle capturing the lake's iconic turquoise waters",
    image: "/puzzle.png"
  },
  {
    id: 2,
    name: "Alpine Horizon",
    description: "Minimalist ceramic drinkware featuring the Canadian Rockies silhouette",
    image: "/cup.png"
  },
  {
    id: 3,
    name: "Serenity in Stone",
    description: "Gallery-quality acrylic print of Moraine Lake's timeless beauty",
    image: "/tote.png"
  },
  {
    id: 4,
    name: "Serenity in Stone",
    description: "Fine art canvas capturing the dramatic peaks of Banff National Park",
    image: "/shirt.png"
  },
  {
    id: 5,
    name: "Glacial Blue",
    description: "Premium textile collection featuring subtle alpine colorways",
    image: "/white_shirt.png"
  },
  {
    id: 6,
    name: "Reflections",
    description: "Limited edition print series of mirror-still mountain lakes",
    image: "/acr.png"
  }
]