import { SchemaOptions } from 'mongoose';

export interface TypegooseClass {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): any;
}

export interface TypegooseClassWrapper {
  typegooseClass: TypegooseClass;
}

export interface TypegooseClassWithOptions extends TypegooseClassWrapper {
  schemaOptions?: SchemaOptions;
  discriminators?: (TypegooseClass | TypegooseDiscriminator)[];
}

export interface TypegooseDiscriminator extends TypegooseClassWrapper {
  discriminatorId?: string;
}
