import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClassModelService } from "./classModel.service";
import { ClassModelControllerBase } from "./base/classModel.controller.base";

@swagger.ApiTags("classModels")
@common.Controller("classModels")
export class ClassModelController extends ClassModelControllerBase {
  constructor(
    protected readonly service: ClassModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
