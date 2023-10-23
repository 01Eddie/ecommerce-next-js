import { FIREBASEAPIKEY, FIREBASEAPPID, FIREBASEAUTHDOMAIN, FIREBASEMEASUREMENTID, FIREBASEMESSAGINGSENDERID, FIREBASEPROJECTID, FIREBASESTORAGEBUCKET } from "@/global";

export const navOptions = [
  {
    id: "home",
    label: "Inicio",
    path: "/",
  },
  {
    id: "listing",
    label: "Productos",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Hombre",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Mujer",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Niños",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Administrar Productos",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Agregar Producto",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Ingrese su nombre",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Ingrese su email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Ingrese su contrasena",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Rol",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "Cliente",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Ingrese su email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Ingrese su contrasena",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Ingrese nombre",
    label: "Nombre",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Ingrese precio",
    label: "Precio",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Ingrese descripcion",
    label: "Descripcion",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Categoria",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Hombre",
      },
      {
        id: "women",
        label: "Mujer",
      },
      {
        id: "kids",
        label: "Ninos",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Ingrese información de entrega",
    label: "Información de entrega",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "En venta",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Si",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Introduzca el porcentaje de descuento de precio",
    label: "Porcentaje de descuento",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: `${FIREBASEAPIKEY}`,
  authDomain: `${FIREBASEAUTHDOMAIN}`,
  projectId: `${FIREBASEPROJECTID}`,
  storageBucket: `${FIREBASESTORAGEBUCKET}`,
  messagingSenderId: `${FIREBASEMESSAGINGSENDERID}`,
  appId: `${FIREBASEAPPID}`,
  measurementId: `${FIREBASEMEASUREMENTID}`
};

export const firebaseStroageURL = 'gs://next-js-ecommerce-2023-4262b.appspot.com'; // FIREBASESTROAGEURL

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Ingrese tu nombre completo",
    label: "Nombres completos",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Ingrese tu dirección completa",
    label: "Dirección",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Ingrese tu ciudad",
    label: "Ciudad",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Ingrese tu pais",
    label: "Pais",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Ingrese tu codigo postal",
    label: "Codigo Postal",
    componentType: "input",
  },
];
