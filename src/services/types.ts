// Response attributes in the product or service
export interface IItem {
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
  name: string;
  course: string;
  contact: string;
  updatedAt: string,
  createdAt: string,
}



// Retired from the da page of products | backup
interface Item {
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
  name: string;
  course: string;
  contact: string;
}