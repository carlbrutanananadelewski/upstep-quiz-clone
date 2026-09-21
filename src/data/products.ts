export interface ProductData {
  id: string;
  sku: string;
  name: string;
  blurb: string;
}

export const PRODUCTS: Record<string, ProductData> = {
  'on-my-feet-all-day-custom-orthotics': {
    id: 'on-my-feet-all-day-custom-orthotics',
    sku: '770101',
    name: 'On My Feet All Day Custom Orthotics',
    blurb: '4+ hours/day.'
  },
  'normal-everyday-activity-custom-orthotics': {
    id: 'normal-everyday-activity-custom-orthotics',
    sku: '770102',
    name: 'Normal Everyday Activity Custom Orthotics',
    blurb: '1-4 hours/day.'
  },
  'running-custom-orthotics': {
    id: 'running-custom-orthotics',
    sku: '770203',
    name: 'Running Custom Orthotics',
    blurb: 'Shock absorb for pavement.'
  },
  'hiking-and-fitness-walking-custom-orthotics': {
    id: 'hiking-and-fitness-walking-custom-orthotics',
    sku: '770207',
    name: 'Fitness Walking & Hiking Custom Orthotics',
    blurb: 'Heel-to-toe roll.'
  },
  'basketball-custom-orthotics': {
    id: 'basketball-custom-orthotics',
    sku: '770202',
    name: 'Basketball Custom Orthotics',
    blurb: 'Shock + energy return, any top height.'
  },
  'cycling-custom-orthotics': {
    id: 'cycling-custom-orthotics',
    sku: '770206',
    name: 'Cycling Custom Orthotics',
    blurb: 'Stabilize, spread load in cycle sole.'
  },
  'golf-custom-orthotics': {
    id: 'golf-custom-orthotics',
    sku: '770201',
    name: 'Golf Custom Orthotics',
    blurb: 'Left vs right hand, side-specific pressure.'
  },
  'tennis-custom-orthotics': {
    id: 'tennis-custom-orthotics',
    sku: '770209',
    name: 'Tennis/ Pickleball Custom Orthotics',
    blurb: 'Grass and hardcourt.'
  },
  'gym-custom-orthotics': {
    id: 'gym-custom-orthotics',
    sku: '770205',
    name: 'Gym Custom Orthotics',
    blurb: 'Indoor cardio + weights.'
  },
  'multi-sports-custom-orthotics': {
    id: 'multi-sports-custom-orthotics',
    sku: '770210',
    name: 'Multi-Sports Custom Orthotics',
    blurb: 'All-round.'
  }
};
