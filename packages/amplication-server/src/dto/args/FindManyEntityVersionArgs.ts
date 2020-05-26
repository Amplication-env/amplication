import { ArgsType, Field, Int } from '@nestjs/graphql';
import { EntityVersionOrderByInput } from '../inputs/EntityVersionOrderByInput';
import { EntityVersionWhereInput } from '../inputs/EntityVersionWhereInput';
import { WhereUniqueInput } from '../inputs/WhereUniqueInput';

@ArgsType()
export class FindManyEntityVersionArgs {
  @Field(_type => EntityVersionWhereInput, { nullable: true })
  where?: EntityVersionWhereInput | null;

  @Field(_type => EntityVersionOrderByInput, { nullable: true })
  orderBy?: EntityVersionOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;
}
