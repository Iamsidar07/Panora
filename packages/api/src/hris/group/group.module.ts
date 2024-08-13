import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './services/group.service';
import { ServiceRegistry } from './services/registry.service';
import { SyncService } from './sync/sync.service';
import { IngestDataService } from '@@core/@core-services/unification/ingest-data.service';
import { WebhookService } from '@@core/@core-services/webhooks/panora-webhooks/webhook.service';
import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';
import { GustoGroupMapper } from './services/gusto/mappers';
import { GustoService } from './services/gusto';

@Module({
  controllers: [GroupController],
  providers: [
    GroupService,
    SyncService,
    WebhookService,
    CoreUnification,
    ServiceRegistry,
    IngestDataService,
    GustoGroupMapper,
    /* PROVIDERS SERVICES */
    GustoService,
  ],
  exports: [SyncService],
})
export class GroupModule {}
