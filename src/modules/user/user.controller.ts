import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';

@Crud({ model: { type: User } })
@Controller('api/user')
export class UseerController implements CrudController<User> {
  constructor(public readonly service: UserService) {}
}
