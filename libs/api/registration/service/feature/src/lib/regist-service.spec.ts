import { Test, TestingModule } from '@nestjs/testing';

import { RegistrationService } from './regist.service';
import { RegistEntity } from './regist-entity';

import { LoginService } from '@charity-spot/api/login/service/feature';
import { LoginRepository } from '@charity-spot/api/login/repository/data-access';

import { RegistrationRepository } from '@charity-spot/api/registration/repository/data-access';
import { PrismaService } from '@charity-spot/api/shared/services/prisma';



const RegistrationEntity = new RegistEntity();

describe ( 'Registration Service', () => {
    let service: RegistrationService;
    let repository: RegistrationRepository;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [RegistrationService, RegistrationRepository, PrismaService, LoginService, LoginRepository],
        }).compile();

        service = module.get<RegistrationService>(RegistrationService);

  });
