/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AddressInput: { // input type
    city?: string | null; // String
    isPrimary?: boolean | null; // Boolean
    number?: string | null; // String
    postNumber?: string | null; // String
    state?: string | null; // String
    street?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Address: prisma.Address;
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Customer: prisma.Customer;
  CustomerEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Customer']; // Customer!
  }
  CustomerHelperInfo: { // root type
    city?: string | null; // String
    identificationNumber?: string | null; // String
    name?: string | null; // String
    postNumber?: string | null; // String
    street?: string | null; // String
    taxIdentificationNumber?: string | null; // String
  }
  CustomersConnection: { // root type
    edges: NexusGenRootTypes['CustomerEdge'][]; // [CustomerEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  Mutation: {};
  Order: prisma.Order;
  OrderEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Order']; // Order!
  }
  OrdersConnection: { // root type
    edges: NexusGenRootTypes['OrderEdge'][]; // [OrderEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  User: prisma.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AddressInput: NexusGenInputs['AddressInput'];
}

export interface NexusGenFieldTypes {
  Address: { // field return type
    city: string | null; // String
    id: string; // String!
    isPrimary: boolean; // Boolean!
    number: string | null; // String
    postNumber: string | null; // String
    street: string | null; // String
  }
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Customer: { // field return type
    address: NexusGenRootTypes['Address'][]; // [Address!]!
    createdBy: NexusGenRootTypes['User']; // User!
    email: string | null; // String
    id: string; // String!
    identificationNumber: string | null; // String
    name: string | null; // String
    note: string | null; // String
    personName: string | null; // String
    phone: string | null; // String
    taxIdentificationNumber: string | null; // String
  }
  CustomerEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Customer']; // Customer!
  }
  CustomerHelperInfo: { // field return type
    city: string | null; // String
    identificationNumber: string | null; // String
    name: string | null; // String
    postNumber: string | null; // String
    street: string | null; // String
    taxIdentificationNumber: string | null; // String
  }
  CustomersConnection: { // field return type
    edges: NexusGenRootTypes['CustomerEdge'][]; // [CustomerEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  Mutation: { // field return type
    changePassword: NexusGenRootTypes['User']; // User!
    createCustomer: NexusGenRootTypes['Customer']; // Customer!
    createOrder: NexusGenRootTypes['Order']; // Order!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    register: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Order: { // field return type
    createdAt: any; // DateTime!
    createdBy: NexusGenRootTypes['User']; // User!
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    id: string; // String!
    number: number; // Int!
    updatedAt: any; // DateTime!
  }
  OrderEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Order']; // Order!
  }
  OrdersConnection: { // field return type
    edges: NexusGenRootTypes['OrderEdge'][]; // [OrderEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    getAllCustomers: NexusGenRootTypes['CustomersConnection']; // CustomersConnection!
    getAllOrders: NexusGenRootTypes['OrdersConnection']; // OrdersConnection!
    getCustomerHelperInfo: NexusGenRootTypes['CustomerHelperInfo']; // CustomerHelperInfo!
    me: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    email: string; // String!
    id: string; // String!
    name: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Customer: {
    address: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Mutation: {
    changePassword: { // args
      newPassword: string; // String!
      oldPassword: string; // String!
    }
    createCustomer: { // args
      addresses?: NexusGenInputs['AddressInput'][] | null; // [AddressInput!]
      allowedBankPayments?: boolean | null; // Boolean
      email?: string | null; // String
      identificationNumber?: string | null; // String
      name?: string | null; // String
      note?: string | null; // String
      personName?: string | null; // String
      phone?: string | null; // String
      taxIdentificationNumber?: string | null; // String
    }
    createOrder: { // args
      number: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    register: { // args
      email: string; // String!
      name?: string | null; // String
      password: string; // String!
    }
  }
  Query: {
    getAllCustomers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    getAllOrders: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    getCustomerHelperInfo: { // args
      partialIdentificationNumber: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Address" | "AuthPayload" | "Customer" | "CustomerEdge" | "CustomerHelperInfo" | "CustomersConnection" | "Mutation" | "Order" | "OrderEdge" | "OrdersConnection" | "PageInfo" | "Query" | "User";

export type NexusGenInputNames = "AddressInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}