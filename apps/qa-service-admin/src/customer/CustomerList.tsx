import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SOMETHING_TITLE_FIELD } from "../someThing/SomeThingTitle";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Id" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Customer Type" source="customerType" />
        <ReferenceField
          label="Some Thing"
          source="something.id"
          reference="SomeThing"
        >
          <TextField source={SOMETHING_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
