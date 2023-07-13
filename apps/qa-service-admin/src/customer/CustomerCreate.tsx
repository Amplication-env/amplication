import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { SomeThingTitle } from "../someThing/SomeThingTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Phone" source="phone" />
        <SelectInput
          source="customerType"
          label="Customer Type"
          choices={[
            { label: "INDIVIDUAL", value: "INDIVIDUAL" },
            { label: "COMPANY", value: "COMPANY" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="someThing.id"
          reference="SomeThing"
          label="Some Thing"
        >
          <SelectInput optionText={SomeThingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
