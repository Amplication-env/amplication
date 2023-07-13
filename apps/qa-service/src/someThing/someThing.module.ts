import { Module } from "@nestjs/common";
import { SomeThingModuleBase } from "./base/someThing.module.base";
import { SomeThingService } from "./someThing.service";
import { SomeThingController } from "./someThing.controller";
import { SomeThingResolver } from "./someThing.resolver";

@Module({
  imports: [SomeThingModuleBase],
  controllers: [SomeThingController],
  providers: [SomeThingService, SomeThingResolver],
  exports: [SomeThingService],
})
export class SomeThingModule {}
