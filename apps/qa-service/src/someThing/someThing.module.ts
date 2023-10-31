import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SomeThingModuleBase } from "./base/someThing.module.base";
import { SomeThingService } from "./someThing.service";
import { SomeThingController } from "./someThing.controller";
import { SomeThingResolver } from "./someThing.resolver";

@Module({
  imports: [SomeThingModuleBase, forwardRef(() => AuthModule)],
  controllers: [SomeThingController],
  providers: [SomeThingService, SomeThingResolver],
  exports: [SomeThingService],
})
export class SomeThingModule {}
