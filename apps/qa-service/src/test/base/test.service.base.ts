/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Test as PrismaTest } from "@prisma/client";

export class TestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TestCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestCountArgs>
  ): Promise<number> {
    return this.prisma.test.count(args);
  }

  async tests<T extends Prisma.TestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestFindManyArgs>
  ): Promise<PrismaTest[]> {
    return this.prisma.test.findMany(args);
  }
  async test<T extends Prisma.TestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestFindUniqueArgs>
  ): Promise<PrismaTest | null> {
    return this.prisma.test.findUnique(args);
  }
  async createTest<T extends Prisma.TestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestCreateArgs>
  ): Promise<PrismaTest> {
    return this.prisma.test.create<T>(args);
  }
  async updateTest<T extends Prisma.TestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestUpdateArgs>
  ): Promise<PrismaTest> {
    return this.prisma.test.update<T>(args);
  }
  async deleteTest<T extends Prisma.TestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDeleteArgs>
  ): Promise<PrismaTest> {
    return this.prisma.test.delete(args);
  }
}
