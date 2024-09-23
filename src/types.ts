// types.ts
export interface Address {
    at: string;
    po: string;
    dist: string;
  }
  
  export interface User {
    id: number;
    name: string;
    age: number;
    address: Address;
  }
  
 
  