export type ProductType = {
  id: number
  title: string
  price: number
  images: string[]
}

export type ProductDetailsType = ProductType & {
    brand: string
    stock: number
    description: string
    availabilityStatus: string
    category: string
}