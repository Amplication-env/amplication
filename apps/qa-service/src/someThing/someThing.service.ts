import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SomeThingServiceBase } from "./base/someThing.service.base";

@Injectable()
export class SomeThingService extends SomeThingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
