export interface Recipe {
  ingredients: { [foodItemId: string]: Serving }
  instructions: RecipeStep[]
  // equipmentNeeded: EquipmentOption[]
}

export interface RecipeStep {
  actions: RecipeAction[]
}

// TODO: Implement: things like Chop A, Add B, Stir C, Heat Oven to D, etc. Might be difficult if even possible
export interface RecipeAction {}

type Serving = {
  qty: number
  metric: ServingMetric
}

enum ServingMetric {
  OUNCES = 'OUNCES',
  COUNT = 'COUNT',
  GRAMS = 'GRAMS',
}

export interface FoodItem {
  id: string
  name: string
  allergens: AllergenTag[]
  dietTags: DietTag[]
  categories: FoodCategory[]
  nutritionData: NutritionData
  stores: StoreData
}

enum FoodCategory {
  FRUIT = 'FRUIT',
  VEGETABLE = 'VEGETABLE',
}
enum AllergenTag {
  GLUTEN = 'GLUTEN',
  DAIRY = 'DAIRY',
}

enum DietTag {}

// TODO: Decide structure for Nutrition Info
export interface NutritionData {}

// TODO: Decide structure for store info, likely needs to go in a different file
export interface StoreData {
  [storeId: string]: Price
}

export interface Store {
  id: string
  location: GeoLocation
}

// TODO: Likely use an existing data type here
export type GeoLocation = {}

export type Price = {
  unit: string
}
