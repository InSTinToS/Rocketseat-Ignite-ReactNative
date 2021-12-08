import { CarType } from 'src/utils/getAccessoryIcon'

export type AccessoriesResType = {
  type: keyof CarType
  name: string
}[]

export interface RentResType {
  price: string
  period: string
}

export interface CarResType {
  id: string
  name: string
  brand: string
  about: string
  photos: string[]
  thumbnail: string
  rent: RentResType
  accessories: AccessoriesResType
  fuel_type: 'hybrid_motor' | 'electric' | 'gasoline_motor'
}
