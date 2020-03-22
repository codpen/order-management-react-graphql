/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCustomer
// ====================================================

export interface GetCustomer_getCustomer_createdBy {
  __typename: "User";
  name: string | null;
}

export interface GetCustomer_getCustomer_addresses {
  __typename: "Address";
  id: string;
  isPrimary: boolean;
  street: string | null;
  city: string | null;
  postNumber: string | null;
}

export interface GetCustomer_getCustomer {
  __typename: "Customer";
  id: string;
  name: string | null;
  identificationNumber: string | null;
  taxIdentificationNumber: string | null;
  personName: string | null;
  email: string | null;
  phone: string | null;
  note: string | null;
  allowedBankPayments: boolean;
  createdBy: GetCustomer_getCustomer_createdBy;
  createdAt: any;
  updatedAt: any;
  addresses: GetCustomer_getCustomer_addresses[];
}

export interface GetCustomer {
  getCustomer: GetCustomer_getCustomer | null;
}

export interface GetCustomerVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCustomer
// ====================================================

export interface UpdateCustomer_updateCustomer_createdBy {
  __typename: "User";
  name: string | null;
}

export interface UpdateCustomer_updateCustomer_addresses {
  __typename: "Address";
  id: string;
  isPrimary: boolean;
  street: string | null;
  city: string | null;
  postNumber: string | null;
}

export interface UpdateCustomer_updateCustomer {
  __typename: "Customer";
  id: string;
  name: string | null;
  identificationNumber: string | null;
  taxIdentificationNumber: string | null;
  personName: string | null;
  email: string | null;
  phone: string | null;
  note: string | null;
  allowedBankPayments: boolean;
  createdBy: UpdateCustomer_updateCustomer_createdBy;
  createdAt: any;
  updatedAt: any;
  addresses: UpdateCustomer_updateCustomer_addresses[];
}

export interface UpdateCustomer {
  updateCustomer: UpdateCustomer_updateCustomer;
}

export interface UpdateCustomerVariables {
  input: UpdateCustomerInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllCustomers
// ====================================================

export interface GetAllCustomers_getAllCustomers_items {
  __typename: "Customer";
  id: string;
  name: string | null;
  identificationNumber: string | null;
  personName: string | null;
  email: string | null;
  phone: string | null;
}

export interface GetAllCustomers_getAllCustomers {
  __typename: "CustomerPaginated";
  totalCount: number;
  items: GetAllCustomers_getAllCustomers_items[];
}

export interface GetAllCustomers {
  getAllCustomers: GetAllCustomers_getAllCustomers;
}

export interface GetAllCustomersVariables {
  first?: number | null;
  skip?: number | null;
  search?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllOrders
// ====================================================

export interface GetAllOrders_getAllOrders_items_customer {
  __typename: "Customer";
  id: string;
  name: string | null;
}

export interface GetAllOrders_getAllOrders_items_items_material {
  __typename: "Material";
  name: string;
}

export interface GetAllOrders_getAllOrders_items_items {
  __typename: "OrderItem";
  material: GetAllOrders_getAllOrders_items_items_material | null;
  pieces: number | null;
}

export interface GetAllOrders_getAllOrders_items {
  __typename: "Order";
  id: string;
  number: number;
  customer: GetAllOrders_getAllOrders_items_customer | null;
  createdAt: any;
  totalPrice: number;
  totalTax: number;
  items: GetAllOrders_getAllOrders_items_items[];
}

export interface GetAllOrders_getAllOrders {
  __typename: "OrderPaginated";
  totalCount: number;
  items: GetAllOrders_getAllOrders_items[];
}

export interface GetAllOrders {
  getAllOrders: GetAllOrders_getAllOrders;
}

export interface GetAllOrdersVariables {
  first?: number | null;
  skip?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_user {
  __typename: "User";
  name: string | null;
  id: string;
  email: string;
  role: string;
}

export interface LoginMutation_login {
  __typename: "AuthPayload";
  user: LoginMutation_login_user;
  token: string;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
  role: string;
}

export interface MeQuery {
  me: MeQuery_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllMaterials
// ====================================================

export interface GetAllMaterials_getAllMaterials {
  __typename: "Material";
  id: string;
  name: string;
  price: number;
  updatedAt: any;
}

export interface GetAllMaterials {
  getAllMaterials: GetAllMaterials_getAllMaterials[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateMaterial
// ====================================================

export interface UpdateMaterial_updateMaterial {
  __typename: "Material";
  id: string;
  name: string;
  price: number;
  updatedAt: any;
}

export interface UpdateMaterial {
  updateMaterial: UpdateMaterial_updateMaterial;
}

export interface UpdateMaterialVariables {
  id: string;
  name?: string | null;
  price?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteMaterial
// ====================================================

export interface DeleteMaterial_deleteMaterial {
  __typename: "Material";
  id: string;
}

export interface DeleteMaterial {
  deleteMaterial: DeleteMaterial_deleteMaterial;
}

export interface DeleteMaterialVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMaterial
// ====================================================

export interface CreateMaterial_createMaterial {
  __typename: "Material";
  id: string;
  name: string;
  price: number;
  updatedAt: any;
}

export interface CreateMaterial {
  createMaterial: CreateMaterial_createMaterial;
}

export interface CreateMaterialVariables {
  name: string;
  price: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCustomerMutation
// ====================================================

export interface CreateCustomerMutation_createCustomer {
  __typename: "Customer";
  id: string;
  name: string | null;
  identificationNumber: string | null;
  personName: string | null;
  email: string | null;
  phone: string | null;
}

export interface CreateCustomerMutation {
  createCustomer: CreateCustomerMutation_createCustomer;
}

export interface CreateCustomerMutationVariables {
  input: CreateCustomerInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCustomerHelperInfo
// ====================================================

export interface GetCustomerHelperInfo_getCustomerHelperInfo {
  __typename: "CustomerHelperInfo";
  identificationNumber: string | null;
  taxIdentificationNumber: string | null;
  name: string | null;
  city: string | null;
  street: string | null;
  postNumber: string | null;
}

export interface GetCustomerHelperInfo {
  getCustomerHelperInfo: GetCustomerHelperInfo_getCustomerHelperInfo;
}

export interface GetCustomerHelperInfoVariables {
  partialIdentificationNumber: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHighestOrderNumber
// ====================================================

export interface GetHighestOrderNumber {
  getHighestOrderNumber: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateOrder
// ====================================================

export interface CreateOrder_createOrder {
  __typename: "Order";
  id: string;
  number: number;
}

export interface CreateOrder {
  createOrder: CreateOrder_createOrder;
}

export interface CreateOrderVariables {
  number: number;
  input: OrderInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindCustomerQuery
// ====================================================

export interface FindCustomerQuery_getAllCustomers_items {
  __typename: "Customer";
  id: string;
  name: string | null;
  identificationNumber: string | null;
  personName: string | null;
  email: string | null;
  phone: string | null;
}

export interface FindCustomerQuery_getAllCustomers {
  __typename: "CustomerPaginated";
  totalCount: number;
  items: FindCustomerQuery_getAllCustomers_items[];
}

export interface FindCustomerQuery {
  getAllCustomers: FindCustomerQuery_getAllCustomers;
}

export interface FindCustomerQueryVariables {
  search?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ChangePasswordMutation
// ====================================================

export interface ChangePasswordMutation_changePassword {
  __typename: "User";
  id: string;
  name: string | null;
}

export interface ChangePasswordMutation {
  changePassword: ChangePasswordMutation_changePassword;
}

export interface ChangePasswordMutationVariables {
  oldPassword: string;
  newPassword: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CustomerDetails
// ====================================================

export interface CustomerDetails_createdBy {
  __typename: "User";
  name: string | null;
}

export interface CustomerDetails_addresses {
  __typename: "Address";
  id: string;
  isPrimary: boolean;
  street: string | null;
  city: string | null;
  postNumber: string | null;
}

export interface CustomerDetails {
  __typename: "Customer";
  id: string;
  name: string | null;
  identificationNumber: string | null;
  taxIdentificationNumber: string | null;
  personName: string | null;
  email: string | null;
  phone: string | null;
  note: string | null;
  allowedBankPayments: boolean;
  createdBy: CustomerDetails_createdBy;
  createdAt: any;
  updatedAt: any;
  addresses: CustomerDetails_addresses[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CustomerFragment
// ====================================================

export interface CustomerFragment {
  __typename: "Customer";
  id: string;
  name: string | null;
  identificationNumber: string | null;
  personName: string | null;
  email: string | null;
  phone: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum OrderStatus {
  DONE = "DONE",
  NEW = "NEW",
  READY_TO_PRINT = "READY_TO_PRINT",
  TO_BE_SHIPPED = "TO_BE_SHIPPED",
  WAITING_FOR_CALCULATION = "WAITING_FOR_CALCULATION",
  WAITING_FOR_PRODUCTION = "WAITING_FOR_PRODUCTION",
}

export interface AddressInput {
  city?: string | null;
  isPrimary?: boolean | null;
  number?: string | null;
  postNumber?: string | null;
  state?: string | null;
  street?: string | null;
}

export interface CreateCustomerInput {
  addresses?: AddressInput[] | null;
  allowedBankPayments?: boolean | null;
  email?: string | null;
  identificationNumber?: string | null;
  name?: string | null;
  note?: string | null;
  personName?: string | null;
  phone?: string | null;
  taxIdentificationNumber?: string | null;
}

export interface OrderInput {
  customerId?: string | null;
  items: OrderItemInput[];
  note?: string | null;
  status?: OrderStatus | null;
  totalPrice: number;
  totalTax: number;
  urgency?: number | null;
}

export interface OrderItemInput {
  height?: number | null;
  materialId?: string | null;
  name?: string | null;
  pieces?: number | null;
  totalPrice: number;
  totalTax: number;
  width?: number | null;
}

export interface UpdateAddressInput {
  city?: string | null;
  id?: string | null;
  isPrimary?: boolean | null;
  number?: string | null;
  postNumber?: string | null;
  state?: string | null;
  street?: string | null;
}

export interface UpdateCustomerInput {
  addresses?: UpdateAddressInput[] | null;
  allowedBankPayments?: boolean | null;
  email?: string | null;
  id?: string | null;
  identificationNumber?: string | null;
  name?: string | null;
  note?: string | null;
  personName?: string | null;
  phone?: string | null;
  taxIdentificationNumber?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
