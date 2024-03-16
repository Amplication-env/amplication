import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SomeThingService } from "./someThing.service";
import { SomeThingControllerBase } from "./base/someThing.controller.base";

@swagger.ApiTags("someThings")
@common.Controller("someThings")
export class SomeThingController extends SomeThingControllerBase {
  constructor(
    protected readonly service: SomeThingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
